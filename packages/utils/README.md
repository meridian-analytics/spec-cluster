# utils

```ts
function invariant(condition: unknown, message?: string): asserts condition

function invariantEnum<T extends Record<string, string | number>>(
  value: unknown,
  enum_: T,
  label?: string,
): asserts value is T[keyof T] 
```
