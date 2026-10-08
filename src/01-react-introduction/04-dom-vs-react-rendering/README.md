# DOM and React Rendering

## What is the DOM?

DOM stands for Document Object Model.

The browser creates a DOM representation of an HTML document.

For example:

```html
<h1>Hello</h1>
<button>Buy Now</button>
```

The browser represents these elements as nodes in the DOM.

## Traditional DOM Manipulation

With vanilla JavaScript, developers can directly select and modify DOM elements.

```js
const title = document.querySelector("h1");

title.textContent = "Hello React";
```

## React Rendering

React allows developers to describe what the UI should look like based on the current application state.

Conceptually:

```text
Component
    ↓
React Rendering
    ↓
Browser DOM
```

When state or props change, React determines the necessary UI updates.

## Virtual DOM

React has historically used a virtual representation of the UI often called the Virtual DOM.

The important idea is that developers do not manually update every DOM node.

Instead:

```text
State Changes
     ↓
React Re-renders
     ↓
React Determines Required Changes
     ↓
Browser DOM Updates
```

## Important Clarification

The Virtual DOM should not simply be described as "always faster than the Real DOM."

Performance depends on the application, rendering work, browser behavior, and implementation details.

The bigger benefit for developers is React's declarative programming model and its ability to manage UI updates.

## Real-World Example

Suppose a shopping cart contains 10 products.

When the quantity of one product changes:

```text
Quantity changes
      ↓
State changes
      ↓
React renders according to new state
      ↓
Relevant UI is updated
```

## Practice

1. What does DOM stand for?
2. What is the purpose of the DOM?
3. What is meant by Virtual DOM?
4. How does React respond to state changes?
5. Why should we avoid saying that Virtual DOM is always faster?