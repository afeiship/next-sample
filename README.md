# next-sample
> Get an element from array like target.

## installation
```bash
npm install -S @feizheng/next-sample
```

## usage
```js
import '@feizheng/next-sample';

const arr = [1,2,3,4,5,6,7];

nx.sample(arr); // 2
nx.sample(arr); // 5

nx.sample(arr, 2); // [1,2]
nx.sample(arr, 2); // [3, 6]
nx.sample(arr, 2); // [5, 6]
```
