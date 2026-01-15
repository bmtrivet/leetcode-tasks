export function deepCopy<T>(input: T): T {
  if (
    input === null ||
    typeof input !== "object" ||
    input instanceof Function
  ) {
    return input;
  }

  if (input instanceof Date) {
    return new Date(input.getTime()) as any;
  }

  if (Array.isArray(input)) {
    return input.map((item) => deepCopy(item)) as any;
  }

  if (input instanceof Map) {
    const result = new Map();
    for (const [key, value] of input.entries()) {
      result.set(deepCopy(key), deepCopy(value));
    }
    return result as any;
  }

  if (input instanceof Set) {
    const result = new Set();
    for (const value of input.values()) {
      result.add(deepCopy(value));
    }
    return result as any;
  }

  const result: Record<string | symbol, any> = {};
  for (const key of Reflect.ownKeys(input)) {
    result[key] = deepCopy((input as any)[key]);
  }
  return result as T;
}
