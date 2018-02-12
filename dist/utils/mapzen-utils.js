'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TilesCollection = exports.TilesCache = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

exports.getQueryURL = getQueryURL;
exports.normalizeZ = normalizeZ;
exports.getTileCoordinates = getTileCoordinates;
exports.getBounds = getBounds;

var _defaultSettings = require('../constants/default-settings');

var _deck = require('deck.gl');

var _d3Array = require('d3-array');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// only use tiles from this zoom level to maximize caching
var MAX_ZOOM = 16;
// only load tiles above this zoom level
/*
 * Query, manage and format OpenStreetMap data
 */

var MIN_ZOOM = 12;

function mercatorY(latitude) {
  return Math.asinh(Math.tan(latitude / 180 * Math.PI));
}

/*
 * Construct an URL to retreive vector tile from Mapzen API
 * https://mapzen.com/documentation/vector-tiles/use-service/
 */
function getQueryURL(x, y, z) {
  return 'https://vector.mapzen.com/osm/buildings/' + (z + '/' + x + '/' + y + '.json?api_key=' + _defaultSettings.MAPZEN_API_KEY);
}

/*
 * get z value from zoom
 */
function normalizeZ(zoom) {
  return Math.min(Math.floor(zoom), MAX_ZOOM);
}

/*
 * Calculate OpenStreetMap tile names from lng, lat and zoom
 * http://wiki.openstreetmap.org/wiki/Slippy_map_tilenames#X_and_Y
 */
function getTileCoordinates(longitude, latitude, zoom) {
  var z = normalizeZ(zoom);
  longitude = Math.min(180, Math.max(-180, longitude));
  latitude = Math.min(85.0511, Math.max(-85.0511, latitude));

  var scale = Math.pow(2, z);
  var x = Math.floor((longitude / 360 + 1 / 2) * scale);
  var y = Math.floor((1 - mercatorY(latitude) / Math.PI) / 2 * scale);

  return { x: x, y: y, z: z };
}

function getBounds(mapState) {
  var viewport = new _deck.WebMercatorViewport(mapState);

  // project 4 corners of perspective viewport
  var topLeft = viewport.unproject([0, 0]);
  var bottomRight = viewport.unproject([mapState.width, mapState.height]);
  var topRight = viewport.unproject([mapState.width, 0]);
  var bottomLeft = viewport.unproject([0, mapState.height]);

  // normalize bearing, always return [[lngMin, latMax], [lngMax. latMin]]

  var _extent = (0, _d3Array.extent)([topLeft, bottomRight, topRight, bottomLeft], function (d) {
    return d[0];
  }),
      _extent2 = (0, _slicedToArray3.default)(_extent, 2),
      lngMin = _extent2[0],
      lngMax = _extent2[1];

  var _extent3 = (0, _d3Array.extent)([topLeft, bottomRight, topRight, bottomLeft], function (d) {
    return d[1];
  }),
      _extent4 = (0, _slicedToArray3.default)(_extent3, 2),
      latMin = _extent4[0],
      latMax = _extent4[1];

  return [[lngMin, latMax], [lngMax, latMin]];
}

/*
 * Simple manager that caches and looks up tiles data
 */

var TilesCache = exports.TilesCache = function () {
  function TilesCache() {
    (0, _classCallCheck3.default)(this, TilesCache);

    this.cache = {};
  }

  (0, _createClass3.default)(TilesCache, [{
    key: 'set',
    value: function set(x, y, z, value) {
      this.cache[x + '-' + y + '-' + z] = value;
      return this;
    }
  }, {
    key: 'get',
    value: function get(x, y, z) {
      return this.cache[x + '-' + y + '-' + z];
    }
  }, {
    key: 'has',
    value: function has(x, y, z) {
      return x + '-' + y + '-' + z in this.cache;
    }
  }]);
  return TilesCache;
}();

/*
 * Calculates the set of tiles that need to be loaded to fill a given viewport.
 */
/* eslint-disable max-statements */


var TilesCollection = exports.TilesCollection = function () {
  function TilesCollection(mapState) {
    (0, _classCallCheck3.default)(this, TilesCollection);

    if (mapState && mapState.zoom >= MIN_ZOOM) {
      // approx. bounds of the viewport
      var queryZoom = normalizeZ(mapState.zoom);
      var bounds = getBounds(mapState);

      var topLeft = getTileCoordinates.apply(undefined, (0, _toConsumableArray3.default)(bounds[0]).concat([queryZoom]));
      var bottomRight = getTileCoordinates.apply(undefined, (0, _toConsumableArray3.default)(bounds[1]).concat([queryZoom]));

      this.left = topLeft.x;
      this.right = bottomRight.x;
      this.zoom = queryZoom;
      this.top = topLeft.y;
      this.bottom = bottomRight.y;
      this.size = (bottomRight.x - topLeft.x + 1) * (bottomRight.y - topLeft.y + 1);
    } else {
      this.size = 0;
    }

    this.tiles = this.getTiles();
  }

  // returns an array of tiles as {x, y} coordinates


  (0, _createClass3.default)(TilesCollection, [{
    key: 'getTiles',
    value: function getTiles() {
      if (this.tiles) {
        return this.tiles;
      }

      var tiles = null;

      if (this.size > 0) {
        tiles = [];
        for (var x0 = this.left; x0 <= this.right; x0++) {
          for (var y0 = this.top; y0 <= this.bottom; y0++) {
            tiles.push({ x: x0, y: y0, z: this.zoom });
          }
        }
      }

      return tiles;
    }

    // supplying 2 parameters x, y:
    // [returns] true if the given tile is inside this collection
    // supplying 1 parameter tilesCollection:
    // [returns] true if given collection is a subset of this one

  }, {
    key: 'contains',
    value: function contains(x, y, z) {
      if (y === undefined) {
        var that = x;
        return this.zoom === that.zoom && this.left <= that.left && this.right >= that.right && this.top <= that.top && this.bottom >= that.bottom;
      }

      return z === this.zoom && x >= this.left && x <= this.right && y >= this.top && y <= this.bottom;
    }
  }]);
  return TilesCollection;
}();
/* eslint-enable max-statements */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9tYXB6ZW4tdXRpbHMuanMiXSwibmFtZXMiOlsiZ2V0UXVlcnlVUkwiLCJub3JtYWxpemVaIiwiZ2V0VGlsZUNvb3JkaW5hdGVzIiwiZ2V0Qm91bmRzIiwiTUFYX1pPT00iLCJNSU5fWk9PTSIsIm1lcmNhdG9yWSIsImxhdGl0dWRlIiwiTWF0aCIsImFzaW5oIiwidGFuIiwiUEkiLCJ4IiwieSIsInoiLCJ6b29tIiwibWluIiwiZmxvb3IiLCJsb25naXR1ZGUiLCJtYXgiLCJzY2FsZSIsInBvdyIsIm1hcFN0YXRlIiwidmlld3BvcnQiLCJ0b3BMZWZ0IiwidW5wcm9qZWN0IiwiYm90dG9tUmlnaHQiLCJ3aWR0aCIsImhlaWdodCIsInRvcFJpZ2h0IiwiYm90dG9tTGVmdCIsImQiLCJsbmdNaW4iLCJsbmdNYXgiLCJsYXRNaW4iLCJsYXRNYXgiLCJUaWxlc0NhY2hlIiwiY2FjaGUiLCJ2YWx1ZSIsIlRpbGVzQ29sbGVjdGlvbiIsInF1ZXJ5Wm9vbSIsImJvdW5kcyIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsInNpemUiLCJ0aWxlcyIsImdldFRpbGVzIiwieDAiLCJ5MCIsInB1c2giLCJ1bmRlZmluZWQiLCJ0aGF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQXFCZ0JBLFcsR0FBQUEsVztRQVVBQyxVLEdBQUFBLFU7UUFRQUMsa0IsR0FBQUEsa0I7UUFZQUMsUyxHQUFBQSxTOztBQS9DaEI7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTtBQUNBLElBQU1DLFdBQVcsRUFBakI7QUFDQTtBQVZBOzs7O0FBV0EsSUFBTUMsV0FBVyxFQUFqQjs7QUFFQSxTQUFTQyxTQUFULENBQW1CQyxRQUFuQixFQUE2QjtBQUMzQixTQUFPQyxLQUFLQyxLQUFMLENBQVdELEtBQUtFLEdBQUwsQ0FBU0gsV0FBVyxHQUFYLEdBQWlCQyxLQUFLRyxFQUEvQixDQUFYLENBQVA7QUFDRDs7QUFFRDs7OztBQUlPLFNBQVNYLFdB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dXJjZXNDb250ZW50IjpbIi8qXG4gKiBRdWVyeSwgbWFuYWdlIGFuZCBmb3JtYXQgT3BlblN0cmVldE1hcCBkYXRhXG4gKi9cblxuaW1wb3J0IHtNQVBaRU5fQVBJX0tFWX0gZnJvbSAnLi4vY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuaW1wb3J0IHtXZWJNZXJjYXRvclZpZXdwb3J0fSBmcm9tICdkZWNrLmdsJztcbmltcG9ydCB7ZXh0ZW50fSBmcm9tICdkMy1hcnJheSc7XG5cbi8vIG9ubHkgdXNlIHRpbGVzIGZyb20gdGhpcyB6b29tIGxldmVsIHRvIG1heGltaXplIGNhY2hpbmdcbmNvbnN0IE1BWF9aT09NID0gMTY7XG4vLyBvbmx5IGxvYWQgdGlsZXMgYWJvdmUgdGhpcyB6b29tIGxldmVsXG5jb25zdCBNSU5fWk9PTSA9IDEyO1xuXG5mdW5jdGlvbiBtZXJjYXRvclkobGF0aXR1ZGUpIHtcbiAgcmV0dXJuIE1hdGguYXNpbmgoTWF0aC50YW4obGF0aXR1ZGUgLyAxODAgKiBNYXRoLlBJKSk7XG59XG5cbi8qXG4gKiBDb25zdHJ1Y3QgYW4gVVJMIHRvIHJldHJlaXZlIHZlY3RvciB0aWxlIGZyb20gTWFwemVuIEFQSVxuICogaHR0cHM6Ly9tYXB6ZW4uY29tL2RvY3VtZW50YXRpb24vdmVjdG9yLXRpbGVzL3VzZS1zZXJ2aWNlL1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UXVlcnlVUkwoeCwgeSwgeikge1xuICByZXR1cm4gKFxuICAgICdodHRwczovL3ZlY3Rvci5tYXB6ZW4uY29tL29zbS9idWlsZGluZ3MvJyArXG4gICAgYCR7en0vJHt4fS8ke3l9Lmpzb24/YXBpX2tleT0ke01BUFpFTl9BUElfS0VZfWBcbiAgKTtcbn1cblxuLypcbiAqIGdldCB6IHZhbHVlIGZyb20gem9vbVxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplWih6b29tKSB7XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLmZsb29yKHpvb20pLCBNQVhfWk9PTSk7XG59XG5cbi8qXG4gKiBDYWxjdWxhdGUgT3BlblN0cmVldE1hcCB0aWxlIG5hbWVzIGZyb20gbG5nLCBsYXQgYW5kIHpvb21cbiAqIGh0dHA6Ly93aWtpLm9wZW5zdHJlZXRtYXAub3JnL3dpa2kvU2xpcHB5X21hcF90aWxlbmFtZXMjWF9hbmRfWVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGlsZUNvb3JkaW5hdGVzKGxvbmdpdHVkZSwgbGF0aXR1ZGUsIHpvb20pIHtcbiAgY29uc3QgeiA9IG5vcm1hbGl6ZVooem9vbSk7XG4gIGxvbmdpdHVkZSA9IE1hdGgubWluKDE4MCwgTWF0aC5tYXgoLTE4MCwgbG9uZ2l0dWRlKSk7XG4gIGxhdGl0dWRlID0gTWF0aC5taW4oODUuMDUxMSwgTWF0aC5tYXgoLTg1LjA1MTEsIGxhdGl0dWRlKSk7XG5cbiAgY29uc3Qgc2NhbGUgPSBNYXRoLnBvdygyLCB6KTtcbiAgY29uc3QgeCA9IE1hdGguZmxvb3IoKGxvbmdpdHVkZSAvIDM2MCArIDEgLyAyKSAqIHNjYWxlKTtcbiAgY29uc3QgeSA9IE1hdGguZmxvb3IoKDEgLSBtZXJjYXRvclkobGF0aXR1ZGUpIC8gTWF0aC5QSSkgLyAyICogc2NhbGUpO1xuXG4gIHJldHVybiB7eCwgeSwgen07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCb3VuZHMobWFwU3RhdGUpIHtcbiAgY29uc3Qgdmlld3BvcnQgPSBuZXcgV2ViTWVyY2F0b3JWaWV3cG9ydChtYXBTdGF0ZSk7XG5cbiAgLy8gcHJvamVjdCA0IGNvcm5lcnMgb2YgcGVyc3BlY3RpdmUgdmlld3BvcnRcbiAgY29uc3QgdG9wTGVmdCA9IHZpZXdwb3J0LnVucHJvamVjdChbMCwgMF0pO1xuICBjb25zdCBib3R0b21SaWdodCA9IHZpZXdwb3J0LnVucHJvamVjdChbbWFwU3RhdGUud2lkdGgsIG1hcFN0YXRlLmhlaWdodF0pO1xuICBjb25zdCB0b3BSaWdodCA9IHZpZXdwb3J0LnVucHJvamVjdChbbWFwU3RhdGUud2lkdGgsIDBdKTtcbiAgY29uc3QgYm90dG9tTGVmdCA9IHZpZXdwb3J0LnVucHJvamVjdChbMCwgbWFwU3RhdGUuaGVpZ2h0XSk7XG5cbiAgLy8gbm9ybWFsaXplIGJlYXJpbmcsIGFsd2F5cyByZXR1cm4gW1tsbmdNaW4sIGxhdE1heF0sIFtsbmdNYXguIGxhdE1pbl1dXG4gIGNvbnN0IFtsbmdNaW4sIGxuZ01heF0gPSBleHRlbnQoXG4gICAgW3RvcExlZnQsIGJvdHRvbVJpZ2h0LCB0b3BSaWdodCwgYm90dG9tTGVmdF0sXG4gICAgZCA9PiBkWzBdXG4gICk7XG5cbiAgY29uc3QgW2xhdE1pbiwgbGF0TWF4XSA9IGV4dGVudChcbiAgICBbdG9wTGVmdCwgYm90dG9tUmlnaHQsIHRvcFJpZ2h0LCBib3R0b21MZWZ0XSxcbiAgICBkID0+IGRbMV1cbiAgKTtcblxuICByZXR1cm4gW1tsbmdNaW4sIGxhdE1heF0sIFtsbmdNYXgsIGxhdE1pbl1dO1xufVxuXG4vKlxuICogU2ltcGxlIG1hbmFnZXIgdGhhdCBjYWNoZXMgYW5kIGxvb2tzIHVwIHRpbGVzIGRhdGFcbiAqL1xuZXhwb3J0IGNsYXNzIFRpbGVzQ2FjaGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNhY2hlID0ge307XG4gIH1cblxuICBzZXQoeCwgeSwgeiwgdmFsdWUpIHtcbiAgICB0aGlzLmNhY2hlW2Ake3h9LSR7eX0tJHt6fWBdID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQoeCwgeSwgeikge1xuICAgIHJldHVybiB0aGlzLmNhY2hlW2Ake3h9LSR7eX0tJHt6fWBdO1xuICB9XG5cbiAgaGFzKHgsIHksIHopIHtcbiAgICByZXR1cm4gYCR7eH0tJHt5fS0ke3p9YCBpbiB0aGlzLmNhY2hlO1xuICB9XG59XG5cbi8qXG4gKiBDYWxjdWxhdGVzIHRoZSBzZXQgb2YgdGlsZXMgdGhhdCBuZWVkIHRvIGJlIGxvYWRlZCB0byBmaWxsIGEgZ2l2ZW4gdmlld3BvcnQuXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1zdGF0ZW1lbnRzICovXG5leHBvcnQgY2xhc3MgVGlsZXNDb2xsZWN0aW9uIHtcbiAgY29uc3RydWN0b3IobWFwU3RhdGUpIHtcbiAgICBpZiAobWFwU3RhdGUgJiYgbWFwU3RhdGUuem9vbSA+PSBNSU5fWk9PTSkge1xuICAgICAgLy8gYXBwcm94LiBib3VuZHMgb2YgdGhlIHZpZXdwb3J0XG4gICAgICBjb25zdCBxdWVyeVpvb20gPSBub3JtYWxpemVaKG1hcFN0YXRlLnpvb20pO1xuICAgICAgY29uc3QgYm91bmRzID0gZ2V0Qm91bmRzKG1hcFN0YXRlKTtcblxuICAgICAgY29uc3QgdG9wTGVmdCA9IGdldFRpbGVDb29yZGluYXRlcyguLi5ib3VuZHNbMF0sIHF1ZXJ5Wm9vbSk7XG4gICAgICBjb25zdCBib3R0b21SaWdodCA9IGdldFRpbGVDb29yZGluYXRlcyguLi5ib3VuZHNbMV0sIHF1ZXJ5Wm9vbSk7XG5cbiAgICAgIHRoaXMubGVmdCA9IHRvcExlZnQueDtcbiAgICAgIHRoaXMucmlnaHQgPSBib3R0b21SaWdodC54O1xuICAgICAgdGhpcy56b29tID0gcXVlcnlab29tO1xuICAgICAgdGhpcy50b3AgPSB0b3BMZWZ0Lnk7XG4gICAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbVJpZ2h0Lnk7XG4gICAgICB0aGlzLnNpemUgPVxuICAgICAgICAoYm90dG9tUmlnaHQueCAtIHRvcExlZnQueCArIDEpICogKGJvdHRvbVJpZ2h0LnkgLSB0b3BMZWZ0LnkgKyAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaXplID0gMDtcbiAgICB9XG5cbiAgICB0aGlzLnRpbGVzID0gdGhpcy5nZXRUaWxlcygpO1xuICB9XG5cbiAgLy8gcmV0dXJucyBhbiBhcnJheSBvZiB0aWxlcyBhcyB7eCwgeX0gY29vcmRpbmF0ZXNcbiAgZ2V0VGlsZXMoKSB7XG4gICAgaWYgKHRoaXMudGlsZXMpIHtcbiAgICAgIHJldHVybiB0aGlzLnRpbGVzO1xuICAgIH1cblxuICAgIGxldCB0aWxlcyA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5zaXplID4gMCkge1xuICAgICAgdGlsZXMgPSBbXTtcbiAgICAgIGZvciAobGV0IHgwID0gdGhpcy5sZWZ0OyB4MCA8PSB0aGlzLnJpZ2h0OyB4MCsrKSB7XG4gICAgICAgIGZvciAobGV0IHkwID0gdGhpcy50b3A7IHkwIDw9IHRoaXMuYm90dG9tOyB5MCsrKSB7XG4gICAgICAgICAgdGlsZXMucHVzaCh7eDogeDAsIHk6IHkwLCB6OiB0aGlzLnpvb219KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aWxlcztcbiAgfVxuXG4gIC8vIHN1cHBseWluZyAyIHBhcmFtZXRlcnMgeCwgeTpcbiAgLy8gW3JldHVybnNdIHRydWUgaWYgdGhlIGdpdmVuIHRpbGUgaXMgaW5zaWRlIHRoaXMgY29sbGVjdGlvblxuICAvLyBzdXBwbHlpbmcgMSBwYXJhbWV0ZXIgdGlsZXNDb2xsZWN0aW9uOlxuICAvLyBbcmV0dXJuc10gdHJ1ZSBpZiBnaXZlbiBjb2xsZWN0aW9uIGlzIGEgc3Vic2V0IG9mIHRoaXMgb25lXG4gIGNvbnRhaW5zKHgsIHksIHopIHtcbiAgICBpZiAoeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCB0aGF0ID0geDtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMuem9vbSA9PT0gdGhhdC56b29tICYmXG4gICAgICAgIHRoaXMubGVmdCA8PSB0aGF0LmxlZnQgJiZcbiAgICAgICAgdGhpcy5yaWdodCA+PSB0aGF0LnJpZ2h0ICYmXG4gICAgICAgIHRoaXMudG9wIDw9IHRoYXQudG9wICYmXG4gICAgICAgIHRoaXMuYm90dG9tID49IHRoYXQuYm90dG9tXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICB6ID09PSB0aGlzLnpvb20gJiZcbiAgICAgIHggPj0gdGhpcy5sZWZ0ICYmXG4gICAgICB4IDw9IHRoaXMucmlnaHQgJiZcbiAgICAgIHkgPj0gdGhpcy50b3AgJiZcbiAgICAgIHkgPD0gdGhpcy5ib3R0b21cbiAgICApO1xuICB9XG59XG4vKiBlc2xpbnQtZW5hYmxlIG1heC1zdGF0ZW1lbnRzICovXG4iXX0=