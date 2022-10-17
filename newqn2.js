const N = 5;
const Q = 3;
const Numbers = [1, 1, 1, 1, 1];
const UVInputs = [[1, 3], [2, 4], [3, 4]];
const result = [];
for(let i = 0;i < Q;i++)
   result.push(Math.min(...Numbers.slice(UVInputs[i][0], UVInputs[i][1])));
console.log(result);
