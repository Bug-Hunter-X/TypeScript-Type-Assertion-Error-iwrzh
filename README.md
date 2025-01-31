# TypeScript Type Assertion Error

This repo demonstrates a common error in TypeScript: type mismatches when performing arithmetic operations.  The `add` function is defined to take two numbers, but the code attempts to pass a string. This will result in a compilation error because TypeScript enforces type safety.

The solution involves using type assertions or type guards to handle potential type mismatches.