function breakingRecords(scores: number[]): number[] {
  // Write your code here
  var best: number = 0;
  var worst: number = 0;
  var bestScore = scores[0];
  var worstScore = scores[0];
  for (var i = 0; i < scores.length; i++) {
    if (scores[i] > bestScore) {
      bestScore = scores[i];
      best = best + 1;
    }
    if (scores[i] < worstScore) {
      worstScore = scores[i];
      worst = worst + 1;
    }
  }
  return [best, worst];
}
