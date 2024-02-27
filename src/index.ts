export {};

// EXAMPLE 1 - Check if a String is in Union type in TypeScript

type Sizes = 'small' | 'medium' | 'large';

function isOfType(value: string): value is Sizes {
  return ['small', 'medium', 'large'].includes(value);
}

console.log(isOfType('small')); // 👉️ true
console.log(isOfType('medium')); // 👉️ true
console.log(isOfType('test')); // 👉️ false

// ---------------------------------------------------

// // EXAMPLE 2 - Using the function in an `if` statement

// type Sizes = 'small' | 'medium' | 'large';

// function isOfType(value: string): value is Sizes {
//   return ['small', 'medium', 'large'].includes(value);
// }

// const sm = 'small';

// if (isOfType(sm)) {
//   // 👇️ const sm: "small"
//   console.log(sm);
// } else {
//   // 👇️ const sm: never
//   console.log(sm);
// }
