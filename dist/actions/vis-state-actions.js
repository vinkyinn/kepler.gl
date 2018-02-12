'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layerConfigChange = layerConfigChange;
exports.layerTypeChange = layerTypeChange;
exports.layerVisualChannelConfigChange = layerVisualChannelConfigChange;
exports.layerVisConfigChange = layerVisConfigChange;
exports.updateLayerBlending = updateLayerBlending;
exports.interactionConfigChange = interactionConfigChange;
exports.setFilter = setFilter;
exports.addFilter = addFilter;
exports.addLayer = addLayer;
exports.reorderLayer = reorderLayer;
exports.removeFilter = removeFilter;
exports.removeLayer = removeLayer;
exports.removeDataset = removeDataset;
exports.showDatasetTable = showDatasetTable;
exports.updateVisData = updateVisData;
exports.toggleAnimation = toggleAnimation;
exports.updateAnimationSpeed = updateAnimationSpeed;
exports.enlargeFilter = enlargeFilter;
exports.onLayerHover = onLayerHover;
exports.onLayerClick = onLayerClick;
exports.onMapClick = onMapClick;
exports.toggleLayerForMap = toggleLayerForMap;
exports.setVisibleLayersForMap = setVisibleLayersForMap;
exports.setFilterPlot = setFilterPlot;
exports.loadFiles = loadFiles;
exports.loadFilesErr = loadFilesErr;
exports.updateVisDataAndConfiguration = updateVisDataAndConfiguration;

var _actionTypes = require('../constants/action-types');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function layerConfigChange(oldLayer, newConfig) {
  return {
    type: _actionTypes2.default.LAYER_CONFIG_CHANGE,
    oldLayer: oldLayer,
    newConfig: newConfig
  };
} // vis-state-reducer
function layerTypeChange(oldLayer, newType) {
  return {
    type: _actionTypes2.default.LAYER_TYPE_CHANGE,
    oldLayer: oldLayer,
    newType: newType
  };
}

function layerVisualChannelConfigChange(oldLayer, newConfig, channel) {
  return {
    type: _actionTypes2.default.LAYER_VISUAL_CHANNEL_CHANGE,
    oldLayer: oldLayer,
    newConfig: newConfig,
    channel: channel
  };
}

function layerVisConfigChange(oldLayer, newVisConfig) {
  return {
    type: _actionTypes2.default.LAYER_VIS_CONFIG_CHANGE,
    oldLayer: oldLayer,
    newVisConfig: newVisConfig
  };
}

function updateLayerBlending(mode) {
  return {
    type: _actionTypes2.default.UPDATE_LAYER_BLENDING,
    mode: mode
  };
}

function interactionConfigChange(config) {
  return {
    type: _actionTypes2.default.INTERACTION_CONFIG_CHANGE,
    config: config
  };
}

function setFilter(idx, prop, value) {
  return {
    type: _actionTypes2.default.SET_FILTER,
    idx: idx,
    prop: prop,
    value: value
  };
}

function addFilter(dataId) {
  return {
    type: _actionTypes2.default.ADD_FILTER,
    dataId: dataId
  };
}

function addLayer() {
  return {
    type: _actionTypes2.default.ADD_LAYER
  };
}

function reorderLayer(order) {
  return {
    type: _actionTypes2.default.REORDER_LAYER,
    order: order
  };
}

function removeFilter(idx) {
  return {
    type: _actionTypes2.default.REMOVE_FILTER,
    idx: idx
  };
}

function removeLayer(idx) {
  return {
    type: _actionTypes2.default.REMOVE_LAYER,
    idx: idx
  };
}

function removeDataset(key) {
  return {
    type: _actionTypes2.default.REMOVE_DATASET,
    key: key
  };
}

function showDatasetTable(dataId) {
  return {
    type: _actionTypes2.default.SHOW_DATASET_TABLE,
    dataId: dataId
  };
}

/**
 *
 * @param datasets - Array of datasets :
 * {info: {id: '', color: hex, label: '']}, data: {fields: [], rows: []}}
 * @param options
 * @param config
 * @returns {{type: null, datasets: *, options: *}}
 */
function updateVisData(datasets, options, config) {
  return {
    type: _actionTypes2.default.UPDATE_VIS_DATA,
    datasets: datasets,
    options: options,
    config: config
  };
}

function toggleAnimation(idx) {
  return {
    type: _actionTypes2.default.TOGGLE_FILTER_ANIMATION,
    idx: idx
  };
}

function updateAnimationSpeed(idx, speed) {
  return {
    type: _actionTypes2.default.UPDATE_FILTER_ANIMATION_SPEED,
    idx: idx,
    speed: speed
  };
}

function enlargeFilter(idx) {
  return {
    type: _actionTypes2.default.ENLARGE_FILTER,
    idx: idx
  };
}

function onLayerHover(info) {
  return {
    type: _actionTypes2.default.LAYER_HOVER,
    info: info
  };
}

function onLayerClick(info) {
  return {
    type: _actionTypes2.default.LAYER_CLICK,
    info: info
  };
}

function onMapClick() {
  return {
    type: _actionTypes2.default.MAP_CLICK
  };
}

/**
 * Toggle a single layer for a give map
 * @param mapIndex
 * @param layerId
 * @returns {{type: *, mapIndex: *, layerId: *}}
 */
function toggleLayerForMap(mapIndex, layerId) {
  return {
    type: _actionTypes2.default.TOGGLE_LAYER_FOR_MAP,
    mapIndex: mapIndex,
    layerId: layerId
  };
}

/**
 * Toggle layer visibility on split views
 * @param layerIndex the layer we want to toggle visibility on
 * @param mapIndex the map index
 * @returns {{type: null, layerIndex: *, mapIndex: *}}
 */
function setVisibleLayersForMap(mapIndex, layerIds) {
  return {
    type: _actionTypes2.default.SET_VISIBLE_LAYERS_FOR_MAP,
    mapIndex: mapIndex,
    layerIds: layerIds
  };
}

function setFilterPlot(idx, newProp) {
  return {
    type: _actionTypes2.default.SET_FILTER_PLOT,
    idx: idx,
    newProp: newProp
  };
}

function loadFiles(files) {
  return {
    type: _actionTypes2.default.LOAD_FILES,
    files: files
  };
}

function loadFilesErr(error) {
  return {
    type: _actionTypes2.default.LOAD_FILES_ERR,
    error: error
  };
}

function updateVisDataAndConfiguration(_ref) {
  var datasets = _ref.datasets,
      options = _ref.options,
      appConfig = _ref.appConfig;

  return {
    type: _actionTypes2.default.UPDATE_VIS_DATA_CONFIG,
    datasets: datasets,
    options: options,
    appConfig: appConfig
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3Zpcy1zdGF0ZS1hY3Rpb25zLmpzIl0sIm5hbWVzIjpbImxheWVyQ29uZmlnQ2hhbmdlIiwibGF5ZXJUeXBlQ2hhbmdlIiwibGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnQ2hhbmdlIiwibGF5ZXJWaXNDb25maWdDaGFuZ2UiLCJ1cGRhdGVMYXllckJsZW5kaW5nIiwiaW50ZXJhY3Rpb25Db25maWdDaGFuZ2UiLCJzZXRGaWx0ZXIiLCJhZGRGaWx0ZXIiLCJhZGRMYXllciIsInJlb3JkZXJMYXllciIsInJlbW92ZUZpbHRlciIsInJlbW92ZUxheWVyIiwicmVtb3ZlRGF0YXNldCIsInNob3dEYXRhc2V0VGFibGUiLCJ1cGRhdGVWaXNEYXRhIiwidG9nZ2xlQW5pbWF0aW9uIiwidXBkYXRlQW5pbWF0aW9uU3BlZWQiLCJlbmxhcmdlRmlsdGVyIiwib25MYXllckhvdmVyIiwib25MYXllckNsaWNrIiwib25NYXBDbGljayIsInRvZ2dsZUxheWVyRm9yTWFwIiwic2V0VmlzaWJsZUxheWVyc0Zvck1hcCIsInNldEZpbHRlclBsb3QiLCJsb2FkRmlsZXMiLCJsb2FkRmlsZXNFcnIiLCJ1cGRhdGVWaXNEYXRhQW5kQ29uZmlndXJhdGlvbiIsIm9sZExheWVyIiwibmV3Q29uZmlnIiwidHlwZSIsIkxBWUVSX0NPTkZJR19DSEFOR0UiLCJuZXdUeXBlIiwiTEFZRVJfVFlQRV9DSEFOR0UiLCJjaGFubmVsIiwiTEFZRVJfVklTVUFMX0NIQU5ORUxfQ0hBTkdFIiwibmV3VmlzQ29uZmlnIiwiTEFZRVJfVklTX0NPTkZJR19DSEFOR0UiLCJtb2RlIiwiVVBEQVRFX0xBWUVSX0JMRU5ESU5HIiwiY29uZmlnIiwiSU5URVJBQ1RJT05fQ09ORklHX0NIQU5HRSIsImlkeCIsInByb3AiLCJ2YWx1ZSIsIlNFVF9GSUxURVIiLCJkYXRhSWQiLCJBRERfRklMVEVSIiwiQUREX0xBWUVSIiwib3JkZXIiLCJSRU9SREVSX0xBWUVSIiwiUkVNT1ZFX0ZJTFRFUiIsIlJFTU9WRV9MQVlFUiIsImtleSIsIlJFTU9WRV9EQVRBU0VUIiwiU0hPV19EQVRBU0VUX1RBQkxFIiwiZGF0YXNldHMiLCJvcHRpb25zIiwiVVBEQVRFX1ZJU19EQVRBIiwiVE9HR0xFX0ZJTFRFUl9BTklNQVRJT04iLCJzcGVlZCIsIlVQREFURV9GSUxURVJfQU5JTUFUSU9OX1NQRUVEIiwiRU5MQVJHRV9GSUxURVIiLCJpbmZvIiwiTEFZRVJfSE9WRVIiLCJMQVlFUl9DTElDSyIsIk1BUF9DTElDSyIsIm1hcEluZGV4IiwibGF5ZXJJZCIsIlRPR0dMRV9MQVlFUl9GT1JfTUFQIiwibGF5ZXJJZHMiLCJTRVRfVklTSUJMRV9MQVlFUlNfRk9SX01BUCIsIm5ld1Byb3AiLCJTRVRfRklMVEVSX1BMT1QiLCJmaWxlcyIsIkxPQURfRklMRVMiLCJlcnJvciIsIkxPQURfRklMRVNfRVJSIiwiYXBwQ29uZmlnIiwiVVBEQVRFX1ZJU19EQVRBX0NPTkZJRyJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFHZ0JBLGlCLEdBQUFBLGlCO1FBUUFDLGUsR0FBQUEsZTtRQVFBQyw4QixHQUFBQSw4QjtRQVNBQyxvQixHQUFBQSxvQjtRQVFBQyxtQixHQUFBQSxtQjtRQU9BQyx1QixHQUFBQSx1QjtRQU9BQyxTLEdBQUFBLFM7UUFTQUMsUyxHQUFBQSxTO1FBT0FDLFEsR0FBQUEsUTtRQU1BQyxZLEdBQUFBLFk7UUFPQUMsWSxHQUFBQSxZO1FBT0FDLFcsR0FBQUEsVztRQU9BQyxhLEdBQUFBLGE7UUFPQUMsZ0IsR0FBQUEsZ0I7UUFlQUMsYSxHQUFBQSxhO1FBU0FDLGUsR0FBQUEsZTtRQU9BQyxvQixHQUFBQSxvQjtRQVFBQyxhLEdBQUFBLGE7UUFPQUMsWSxHQUFBQSxZO1FBT0FDLFksR0FBQUEsWTtRQU9BQyxVLEdBQUFBLFU7UUFZQUMsaUIsR0FBQUEsaUI7UUFjQUMsc0IsR0FBQUEsc0I7UUFRQUMsYSxHQUFBQSxhO1FBUUFDLFMsR0FBQUEsUztRQU9BQyxZLEdBQUFBLFk7UUFPQUMsNkIsR0FBQUEsNkI7O0FBdk5oQjs7Ozs7O0FBRU8sU0FBUzFCLGlCQUFULENBQTJCMkIsUUFBM0IsRUFBcUNDLFNBQXJDLEVBQWdEO0FBQ3JELFNBQU87QUFDTEMsVUFBTSxzQkFBWUMsbUJBRGI7QUFFTEgsc0JBRks7QUFHTEM7QUFISyxHQUFQO0FBS0QsQyxDQVREO0FBV08sU0FBUzNCLGVBQVQsQ0FBeUIwQixRQUF6QixFQUFtQ0ksT0FBbkMsRUFBNEM7QUFDakQsU0FBTztBQUNMRixVQUFNLHNCQUFZRyxpQkFEYjtBQUVMTCxzQkFGSztBQUdMSTtBQUhLLEdBQVA7QUFLRDs7QUFFTSxTQUFTN0IsOEJBQVQsQ0FBd0N5QixRQUF4QyxFQUFrREMsU0FBbEQsRUFBNkRLLE9BQTdELEVBQXNFO0FBQzNFLFNBQU87QUFDTEosVUFBTSxzQkFBWUssMkJBRGI7QUFFTFAsc0JBRks7QUFHTEMsd0JBSEs7QUFJTEs7QUFKSyxHQUFQO0FBTUQ7O0FBRU0sU0FBUzlCLG9CQUFULENBQThCd0IsUUFBOUIsRUFBd0NRLFlBQXhDLEVBQXNEO0FBQzNELFNBQU87QUFDTE4sVUFBTSxzQkFBWU8sdUJBRGI7QUFFTFQsc0JBRks7QUFHTFE7QUFISyxHQUFQO0FBS0Q7O0FBRU0sU0FBUy9CLG1CQUFULENBQTZCaUMsSUFBN0IsRUFBbUM7QUFDeEMsU0FBTztBQUNMUixVQUFNLHNCQUFZUyxxQkFEYjtBQUVMRDtBQUZLLEdBQVA7QUFJRDs7QUFFTSxTQUFTaEMsdUJBQVQsQ0FBaUNrQyxNQUFqQyxFQUF5QztBQUM5QyxTQUFPO0FBQ0xWLFVBQU0sc0JBQVlXLHlCQURiO0FBRUxEO0FBRkssR0FBUDtBQUlEOztBQUVNLFNBQVNqQyxTQUFULENBQW1CbUMsR0FBbkIsRUFBd0JDLElBQXhCLEVBQThCQyxLQUE5QixFQUFxQztBQUMxQyxTQUFPO0FBQ0xkLFVBQU0sc0JBQVllLFVBRGI7QUFFTEgsWUFGSztBQUdMQyxjQUhLO0FBSUxDO0FBSkssR0FBUDtBQU1EOztBQUVNLFNBQVNwQyxTQUFULENBQW1Cc0MsTUFBbkIsRUFBMkI7QUFDaEMsU0FBTztBQUNMaEIsVUFBTSxzQkFBWWlCLFVBRGI7QUFFTEQ7QUFGSyxHQUFQO0FBSUQ7O0FBRU0sU0FBU3JDLFFBQVQsR0FBb0I7QUFDekIsU0FBTztBQUNMcUIsVUFBTSxzQkFBWWtCO0FBRGIsR0FBUDtBQUdEOztBQUVNLFNBQVN0QyxZQUFULENBQXNCdUMsS0FBdEIsRUFBNkI7QUFDbEMsU0FBTztBQUNMbkIsVUFBTSxzQkFBWW9CLGFBRGI7QUFFTEQ7QUFGSyxHQUFQO0FBSUQ7O0FBRU0sU0FBU3RDLFlBQVQsQ0FBc0IrQixHQUF0QixFQUEyQjtBQUNoQyxTQUFPO0FBQ0xaLFVBQU0sc0JBQVlxQixhQURiO0FBRUxUO0FBRkssR0FBUDtBQUlEOztBQUVNLFNBQVM5QixXQUFULENBQXFCOEIsR0FBckIsRUFBMEI7QUFDL0IsU0FBTztBQUNMWixVQUFNLHNCQUFZc0IsWUFEYjtBQUVMVjtBQUZLLEdBQVA7QUFJRDs7QUFFTSxTQUFTN0IsYUFBVCxDQUF1QndDLEdBQXZCLEVBQTRCO0FBQ2pDLFNBQU87QUFDTHZCLFVBQU0sc0JBQVl3QixjQURiO0FBRUxEO0FBRkssR0FBUDtBQUlEOztBQUVNLFNBQVN2QyxnQkFBVCxDQUEwQmdDLE1BQTFCLEVBQWtDO0FBQ3ZDLFNBQU87QUFDTGhCLFVBQU0sc0JBQVl5QixrQkFEYjtBQUVMVDtBQUZLLEdBQVA7QUFJRDs7QUFFRDs7Ozs7Ozs7QUFRTyxTQUFTL0IsYUFBVCxDQUF1QnlDLFFBQXZCLEVBQWlDQyxPQUFqQyxFQUEwQ2pCLE1BQTFDLEVBQWtEO0FBQ3ZELFNBQU87QUFDTFYsVUFBTSxzQkFBWTRCLGVBRGI7QUFFTEYsc0JBRks7QUFHTEMsb0JBSEs7QUFJTGpCO0FBSkssR0FBUDtBQU1EOztBQUVNLFNBQVN4QixlQUFULENBQXlCMEIsR0FBekIsRUFBOEI7QUFDbkMsU0FBTztBQUNMWixVQUFNLHNCQUFZNkIsdUJBRGI7QUFFTGpCO0FBRkssR0FBUDtBQUlEOztBQUVNLFNBQVN6QixvQkFBVCxDQUE4QnlCLEdBQTlCLEVBQW1Da0IsS0FBbkMsRUFBMEM7QUFDL0MsU0FBTztBQUNMOUIsVUFBTSxzQkFBWStCLDZCQURiO0FBRUxuQixZQUZLO0FBR0xrQjtBQUhLLEdBQVA7QUFLRDs7QUFFTSxTQUFTMUMsYUFBVCxDQUF1QndCLEdBQXZCLEVBQTRCO0FBQ2pDLFNBQU87QUFDTFosVUFBTSxzQkFBWWdDLGNBRGI7QUFFTHBCO0FBRkssR0FBUDtBQUlEOztBQUVNLFNBQVN2QixZQUFULENBQXNCNEMsSUFBdEIsRUFBNEI7QUFDakMsU0FBTztBQUNMakMsVUFBTSxzQkFBWWtDLFdBRGI7QUFFTEQ7QUFGSyxHQUFQO0FBSUQ7O0FBRU0sU0FBUzNDLFlBQVQsQ0FBc0IyQyxJQUF0QixFQUE0QjtBQUNqQyxTQUFPO0FBQ0xqQyxVQUFNLHNCQUFZbUMsV0FEYjtBQUVMRjtBQUZLLEdBQVA7QUFJRDs7QUFFTSxTQUFTMUMsVUFBVCxHQUFzQjtBQUMzQixTQUFPO0FBQ0xTLFVBQU0sc0JBQVlvQztBQURiLEdBQVA7QUFHRDs7QUFFRDs7Ozs7O0FBTU8sU0FBUzVDLGlCQUFULENBQTJCNkMsUUFBM0IsRUFBcUNDLE9BQXJDLEVBQThDO0FBQ25ELFNBQU87QUFDTHRDLFVBQU0sc0JBQVl1QyxvQkFEYjtBQUVMRixzQkFGSztBQUdMQztBQUhLLEdBQVA7QUFLRDs7QUFFRDs7Ozs7O0FBTU8sU0FBUzdDLHNCQUFULENBQWdDNEMsUUFBaEMsRUFBMENHLFFBQTFDLEVBQW9EO0FBQ3pELFNBQU87QUFDTHhDLFVBQU0sc0JBQVl5QywwQkFEYjtBQUVMSixzQkFGSztBQUdMRztBQUhLLEdBQVA7QUFLRDs7QUFFTSxTQUFTOUMsYUFBVCxDQUF1QmtCLEdBQXZCLEVBQTRCOEIsT0FBNUIsRUFBcUM7QUFDMUMsU0FBTztBQUNMMUMsVUFBTSxzQkFBWTJDLGVBRGI7QUFFTC9CLFlBRks7QUFHTDhCO0FBSEssR0FBUDtBQUtEOztBQUVNLFNBQVMvQyxTQUFULENBQW1CaUQsS0FBbkIsRUFBMEI7QUFDL0IsU0FBTztBQUNMNUMsVUFBTSxzQkFBWTZDLFVBRGI7QUFFTEQ7QUFGSyxHQUFQO0FBSUQ7O0FBRU0sU0FBU2hELFlBQVQsQ0FBc0JrRCxLQUF0QixFQUE2QjtBQUNsQyxTQUFPO0FBQ0w5QyxVQUFNLHNCQUFZK0MsY0FEYjtBQUVMRDtBQUZLLEdBQVA7QUFJRDs7QUFFTSxTQUFTakQsNkJBQVQsT0FBdUU7QUFBQSxNQUEvQjZCLFFBQStCLFFBQS9CQSxRQUErQjtBQUFBLE1BQXJCQyxPQUFxQixRQUFyQkEsT0FBcUI7QUFBQSxNQUFacUIsU0FBWSxRQUFaQSxTQUFZOztBQUM1RSxTQUFPO0FBQ0xoRCxVQUFNLHNCQUFZaUQsc0JBRGI7QUFFTHZCLHNCQUZLO0FBR0xDLG9CQUhLO0FBSUxxQjtBQUpLLEdBQVA7QUFNRCIsImZpbGUiOiJ2aXMtc3RhdGUtYWN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHZpcy1zdGF0ZS1yZWR1Y2VyXG5pbXBvcnQgQWN0aW9uVHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXllckNvbmZpZ0NoYW5nZShvbGRMYXllciwgbmV3Q29uZmlnKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTEFZRVJfQ09ORklHX0NIQU5HRSxcbiAgICBvbGRMYXllcixcbiAgICBuZXdDb25maWdcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxheWVyVHlwZUNoYW5nZShvbGRMYXllciwgbmV3VHlwZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLkxBWUVSX1RZUEVfQ0hBTkdFLFxuICAgIG9sZExheWVyLFxuICAgIG5ld1R5cGVcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZShvbGRMYXllciwgbmV3Q29uZmlnLCBjaGFubmVsKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTEFZRVJfVklTVUFMX0NIQU5ORUxfQ0hBTkdFLFxuICAgIG9sZExheWVyLFxuICAgIG5ld0NvbmZpZyxcbiAgICBjaGFubmVsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXllclZpc0NvbmZpZ0NoYW5nZShvbGRMYXllciwgbmV3VmlzQ29uZmlnKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTEFZRVJfVklTX0NPTkZJR19DSEFOR0UsXG4gICAgb2xkTGF5ZXIsXG4gICAgbmV3VmlzQ29uZmlnXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMYXllckJsZW5kaW5nKG1vZGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5VUERBVEVfTEFZRVJfQkxFTkRJTkcsXG4gICAgbW9kZVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJhY3Rpb25Db25maWdDaGFuZ2UoY29uZmlnKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuSU5URVJBQ1RJT05fQ09ORklHX0NIQU5HRSxcbiAgICBjb25maWdcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEZpbHRlcihpZHgsIHByb3AsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuU0VUX0ZJTFRFUixcbiAgICBpZHgsXG4gICAgcHJvcCxcbiAgICB2YWx1ZVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRmlsdGVyKGRhdGFJZCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLkFERF9GSUxURVIsXG4gICAgZGF0YUlkXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMYXllcigpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5BRERfTEFZRVJcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlb3JkZXJMYXllcihvcmRlcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlJFT1JERVJfTEFZRVIsXG4gICAgb3JkZXJcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZpbHRlcihpZHgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5SRU1PVkVfRklMVEVSLFxuICAgIGlkeFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTGF5ZXIoaWR4KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuUkVNT1ZFX0xBWUVSLFxuICAgIGlkeFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRGF0YXNldChrZXkpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5SRU1PVkVfREFUQVNFVCxcbiAgICBrZXlcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dEYXRhc2V0VGFibGUoZGF0YUlkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuU0hPV19EQVRBU0VUX1RBQkxFLFxuICAgIGRhdGFJZFxuICB9O1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0gZGF0YXNldHMgLSBBcnJheSBvZiBkYXRhc2V0cyA6XG4gKiB7aW5mbzoge2lkOiAnJywgY29sb3I6IGhleCwgbGFiZWw6ICcnXX0sIGRhdGE6IHtmaWVsZHM6IFtdLCByb3dzOiBbXX19XG4gKiBAcGFyYW0gb3B0aW9uc1xuICogQHBhcmFtIGNvbmZpZ1xuICogQHJldHVybnMge3t0eXBlOiBudWxsLCBkYXRhc2V0czogKiwgb3B0aW9uczogKn19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVWaXNEYXRhKGRhdGFzZXRzLCBvcHRpb25zLCBjb25maWcpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5VUERBVEVfVklTX0RBVEEsXG4gICAgZGF0YXNldHMsXG4gICAgb3B0aW9ucyxcbiAgICBjb25maWdcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUFuaW1hdGlvbihpZHgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5UT0dHTEVfRklMVEVSX0FOSU1BVElPTixcbiAgICBpZHhcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUFuaW1hdGlvblNwZWVkKGlkeCwgc3BlZWQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5VUERBVEVfRklMVEVSX0FOSU1BVElPTl9TUEVFRCxcbiAgICBpZHgsXG4gICAgc3BlZWRcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVubGFyZ2VGaWx0ZXIoaWR4KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuRU5MQVJHRV9GSUxURVIsXG4gICAgaWR4XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkxheWVySG92ZXIoaW5mbykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLkxBWUVSX0hPVkVSLFxuICAgIGluZm9cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTGF5ZXJDbGljayhpbmZvKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTEFZRVJfQ0xJQ0ssXG4gICAgaW5mb1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25NYXBDbGljaygpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5NQVBfQ0xJQ0tcbiAgfTtcbn1cblxuLyoqXG4gKiBUb2dnbGUgYSBzaW5nbGUgbGF5ZXIgZm9yIGEgZ2l2ZSBtYXBcbiAqIEBwYXJhbSBtYXBJbmRleFxuICogQHBhcmFtIGxheWVySWRcbiAqIEByZXR1cm5zIHt7dHlwZTogKiwgbWFwSW5kZXg6ICosIGxheWVySWQ6ICp9fVxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlTGF5ZXJGb3JNYXAobWFwSW5kZXgsIGxheWVySWQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5UT0dHTEVfTEFZRVJfRk9SX01BUCxcbiAgICBtYXBJbmRleCxcbiAgICBsYXllcklkXG4gIH07XG59XG5cbi8qKlxuICogVG9nZ2xlIGxheWVyIHZpc2liaWxpdHkgb24gc3BsaXQgdmlld3NcbiAqIEBwYXJhbSBsYXllckluZGV4IHRoZSBsYXllciB3ZSB3YW50IHRvIHRvZ2dsZSB2aXNpYmlsaXR5IG9uXG4gKiBAcGFyYW0gbWFwSW5kZXggdGhlIG1hcCBpbmRleFxuICogQHJldHVybnMge3t0eXBlOiBudWxsLCBsYXllckluZGV4OiAqLCBtYXBJbmRleDogKn19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRWaXNpYmxlTGF5ZXJzRm9yTWFwKG1hcEluZGV4LCBsYXllcklkcykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlNFVF9WSVNJQkxFX0xBWUVSU19GT1JfTUFQLFxuICAgIG1hcEluZGV4LFxuICAgIGxheWVySWRzXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRGaWx0ZXJQbG90KGlkeCwgbmV3UHJvcCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlNFVF9GSUxURVJfUExPVCxcbiAgICBpZHgsXG4gICAgbmV3UHJvcFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEZpbGVzKGZpbGVzKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTE9BRF9GSUxFUyxcbiAgICBmaWxlc1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEZpbGVzRXJyKGVycm9yKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTE9BRF9GSUxFU19FUlIsXG4gICAgZXJyb3JcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVZpc0RhdGFBbmRDb25maWd1cmF0aW9uKHtkYXRhc2V0cywgb3B0aW9ucywgYXBwQ29uZmlnfSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlVQREFURV9WSVNfREFUQV9DT05GSUcsXG4gICAgZGF0YXNldHMsXG4gICAgb3B0aW9ucyxcbiAgICBhcHBDb25maWdcbiAgfTtcbn1cbiJdfQ==