// restructuring array of objects into an object of key/values with reduce

const keys = ['1', '2', '3', '4'];
const dataArray = keys.map((key, index) => ({ key, someData: `blah blah ${index}` }));

/*
  [ 
    { key: '1', someData: 'blah blah 0' },
    { key: '2', someData: 'blah blah 1' },
    { key: '3', someData: 'blah blah 2' },
    { key: '4', someData: 'blah blah 3' } 
  ]
*/

const dataObject = dataArray.reduce((obj, item) => ({ ...obj, ...{ [item.key]: item } }), {});

/*
  { 
    '1': { key: '1', someData: 'blah blah 0' },
    '2': { key: '2', someData: 'blah blah 1' },
    '3': { key: '3', someData: 'blah blah 2' },
    '4': { key: '4', someData: 'blah blah 3' } 
  }
*/