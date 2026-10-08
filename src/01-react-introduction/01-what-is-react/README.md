# What is React?

## Overview

React is a JavaScript library for building user interfaces, especially interactive and component-based web applications.

React was originally created by Facebook and is now maintained by Meta and the open-source community.

## Why Use React?

React helps developers build modern web applications by breaking the user interface into small, reusable components.

Instead of managing a large UI as one piece, React allows us to divide it into independent components.

For example:

```text
Application
│
├── Navbar
├── Sidebar
├── ProductList
├── ProductCard
└── Footer
```

## Key Benefits

- Component-based architecture
- Reusable UI components
- Declarative UI development
- Efficient UI updates
- Large ecosystem
- Strong community support
- Suitable for small and large applications

## Real-World Example

In an e-commerce application, the same `ProductCard` component can be reused for hundreds of products.

```text
ProductCard
    ↓
Product 1
Product 2
Product 3
Product 4
```

The component structure remains the same while the product data changes.

## Example

```jsx
function Welcome() {
  return <h1>Welcome to React</h1>;
}

export default Welcome;
```

## Key Takeaway

React helps developers build complex user interfaces by combining small, reusable components into complete applications.

## Practice

1. What is React?
2. Why is React used?
3. What is component-based development?
4. Give three benefits of React.
5. Give one real-world example where React can be used.