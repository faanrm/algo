function minTime(files, numCores, limit) {
  var x = [];
  var y = [];
  for (var i = 0; i < files.length; i++) {
    if (files[i] % numCores === 0) {
      x.push(files[i]);
    } else {
      y.push(files[i]);
    }
  }
  x.sort((a, b) => b - a);
  var sumXLimit = x.slice(0, limit).reduce((a, b) => a + b, 0);
  var sumXRest = x.slice(limit).reduce((a, b) => a + b, 0);
  var sumY = y.reduce((a, b) => a + b, 0);
  return Math.floor(sumXLimit / numCores) + sumXRest + sumY;
}
