# NPM Basics

## What is NPM?

NPM stands for Node Package Manager.

It is used to install, manage, and distribute JavaScript packages.

NPM is installed with Node.js.

## Check Node.js

```bash
node -v
```

## Check NPM

```bash
npm -v
```

## Initialize a Project

```bash
npm init
```

For a project with default settings:

```bash
npm init -y
```

This creates:

```text
package.json
```

## Install a Package

```bash
npm install axios
```

The package is added as a project dependency.

## Install a Development Dependency

```bash
npm install -D eslint
```

## Install Packages

```bash
npm install
```

This installs dependencies listed in `package.json`.

## package.json

A typical project contains:

```json
{
  "name": "react-project",
  "version": "1.0.0",
  "scripts": {},
  "dependencies": {}
}
```

## node_modules

Installed packages are stored in:

```text
node_modules/
```

Developers normally do not commit `node_modules` to Git.

## package-lock.json

`package-lock.json` records the dependency resolution used by the project.

It helps keep installations consistent across environments.

## Common Commands

```bash
npm install
npm install package-name
npm uninstall package-name
npm run dev
npm run build
```

## Real-World Example

A React application may use:

```text
React
React Router
Axios
Zod
TanStack Query
```

NPM manages these project dependencies.

## Practice

1. What is NPM?
2. What is `package.json`?
3. What is `node_modules`?
4. What does `npm install` do?
5. What is the difference between a dependency and a development dependency?