//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const array = [1, 2, 3, 4]; // 10
const array2 = [{x: 1}, {x: 2}, {x: 3}]; // 6
const array3 = [[1, 2], [3, 4], [5, 6]]; // [1, 2, 3, 4, 5, 6]
const array4 = ['Apple', 'Apple', 'Apple', 'Banana', 'Banana', 'Kiwi']; // {Apple: 3, Banana: 2, Kiwi: 1}
const array5 = [
  {name: 'Apple', cost: 1000},
  {name: 'Banana', cost: 1500},
  {name: 'Kiwi', cost: 1000},
  {name: 'Strawberry', cost: 1500},
  {name: 'Melon', cost: 2000}
]; // {1000: [{cost 1000짜리 객체2개}], 1500: [{cost 1500짜리 객체 2개}], 2000: [cost 2000짜리 객체 1개]}

const array6 = [
  {
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
  }, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
  }, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
  }
]; // ['Bible', 'War and peace', 'Romeo and Jeliet', ..., 'The Shining']

const array7 = [1, 1, 2, 1, 1, 2, 3, 4, 1, 1, 2, 3, 4]; // [1, 2, 3, 4]
