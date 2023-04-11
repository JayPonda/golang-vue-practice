function mul(a, b, callback) {
  setTimeout(() => {
    callback(a * b);
  }, 500);
}

function makeCal(...args) {
  let b = [];
  let ind = 0;
  while (ind < args.length) {
    if (ind % 2 == 0) {
      b.push(args[ind]);
    } else {
      b[Math.floor(ind / 2)] *= args[ind];
    }
    ind++;
  }

  console.log(b);

  let sum = 0;

  b.forEach((elm) => {
    sum += elm;
  });

  console.log(sum);
}

makeCal(1, 2, 3, 4, 5);
