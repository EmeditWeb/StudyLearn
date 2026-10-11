# StudyLearn

A React and TypeScript learning companion for focused attempts, progressive nuggets and visible progress across many subjects.

## Run locally

Use Node.js 22.12 or newer. In this directory run:

```powershell
npm install
npm run dev
```

## Validate

```powershell
npm test
npm run build
npm run preview
```

The automated checks cover completion requirements, progress recovery, hints, timers and catalog integrity. See TEST-REPORT.txt for browser checks and remaining limitations.

## Current prototype

91 exercises across 22 starter paths in five learning fields, plus personal paths for any subject. Attempts save locally. Completion requires a selected correct answer and a reflection of at least 20 non-whitespace characters. The button stays disabled until answer and reflection are filled. Reflections are saved, not graded by AI.

Focus duration locks after start, including while paused. Reset explicitly unlocks it. Expiry gives a visible alert and a short bell when browser audio is available. Hints remain available throughout. Closing the task ends its timer.

Prepared hints are implemented. Live AI, accounts, cross-device sync, multilingual content and learner research are roadmap milestones.

## Sharing

Logo assets and the joined StudyLearn sharing image are in public/assets. Set VITE_SITE_URL to your public origin before the production build so sharing tags use absolute image URLs.

## Offline

The production service worker precaches built files after the first successful visit. External source links still need a connection. Fonts have system fallbacks.

## Preview validation limit

The current environment blocked shell subprocesses. TypeScript and regression tests were executed in process, and a local browser build was tested. The standard npm/Vite production build still needs to run on the development machine.

## Automatic learning preview

The marketing page and application home share a slanted, automatic illustration. It cycles through a Python loops nugget, an accelerated five-minute countdown, a Go loop that reveals output 0, 1 and 2, then StudyLearn artwork. The preview has no controls and records no learner focus time. Browser audio becomes available after a normal page interaction. Reduced-motion preferences show a static nugget.

Subtle moving outlines and a travelling line add motion without changing task controls. On phones the hero stacks vertically and the preview stays inside the page width.

## Expanded exercises

Algebra foundations contains six exercises. Every other built-in path has at least four, with Python retaining five. Each exercise includes a goal, example, three prepared hints, a concept check and a source link. Existing task identifiers remain unchanged so saved progress stays attached to its original exercises.
