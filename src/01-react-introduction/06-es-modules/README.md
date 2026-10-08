# ES Modules: Import and Export

## Overview

JavaScript modules allow us to organize code into separate files.

Instead of putting an entire application into one file, we can divide it into reusable modules.

## Named Export

```js
export function add(a, b) {
  return a + b;
}
```

Import:

```js
import { add } from "./math.js";
```

## Default Export

```js
function UserCard() {
  return <div>User</div>;
}

export default UserCard;
```

Import:

```js
import UserCard from "./UserCard";
```

## Multiple Named Exports

```js
export const name = "Anaya";
export const role = "React Developer";
```

Import:

```js
import { name, role } from "./user.js";
```

## Why Modules Matter

Modules help us:

- Organize code
- Reuse functionality
- Improve maintainability
- Separate responsibilities
- Avoid creating huge files

## React Example

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   └── ProductCard.jsx
│
├── pages/
│   ├── Home.jsx
│   └── About.jsx
│
└── App.jsx
```

`App.jsx` can import components from other files.

## Real-World Example

A SaaS application may have:

```text
components
services
utils
hooks
pages
```

Each module can have a specific responsibility.

## Practice

Create:

```text
math.js
app.js
```

Export an `add()` function from `math.js` and import it into `app.js`.

Then create a React `Button` component in a separate file and import it into `App.jsx`.

## Key Takeaway

ES Modules are fundamental to maintaining organized React applications.