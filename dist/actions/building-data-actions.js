'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadBuildingTileError = exports.loadBuildingTileSuccess = exports.loadBuildingTileStart = exports.updateBuildingTiles = exports.loadBuildingTile = undefined;

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _reduxActions = require('redux-actions');

var _actionTypes = require('../constants/action-types');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _map = [_actionTypes2.default.LOAD_BUILDING_TILE, _actionTypes2.default.UPDATE_BUILDING_TILES, _actionTypes2.default.LOAD_BUILDING_TILE_START, _actionTypes2.default.LOAD_BUILDING_TILE_SUCCESS, _actionTypes2.default.LOAD_BUILDING_TILE_ERROR].map(function (action) {
  return (0, _reduxActions.createAction)(action);
}),
    _map2 = (0, _slicedToArray3.default)(_map, 5);

var loadBuildingTile = _map2[0],
    updateBuildingTiles = _map2[1],
    loadBuildingTileStart = _map2[2],
    loadBuildingTileSuccess = _map2[3],
    loadBuildingTileError = _map2[4];
exports.loadBuildingTile = loadBuildingTile;
exports.updateBuildingTiles = updateBuildingTiles;
exports.loadBuildingTileStart = loadBuildingTileStart;
exports.loadBuildingTileSuccess = loadBuildingTileSuccess;
exports.loadBuildingTileError = loadBuildingTileError;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL2J1aWxkaW5nLWRhdGEtYWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJMT0FEX0JVSUxESU5HX1RJTEUiLCJVUERBVEVfQlVJTERJTkdfVElMRVMiLCJMT0FEX0JVSUxESU5HX1RJTEVfU1RBUlQiLCJMT0FEX0JVSUxESU5HX1RJTEVfU1VDQ0VTUyIsIkxPQURfQlVJTERJTkdfVElMRV9FUlJPUiIsIm1hcCIsImFjdGlvbiIsImxvYWRCdWlsZGluZ1RpbGUiLCJ1cGRhdGVCdWlsZGluZ1RpbGVzIiwibG9hZEJ1aWxkaW5nVGlsZVN0YXJ0IiwibG9hZEJ1aWxkaW5nVGlsZVN1Y2Nlc3MiLCJsb2FkQnVpbGRpbmdUaWxlRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztXQVFJLENBQ0Ysc0JBQVlBLGtCQURWLEVBRUYsc0JBQVlDLHFCQUZWLEVBR0Ysc0JBQVlDLHdCQUhWLEVBSUYsc0JBQVlDLDBCQUpWLEVBS0Ysc0JBQVlDLHdCQUxWLEVBTUZDLEdBTkUsQ0FNRTtBQUFBLFNBQVUsZ0NBQWFDLE1BQWIsQ0FBVjtBQUFBLENBTkYsQzs7O0lBTEZDLGdCO0lBQ0FDLG1CO0lBQ0FDLHFCO0lBQ0FDLHVCO0lBQ0FDLHFCIiwiZmlsZSI6ImJ1aWxkaW5nLWRhdGEtYWN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQWN0aW9ufSBmcm9tICdyZWR1eC1hY3Rpb25zJztcbmltcG9ydCBBY3Rpb25UeXBlcyBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcblxuZXhwb3J0IGNvbnN0IFtcbiAgbG9hZEJ1aWxkaW5nVGlsZSxcbiAgdXBkYXRlQnVpbGRpbmdUaWxlcyxcbiAgbG9hZEJ1aWxkaW5nVGlsZVN0YXJ0LFxuICBsb2FkQnVpbGRpbmdUaWxlU3VjY2VzcyxcbiAgbG9hZEJ1aWxkaW5nVGlsZUVycm9yXG5dID0gW1xuICBBY3Rpb25UeXBlcy5MT0FEX0JVSUxESU5HX1RJTEUsXG4gIEFjdGlvblR5cGVzLlVQREFURV9CVUlMRElOR19USUxFUyxcbiAgQWN0aW9uVHlwZXMuTE9BRF9CVUlMRElOR19USUxFX1NUQVJULFxuICBBY3Rpb25UeXBlcy5MT0FEX0JVSUxESU5HX1RJTEVfU1VDQ0VTUyxcbiAgQWN0aW9uVHlwZXMuTE9BRF9CVUlMRElOR19USUxFX0VSUk9SXG5dLm1hcChhY3Rpb24gPT4gY3JlYXRlQWN0aW9uKGFjdGlvbikpO1xuIl19