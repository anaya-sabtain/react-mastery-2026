# JSX

## What is JSX?

JSX stands for JavaScript XML.

JSX is a syntax extension that allows us to write UI-like markup directly inside JavaScript.

Example:

```jsx
const element = <h1>Hello React</h1>;
```

JSX makes React components easier to read and write.

## JSX and JavaScript

JavaScript expressions can be written inside curly braces.

```jsx
const name = "Anaya";

function App() {
  return <h1>Hello {name}</h1>;
}
```

Output:

```text
Hello Anaya
```

## JSX Attributes

```jsx
function App() {
  return (
    <img
      src="/profile.png"
      alt="Profile"
    />
  );
}
```

## className

In JSX, use `className` instead of HTML's `class` attribute.

```jsx
<div className="container">
  <h1>Hello</h1>
</div>
```

## JavaScript Expressions

```jsx
const price = 100;

function Product() {
  return <p>Price: ${price}</p>;
}
```

## Conditional Rendering

```jsx
const isLoggedIn = true;

function App() {
  return (
    <h1>
      {isLoggedIn ? "Dashboard" : "Login"}
    </h1>
  );
}
```

## JSX Rules

A component must return one React element tree.

Use fragments when you do not need an additional wrapper.

Tags must be properly closed.

```jsx
<img src="image.jpg" alt="Product" />
```

## Real-World Example

A product component can combine JavaScript data with JSX:

```jsx
function ProductCard() {
  const productName = "Smart Watch";
  const price = 150;

  return (
    <div>
      <h2>{productName}</h2>
      <p>${price}</p>
    </div>
  );
}
```

## Practice

Create a `ProfileCard` component that displays:

- Name
- Job title
- Location
- Profile image

Use JavaScript variables inside JSX.

## Key Takeaway

JSX allows React developers to describe UI using a syntax that combines JavaScript expressions with markup-like structures.