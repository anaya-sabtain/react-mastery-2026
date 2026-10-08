# React Fragments

## What is a Fragment?

A Fragment allows a component to return multiple elements without adding an unnecessary DOM wrapper.

## Problem

This is not valid as a direct component return:

```jsx
return (
  <h1>Hello</h1>
  <p>Welcome</p>
);
```

## Solution

Use a Fragment:

```jsx
return (
  <>
    <h1>Hello</h1>
    <p>Welcome</p>
  </>
);
```

## Explicit Fragment Syntax

```jsx
import { Fragment } from "react";

return (
  <Fragment>
    <h1>Hello</h1>
    <p>Welcome</p>
  </Fragment>
);
```

## Why Use Fragments?

Fragments help avoid unnecessary wrapper elements.

Instead of:

```html
<div>
  <h1>Hello</h1>
  <p>Welcome</p>
</div>
```

you can render the elements without adding the extra `div`.

## Real-World Example

A dashboard component may need to return several sections:

```jsx
function Dashboard() {
  return (
    <>
      <header>Dashboard</header>
      <main>Statistics</main>
      <footer>Footer</footer>
    </>
  );
}
```

## Practice

Create a `Profile` component using a Fragment that contains:

```text
Name
Role
Email
Location
```

## Key Takeaway

Fragments are useful when multiple elements need to be returned without introducing an unnecessary DOM element.