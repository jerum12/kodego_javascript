function linearSearch(array, target) {
  for (var i = 0; array.length > i; i++) {
    if (array[i] === target) {
      return i;
    }
  }

  return -1;
}

const arr = [1, 5, 52, 64, 122, 199, 212, 32932];

const target = 500;
const result = linearSearch(arr, target);

const a = "hello World!";

a.m


if (result === -1) {
  console.log('Target not found');
} else console.log('Target found at index:' + result);

console.log(arr.indexOf(target));

var arrayObj = {
  data: 123,
  left: {
    data: 456,
    left: {
      data: 756,
      left: null,
    },
    right: {
      data: 121,
      left: null,
      right: null,
    },
  },
};
