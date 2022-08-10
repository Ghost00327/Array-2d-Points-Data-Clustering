# Array-2d-Points-Data-Clustering

clustering algorithm by using the call-back function

## Description
User can set input data and clustering distance as a parameter of this altorithm

when user input this data : [{x: 1.2, y: 4.3}, {x: 1.5, y: 4}, {x: 1.8, y: 4.2}, {x: 1.1, y: 1.3}, {x: 1.3, y: 1.9}, {x: 1.8, y: 1.5}, {x: 4.2, y: 1.5}, {x: 4.5, y: 0.9}, {x: 4.9, y: 1.2} ]

output data : [
  { x: 1.2, y: 4.3, group: 0 },
  { x: 1.5, y: 4, group: 0 },
  { x: 1.8, y: 4.2, group: 0 },
  { x: 1.1, y: 1.3, group: 0 },
  { x: 1.3, y: 1.9, group: 0 },
  { x: 1.8, y: 1.5, group: 0 },
  { x: 4.2, y: 1.5, group: 1 },
  { x: 4.5, y: 0.9, group: 1 },
  { x: 4.9, y: 1.2, group: 1 }
]

User can run this file with `node index.js` command or `JavaScript compiler`
