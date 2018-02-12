'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INITIAL_MAP_STATE = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _handleActions;

var _reduxActions = require('redux-actions');

var _actionTypes = require('../constants/action-types');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _mapStateUpdaters = require('./map-state-updaters');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_MAP_STATE = exports.INITIAL_MAP_STATE = {
  pitch: 0,
  bearing: 0,
  latitude: 37.75043,
  longitude: -122.34679,
  zoom: 9,
  dragRotate: false,
  width: 800,
  height: 800,
  isSplit: false,
  isFullScreen: false
};

/* Reducer */
var mapStateReducer = (0, _reduxActions.handleActions)((_handleActions = {}, (0, _defineProperty3.default)(_handleActions, _actionTypes2.default.UPDATE_MAP, _mapStateUpdaters.updateMapUpdater), (0, _defineProperty3.default)(_handleActions, _actionTypes2.default.FIT_BOUNDS, _mapStateUpdaters.fitBoundsUpdater), (0, _defineProperty3.default)(_handleActions, _actionTypes2.default.TOGGLE_PERSPECTIVE, _mapStateUpdaters.togglePerspectiveUpdater), (0, _defineProperty3.default)(_handleActions, _actionTypes2.default.RECEIVE_MAP_CONFIG, _mapStateUpdaters.receiveMapConfigUpdater), (0, _defineProperty3.default)(_handleActions, _actionTypes2.default.TOGGLE_SPLIT_MAP, _mapStateUpdaters.toggleSplitMapUpdater), (0, _defineProperty3.default)(_handleActions, _actionTypes2.default.CLOSE_MAP_AT_INDEX, _mapStateUpdaters.closeMapAtIndexUpdater), (0, _defineProperty3.default)(_handleActions, _actionTypes2.default.TOGGLE_FULLSCREEN, _mapStateUpdaters.toggleFullScreenUpdater), _handleActions), INITIAL_MAP_STATE);

exports.default = mapStateReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9tYXAtc3RhdGUuanMiXSwibmFtZXMiOlsiSU5JVElBTF9NQVBfU1RBVEUiLCJwaXRjaCIsImJlYXJpbmciLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInpvb20iLCJkcmFnUm90YXRlIiwid2lkdGgiLCJoZWlnaHQiLCJpc1NwbGl0IiwiaXNGdWxsU2NyZWVuIiwibWFwU3RhdGVSZWR1Y2VyIiwiVVBEQVRFX01BUCIsIkZJVF9CT1VORFMiLCJUT0dHTEVfUEVSU1BFQ1RJVkUiLCJSRUNFSVZFX01BUF9DT05GSUciLCJUT0dHTEVfU1BMSVRfTUFQIiwiQ0xPU0VfTUFQX0FUX0lOREVYIiwiVE9HR0xFX0ZVTExTQ1JFRU4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQWVBOzs7O0FBYk8sSUFBTUEsZ0RBQW9CO0FBQy9CQyxTQUFPLENBRHdCO0FBRS9CQyxXQUFTLENBRnNCO0FBRy9CQyxZQUFVLFFBSHFCO0FBSS9CQyxhQUFXLENBQUMsU0FKbUI7QUFLL0JDLFFBQU0sQ0FMeUI7QUFNL0JDLGNBQVksS0FObUI7QUFPL0JDLFNBQU8sR0FQd0I7QUFRL0JDLFVBQVEsR0FSdUI7QUFTL0JDLFdBQVMsS0FUc0I7QUFVL0JDLGdCQUFjO0FBVmlCLENBQTFCOztBQXVCUDtBQUNBLElBQU1DLGtCQUFrQixxR0FFbkIsc0JBQVlDLFVBRk8scUZBR25CLHNCQUFZQyxVQUhPLHFGQUluQixzQkFBWUMsa0JBSk8sNkZBS25CLHNCQUFZQyxrQkFMTyw0RkFNbkIsc0JBQVlDLGdCQU5PLDBGQU9uQixzQkFBWUMsa0JBUE8sMkZBUW5CLHNCQUFZQyxpQkFSTywrREFVdEJsQixpQkFWc0IsQ0FBeEI7O2tCQWFlVyxlIiwiZmlsZSI6Im1hcC1zdGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aGFuZGxlQWN0aW9uc30gZnJvbSAncmVkdXgtYWN0aW9ucyc7XG5pbXBvcnQgQWN0aW9uVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBJTklUSUFMX01BUF9TVEFURSA9IHtcbiAgcGl0Y2g6IDAsXG4gIGJlYXJpbmc6IDAsXG4gIGxhdGl0dWRlOiAzNy43NTA0MyxcbiAgbG9uZ2l0dWRlOiAtMTIyLjM0Njc5LFxuICB6b29tOiA5LFxuICBkcmFnUm90YXRlOiBmYWxzZSxcbiAgd2lkdGg6IDgwMCxcbiAgaGVpZ2h0OiA4MDAsXG4gIGlzU3BsaXQ6IGZhbHNlLFxuICBpc0Z1bGxTY3JlZW46IGZhbHNlXG59O1xuXG5pbXBvcnQge1xuICBjbG9zZU1hcEF0SW5kZXhVcGRhdGVyLFxuICBmaXRCb3VuZHNVcGRhdGVyLFxuICByZWNlaXZlTWFwQ29uZmlnVXBkYXRlcixcbiAgdG9nZ2xlRnVsbFNjcmVlblVwZGF0ZXIsXG4gIHRvZ2dsZVBlcnNwZWN0aXZlVXBkYXRlcixcbiAgdG9nZ2xlU3BsaXRNYXBVcGRhdGVyLFxuICB1cGRhdGVNYXBVcGRhdGVyXG59IGZyb20gJy4vbWFwLXN0YXRlLXVwZGF0ZXJzJztcblxuLyogUmVkdWNlciAqL1xuY29uc3QgbWFwU3RhdGVSZWR1Y2VyID0gaGFuZGxlQWN0aW9ucyhcbiAge1xuICAgIFtBY3Rpb25UeXBlcy5VUERBVEVfTUFQXTogdXBkYXRlTWFwVXBkYXRlcixcbiAgICBbQWN0aW9uVHlwZXMuRklUX0JPVU5EU106IGZpdEJvdW5kc1VwZGF0ZXIsXG4gICAgW0FjdGlvblR5cGVzLlRPR0dMRV9QRVJTUEVDVElWRV06IHRvZ2dsZVBlcnNwZWN0aXZlVXBkYXRlcixcbiAgICBbQWN0aW9uVHlwZXMuUkVDRUlWRV9NQVBfQ09ORklHXTogcmVjZWl2ZU1hcENvbmZpZ1VwZGF0ZXIsXG4gICAgW0FjdGlvblR5cGVzLlRPR0dMRV9TUExJVF9NQVBdOiB0b2dnbGVTcGxpdE1hcFVwZGF0ZXIsXG4gICAgW0FjdGlvblR5cGVzLkNMT1NFX01BUF9BVF9JTkRFWF06IGNsb3NlTWFwQXRJbmRleFVwZGF0ZXIsXG4gICAgW0FjdGlvblR5cGVzLlRPR0dMRV9GVUxMU0NSRUVOXTogdG9nZ2xlRnVsbFNjcmVlblVwZGF0ZXJcbiAgfSxcbiAgSU5JVElBTF9NQVBfU1RBVEVcbik7XG5cbmV4cG9ydCBkZWZhdWx0IG1hcFN0YXRlUmVkdWNlcjtcbiJdfQ==