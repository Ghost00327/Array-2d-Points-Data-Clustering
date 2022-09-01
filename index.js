var points = [{x: 1.2, y: 4.3}, {x: 1.5, y: 4}, {x: 1.8, y: 4.2}, {x: 1.1, y: 1.3}, {x: 1.3, y: 1.9}, {x: 1.8, y: 1.5}, {x: 4.2, y: 1.5}, {x: 4.5, y: 0.9}, {x: 4.9, y: 1.2} ];
var distance = 3;

var pointsData = [];
for(var i = 0; i<points.length; i++) {
  points[i].group = null;
  pointsData.push(points[i]);
}

function getDistance(point1, point2) {
  var a = point1.x - point2.x;
  var b = point1.y - point2.y;

  return Math.sqrt( a*a + b*b ); 
}

function getCenter(group) {
  var x = 0;
  var y = 0;
  for(var i = 0; i < group.length; i++) {
    x += group[i].x;
    y += group[i].y;
  }
  return {x: x / group.length, y: y / group.length};
}

function updatePoints(points) {
  pointsData = points;
}

function makeGroup(points, groupId) {
  var data = points.filter(point => point.group == null);

  if(data.length == 0) {
    updatePoints(points)
  } else {
    var startPoint = data[0];
    startPoint.group = groupId;
    var group = [startPoint];

    for(var j = 1 ;j < data.length;j++) {
      var center = getCenter(group);
      var difference = getDistance(center, data[j]);
      if(difference < distance) {
        data[j].group = groupId
        group.push(data[j]);
      }
    }

    groupId++;
    console.log(group)
    makeGroup(points, groupId);
  }
}

makeGroup(pointsData, 0);

// console.log(pointsData)