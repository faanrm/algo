function getTotalX(a: number[], b: number[]): number {
  var maxA = a[0];
  var minB = b[0];

  for (var i = 1; i < a.length; i++) {
    if (a[i] > maxA) {
      maxA = a[i];
    }
  }

  for (var i = 1; i < b.length; i++) {
    if (b[i] < minB) {
      minB = b[i];
    }
  }

  var count = 0;

  for (var i = maxA; i <= minB; i += maxA) {
    var isFactorOfA = true;
    var isFactorOfB = true;

    for (var j = 0; j < a.length; j++) {
      if (i % a[j] !== 0) {
        isFactorOfA = false;
        break;
      }
    }

    for (var j = 0; j < b.length; j++) {
      if (b[j] % i !== 0) {
        isFactorOfB = false;
        break;
      }
    }

    if (isFactorOfA && isFactorOfB) {
      count++;
    }
  }

  return count;
}
