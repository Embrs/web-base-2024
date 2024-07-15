// web worker
const countSum = (n: number) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};
self.onmessage = function (e) {
  console.log('In worke: received data: ' + e.data);
  const sum = countSum(e.data);
  const message = 'In worke: The sum of 1 to ' + e.data + ' is ' + sum;
  console.log(message);
  self.postMessage(sum);
};
