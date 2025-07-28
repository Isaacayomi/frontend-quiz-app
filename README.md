# 🧠 Frontend Quiz App

A dynamic and interactive quiz application built with React, Redux Toolkit, and Tailwind CSS. Test your knowledge across various frontend subjects, track your score, and enjoy a seamless, responsive experience. 🚀

## Getting Started

Follow these steps to set up and run the project on your local machine.

### Installation

To get started with the Frontend Quiz App, clone the repository and install the dependencies:

✨ **Clone the Repository:**

```bash
git clone https://github.com/Isaacayomi/frontend-quiz-app.git
```

📦 **Navigate to Project Directory:**

```bash
cd frontend-quiz-app
```

🚀 **Install Dependencies:**

```bash
npm install
# or
yarn install
```

### Running the Application

This project uses `json-server` to simulate a backend API for quiz data.

1.  **Start the JSON Server**:
    In your terminal, run:

    ```bash
    npm run server
    # This will start the API server on http://localhost:8000
    ```

2.  **Start the Development Server**:
    In a separate terminal, run:

    ```bash
    npm run dev
    # This will start the React development server, typically on http://localhost:5173
    ```

## Usage

Once the development server is running, open your web browser and navigate to `http://localhost:5173` (or the port Vite provides).

1.  **Select a Subject**: From the home screen, choose a quiz subject (e.g., HTML, CSS, JavaScript, Accessibility) to begin.
2.  **Answer Questions**: Progress through the quiz by selecting an option for each question. If you attempt to proceed without an answer, an error message will appear.
3.  **Track Progress**: The progress bar and question counter update as you answer, showing your advancement through the quiz.
4.  **Review Score**: After completing all questions, you will be directed to a score page displaying your performance.
5.  **Restart Quiz**: On the score page, you have the option to restart the quiz and choose another subject.
6.  **Toggle Theme**: Switch between light and dark modes at any time using the toggle button in the navigation bar for a personalized viewing experience.

## Features

- **Interactive Quizzes**: Engage with a variety of questions dynamically fetched from a mock API.
- **Subject-Based Learning**: Select from different frontend categories to focus your learning.
- **Real-time Score Tracking**: See your progress and correct answers instantly.
- **Responsive Design**: Enjoy a seamless experience across all devices, from mobile to desktop.
- **Theme Switching**: Easily toggle between light and dark modes to suit your preference and environment.
- **Centralized State Management**: Powered by Redux Toolkit for predictable and scalable state handling.
- **Intuitive Navigation**: Simple and clear controls for moving between questions and screens.
- **Error Feedback**: Receive clear indicators if an answer is required or if an option is correct/incorrect.

## Technologies Used

| Technology                                             | Description                                                                                                  |
| :----------------------------------------------------- | :----------------------------------------------------------------------------------------------------------- |
| [React](https://react.dev/)                            | A JavaScript library for building user interfaces.                                                           |
| [Redux Toolkit](https://redux-toolkit.js.org/)         | The official, opinionated, batteries-included toolset for efficient Redux development.                       |
| [React Router DOM](https://reactrouter.com/en/main)    | Declarative routing for React applications.                                                                  |
| [Tailwind CSS](https://tailwindcss.com/)               | A utility-first CSS framework for rapidly building custom designs.                                           |
| [Vite](https://vitejs.dev/)                            | A fast build tool that provides a lightning-fast development experience.                                     |
| [ESLint](https://eslint.org/)                          | A pluggable JavaScript linter for identifying and reporting on patterns found in ECMAScript/JavaScript code. |
| [Prettier](https://prettier.io/)                       | An opinionated code formatter that enforces a consistent style by parsing your code and re-printing it.      |
| [JSON Server](https://github.com/typicode/json-server) | A full fake REST API with zero coding in less than a minute. Useful for prototyping and testing.             |

## Author Info

Developed by [Isaac Ayomide (Prime)] 👋

Connect with me:

- GitHub: [Your GitHub Profile](https://github.com/Isaacayomi/multi-step-form-v2)
- Twitter: [Your Twitter Profile](twitter.com/_devPRIME)
- LinkedIn: [Your LinkedIn Profile](www.linkedin.com/in/isaac-ayomide-okunlola-3568b7275)

---

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/Isaacayomi/frontend-quiz-app/actions)
[![Project Version](https://img.shields.io/badge/version-v0.0.0-blue.svg)](package.json)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)
