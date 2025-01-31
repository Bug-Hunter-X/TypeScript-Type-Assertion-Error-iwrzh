function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: any, b: any): number {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    console.error("Invalid input types");
    return 0; // Or throw an error
  }
}

let result1 = addSafe(5, 10); // Works correctly
let result2 = addSafe("hello", 5); // Outputs error message to console and returns 0
let result3 = addSafe(5, "world"); // Outputs error message to console and returns 0