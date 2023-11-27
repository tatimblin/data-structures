export function deepEquals(a: unknown, b: unknown): boolean {

  if (Array.isArray(a) && Array.isArray(b) && a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      return deepEquals(a[i], b[i]);
    }
  }
  
  if (a && b && typeof a === "object" && typeof b === "object") {
    const keys = Object.keys(a);

    if (keys.length !== Object.keys(b || {}).length) {
      return false;
    }

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      return deepEquals(a[key as keyof typeof a], b[key as keyof typeof b]);
    }
  }

  return a === b;
}
