# React Components

## Overview

A component is a reusable and independent part of a user interface.

React applications are built by combining multiple components.

## Example Structure

```text
App
│
├── Navbar
├── Hero
├── ProductList
│   └── ProductCard
└── Footer
```

## Function Components

Modern React applications primarily use function components.

```jsx
function Welcome() {
  return <h1>Welcome to React</h1>;
}

export default Welcome;
```

## Using a Component

```jsx
function App() {
  return (
    <>
      <Welcome />
    </>
  );
}
```

## Class Components

Class components were commonly used in older React applications.

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Welcome to React</h1>;
  }
}
```

Class components are still important to understand when working with legacy code, but new React development generally uses function components and Hooks.

## Component Naming

React components should normally use PascalCase.

```text
Correct:
UserProfile
ProductCard
LoginForm
Navbar

Incorrect:
userprofile
productcard
loginform
navbar
```

## Real-World Example

A service-booking application can contain:

```text
ServiceCard
ProviderCard
BookingCard
ReviewCard
PaymentCard
```

Each component has its own responsibility and can be reused.

## Best Practices

- Keep components focused on one responsibility.
- Use meaningful names.
- Reuse components when appropriate.
- Avoid unnecessarily large components.
- Keep business logic separate when the component becomes complex.
- Prefer function components for new React applications.

## Practice

Create:

1. `UserCard`
2. `ProductCard`
3. `ServiceCard`

Each component should display appropriate information.

## Key Takeaway

Components are the building blocks of React applications.