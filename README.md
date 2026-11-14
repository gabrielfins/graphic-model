# Graphic Model

A desktop app for drawing **database models** — entity-relationship diagrams made of entities and their attributes. Built with **React, TypeScript and Electron**.

> **Status:** early stage. The home screens, editor layout (menu strip, toolbox and properties panel) and the diagram data format are in place; the drawing canvas is still a stub.

## Diagram format

Diagrams are described as JSON. A sample lives in [`src/assets/graphic.json`](src/assets/graphic.json):

```json
{
  "title": "untitled",
  "type": "erd_conceptual",
  "content": [
    { "id": 0, "object": "entity", "name": "cliente", "size": [80, 60], "position": [0, 0], "attributes": [ ... ] }
  ]
}
```

## Tech stack

- React 18 + TypeScript (Create React App)
- Electron 18 (desktop shell)
- React Router, React Icons
- Sass / CSS Modules

## Getting started

Requirements: Node.js and npm.

```bash
npm install
```

Run in the browser:

```bash
npm run react-start      # http://localhost:3000
```

Run as a desktop app (starts the React dev server, then opens Electron):

```bash
npm run electron-start
```

Production build of the React app:

```bash
npm run build
```

## Project structure

```
electron/                    # Electron main process and dev launcher
src/
├── components/              # Common, Editor and Home components
├── layouts/                 # HomeLayout and EditorLayout
├── pages/                   # Home (Home, Projects, Settings, About) and Editor (Canvas)
└── assets/graphic.json      # Sample diagram
```

## License

Released under the [MIT License](LICENSE.md).
