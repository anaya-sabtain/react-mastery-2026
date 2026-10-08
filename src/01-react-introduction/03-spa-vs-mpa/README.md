# Single Page Applications vs Multi-Page Applications

## What is an SPA?

SPA stands for Single Page Application.

An SPA loads an application shell and dynamically updates the user interface as the user navigates through the application.

React is commonly used to build SPAs.

## SPA Flow

```text
User
 ↓
Browser
 ↓
React Application
 ↓
Router
 ↓
Requested View
 ↓
UI Update
```

## Examples

Common SPA use cases include:

- SaaS dashboards
- Admin panels
- Project management applications
- Customer portals
- Interactive web applications

## What is an MPA?

MPA stands for Multi-Page Application.

In a traditional MPA, navigation commonly results in requests for different HTML documents from the server.

```text
Browser
 ↓
Server
 ↓
HTML Page
```

When the user navigates:

```text
Browser
 ↓
Server
 ↓
Another HTML Page
```

## SPA vs MPA

| Feature | SPA | MPA |
|---|---|---|
| Page model | Single application shell | Multiple HTML pages |
| Navigation | Often client-side | Commonly server-driven |
| UI updates | Dynamic | New document/page |
| Typical use | SaaS applications | Traditional websites |
| SEO | Requires careful architecture | Often straightforward |
| Complexity | Can move complexity to client | Can move complexity to server |

## Important Note

SPA is not automatically better than MPA.

The architecture should be selected according to the application's requirements, SEO needs, performance goals, content model, and team requirements.

## Real-World Example

A project-management dashboard is a strong SPA use case because users frequently interact with different parts of the application without wanting a full document navigation experience.

## Practice

1. What does SPA stand for?
2. What does MPA stand for?
3. Give two examples of SPA applications.
4. What is one advantage of an MPA?
5. When would you choose an SPA?