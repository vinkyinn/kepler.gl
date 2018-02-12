import test from 'tape';
import SchemaManager from 'schemas';
import {InitialState} from 'test/helpers/mock-state';

test('#mapStateSchema -> v1 -> save load mapState', t => {
  const initialState = InitialState.toJS();
  const savedState = SchemaManager.getConfigToSave(initialState);

  // save state
  const msToSave = savedState.config.mapState;
  const msLoaded = SchemaManager.parseSavedConfig(savedState).mapState;

  t.deepEqual(Object.keys(msToSave),
    ['bearing', 'dragRotate', 'latitude', 'longitude', 'pitch', 'zoom', 'isSplit'],
    'mapState should have all 6 entries');

  const expected = {
    pitch: 0,
    bearing: 0,
    latitude: 37.75043,
    longitude: -122.34679,
    zoom: 9,
    dragRotate: false,
    isSplit: false
  };

  t.deepEqual(msToSave, expected, 'save mapState should be current');
  t.deepEqual(msLoaded, expected, 'load mapState should be current');

  t.end();
});
