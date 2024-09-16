function countApplesAndOranges(
  s: number,
  t: number,
  a: number,
  b: number,
  apples: number[],
  oranges: number[]
): void {
  var applesDistance: number[] = [];
  var orangeDisctance: number[] = [];
  var appleN: number = 0;
  var orangeN: number = 0;
  for (var i = 0; i < apples.length; i++) {
    var sommeApples: number = apples[i] + a;
    applesDistance.push(sommeApples);
  }
  for (var j = 0; j < oranges.length; j++) {
    var sommeOrange: number = oranges[j] + b;
    orangeDisctance.push(sommeOrange);
  }

  for (var x = 0; x < applesDistance.length; x++) {
    if (applesDistance[x] < s || applesDistance[x] > t) {
      appleN = appleN;
    } else {
      appleN = appleN + 1;
    }
  }
  for (var y = 0; y < orangeDisctance.length; y++) {
    if (orangeDisctance[y] < s || orangeDisctance[y] > t) {
      orangeN = orangeN;
    } else {
      orangeN = orangeN + 1;
    }
  }
  console.log(appleN);
  console.log(orangeN);
}
