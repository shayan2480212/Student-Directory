# Student Directory

A basic Student Directory built with **React + Vite + Bootstrap 5**.
Uses React components & props with the Bootstrap components required by the assignment:
Navbar, Breadcrumb, Cards, Buttons, Pagination, Alert and a responsive Grid.

## Components

| Component | File | Props it receives |
|---|---|---|
| Navbar | `components/Navbar.jsx` | `onSearch` |
| Breadcrumb | `components/Breadcrumb.jsx` | `items` |
| PageHeader | `components/PageHeader.jsx` | `title`, `buttonLabel`, `onButtonClick` |
| StudentCard | `components/StudentCard.jsx` | `student`, `onView`, `onDelete` |
| StudentGrid | `components/StudentGrid.jsx` | `students`, `onView`, `onDelete` |
| Pagination | `components/Pagination.jsx` | `currentPage`, `totalPages`, `onPageChange` |
| Alert | `components/Alert.jsx` | `message`, `onClose` |
| Footer | `components/Footer.jsx` | *(none)* |

## Getting started

```bash
cd student-directory-simple
npm install
npm run dev
```

Opens at **http://localhost:3003**.

## Project structure

```
student-directory-simple/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                 # React root + Bootstrap CSS & JS imports
    ├── index.css                # Small custom tweaks
    ├── App.jsx                  # State, filtering, pagination
    ├── data/
    │   └── students.js          # 12 mock students (3 pages of 4)
    └── components/
        ├── Navbar.jsx
        ├── Breadcrumb.jsx
        ├── PageHeader.jsx
        ├── StudentCard.jsx
        ├── StudentGrid.jsx
        ├── Pagination.jsx
        ├── Alert.jsx
        └── Footer.jsx
```

## Props flow

```
App  (students, searchTerm, currentPage, alertMessage)
 ├─ Navbar       ← onSearch
 ├─ Breadcrumb   ← items
 ├─ PageHeader   ← title, buttonLabel, onButtonClick
 ├─ StudentGrid  ← students, onView, onDelete
 │    └─ StudentCard ← student, onView, onDelete
 ├─ Pagination   ← currentPage, totalPages, onPageChange
 ├─ Alert        ← message, onClose
 └─ Footer       (no props)
```

