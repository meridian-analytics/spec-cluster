export function invariant(
  condition: unknown,
  message?: string,
): asserts condition {
  if (condition) return
  throw Error(`Invariant violation: ${message ?? "truthy value expected"}`)
}

export function invariantEnum<T extends Record<string, string | number>>(
  value: unknown,
  enum_: T,
  label?: string,
): asserts value is T[keyof T] {
  invariant(
    Object.values(enum_).includes(value as string | number),
    `"${value}" is not a member of ${label ?? "enum"}`,
  )
}
