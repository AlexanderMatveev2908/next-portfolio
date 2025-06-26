Simulates an iOS-style calculator with safe chained operations, division-by-zero prevention, and smart input validation to handle edge cases like repeated operators or extra decimal points.

This project was implemented as part of a guided full-stack learning path on [BeCoder](https://becoder.dev/en/app), a platform for improving software development skills through hands-on projects. All code, logic, and architecture were developed independently based on the provided specifications.

## 🚀 Features

- ➕ **Chained Operations**  
  Supports expressions like `5 + 3 × 2` with correct operator flow and safe evaluation.

- 🚫 **Division by Zero Prevention**  
  Invalid operations are gracefully rejected.

- 🧠 **Smart Input Validation**  
  Handles common edge cases:

  - Prevents repeated operators (`++`, `--`, `*/`, etc.)
  - Blocks multiple decimal points in a single number (`3.14.2` is rejected)

- 💅 **iOS-Inspired UI**  
  Minimalist design modeled after the native iOS calculator.
