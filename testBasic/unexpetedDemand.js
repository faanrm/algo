function filledOrders(order, k) {
  order.sort(function (a, b) {
    return a - b;
  });
  let ans = 0;
  for (let i = 0; i < order.length; i++) {
    if (order[i] <= k) {
      ans += 1;
      k -= order[i];
    } else {
      break;
    }
  }
  return ans;
}
