// restructuring object of objects into an array of objects with Object.entires + map

const keys = ['1', '2', '3', '4'];
const dataObject = keys.reduce((obj, key, index) => ({ ...obj, ...{ [key]: { key, someData: `blah blah ${index}` } } }), {});

/*
  { 
    '1': { key: '1', someData: 'blah blah 0' },
    '2': { key: '2', someData: 'blah blah 1' },
    '3': { key: '3', someData: 'blah blah 2' },
    '4': { key: '4', someData: 'blah blah 3' } 
  }
*/

const dataArray = Object.entries(dataObject).map(([key, item]) => item);

/*
  [ 
    { key: '1', someData: 'blah blah 0' },
    { key: '2', someData: 'blah blah 1' },
    { key: '3', someData: 'blah blah 2' },
    { key: '4', someData: 'blah blah 3' } 
  ]
*/