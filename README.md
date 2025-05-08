## 6. How does TypeScript help in improving code quality and project maintainability?

- **Static type checking** - Detects type-related errors at compile time instead of runtime, reducing bugs.
- **Easier refactoring safety**: TypeScript helps us safely rename variables, extract methods, and refactor code without disrupting functionality.
- **Improved team collaboration**: Code becomes more predictable and Implements consistent interfaces and data structures across large teams or projects.
- **Better tooling & Integrations**: Powerful types make it easier to manage and grow a codebase, especially in enterprise-level applications. Large applications can be easily maintained using Typescript's autocompletion, refactoring, and navigation.
- **Self-documenting code**: Types serve as a form of documentation, making code easier to understand without external documentation.

## Provide an example of using union and intersection types in TypeScript.

Union and intersection types are used to compose multiple types into one. They provide more flexibility in typing, enabling you to combine or combine types.

**Union Type:**

```ts
function userId(id: string | number) {
  console.log("ID:", id);
}
```

**Intersection Type:**

```ts
type Person = { name: string };
type Employee = { id: number };

type Staff = Person & Employee;

const employee: Staff = {
  name: "Alia Hasmit",
  id: 24561,
};
```
