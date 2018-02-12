import test from 'tape';
import {findFieldsToShow} from 'utils/interaction-utils';
import {DEFAULT_TOOLTIP_FIELDS} from 'constants/default-settings';

const fields = [
  {
    name: 'lat'
  },
  {
    name: '_lat'
  },
  {
    name: 'se.longitude'
  },
  {
    name: 'p longitude'
  },
  {
    name: 'hex_id'
  },
  {
    name: 'all_points',
    type: 'geojson'
  },
  {
    name: 'a'
  },
  {
    name: 'b'
  },
  {
    name: 'c'
  },
  {
    name: 'd'
  },
  {
    name: 'e'
  },
  {
    name: 'f'
  }
];

test('interactionUtil -> findFieldsToShow', t => {
  const dataId = 'random_stuff';

  const someFields = [
    ...DEFAULT_TOOLTIP_FIELDS.slice(0, 2).map(d => ({name: d})),
    ...[
      {
        name: 'random'
      },
      {
        name: 'something_else'
      }
    ]
  ];

  const expectedFields = ['random', 'something_else'];

  t.deepEqual(
    findFieldsToShow({fields: someFields, id: dataId}),
    {random_stuff: expectedFields},
    'should find 2 default trip layers'
  );

  t.end();
});

test('interactionUtil -> autoFindTooltipFields', t => {
  const expectedFields = {test: ['hex_id', 'a', 'b', 'c', 'd']};

  t.deepEqual(
    findFieldsToShow({fields, id: 'test'}),
    expectedFields,
    'should filter out all default geometry fields and return first 5'
  );

  t.end();
});
