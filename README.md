# Task Manager

A React app for adding tasks, marking them complete, undoing completion, and deleting them. The app displays the total and completed task counts.

## Run locally

```bash
npm install
npm run dev
```

Open the localhost address shown in the terminal.

## Component structure

```text
App
├── Header
├── TaskInput
├── TaskList
│   └── TaskItem
└── Stats
```

- `App` owns the task array using `useState` and provides the functions that add, toggle, and delete tasks.
- `Header` displays the app title.
- `TaskInput` tracks the draft text, disables Add when the input is blank, and clears the input after submission.
- `TaskList` uses `.map()` to render one `TaskItem` per task.
- `TaskItem` displays the task and its action buttons. Completed tasks appear crossed out.
- `Stats` derives the total and completed counts from the task array.

## Data flow

`App` passes tasks and event handlers to its children through props. When a user adds, toggles, or deletes a task, the child calls the matching handler. `App` updates the task array and React renders the updated list and counts.
