# NoteSphere

**NoteSphere** is a feedback collection platform designed to let users submit and manage feedback in the form of notes. It provides an intuitive, user-friendly interface for creating, editing, and managing feedback about projects or activities, making it an ideal tool for gathering valuable insights. Built with React, Node.js, and MongoDB, the application is responsive and dynamic, offering a smooth user experience with modern styling powered by Tailwind CSS.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Submit Feedback as Notes**: Users can submit feedback in the form of notes.
- **Edit Feedback**: Modify existing feedback notes.
- **Delete Feedback**: Remove feedback that is no longer needed.
- **Responsive UI**: Built using Tailwind CSS for a sleek and responsive design across all devices.
- **User Authentication**: Secure login and registration with JWT (JSON Web Tokens).

## Tech Stack

- **Frontend**: React, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose ORM)
- **Authentication**: JWT (JSON Web Token)

## Installation

To get NoteSphere running locally, follow these steps:

### Prerequisites

- **Node.js**: Make sure you have [Node.js](https://nodejs.org/en/) installed.
- **MongoDB**: Install and run MongoDB locally or use a cloud provider.

### Setup Instructions

1. **Clone the repository**:

    ```bash
    git clone https://github.com/ContriHUB/NoteSphere.git
    ```

2. **Install backend dependencies**:

    ```bash
    npm install
    cd backend
    npm install bcryptjs --save
    ```

3. **Run the backend server**:

    ```bash
    nodemon server.js
    ```

4. **Start the frontend server**:

    ```bash
    cd src
    npm start
    ```

## Usage

Once NoteSphere is up and running:

- **Sign Up/Login**: Register or log in to your account.
- **Submit Feedback**: Use the interface to submit feedback in the form of notes.
- **Edit/Delete Feedback**: Edit or delete your feedback notes using the available options.


## API Endpoints

- **POST /api/auth/login**: Log in to your account.
- **POST /api/auth/createuser**: Register a new user.
- **GET /api/notes/fetchallnotes**: Get all notes for the logged-in user.
- **POST /api/notes/addnote**: Submit a new feedback note.
- **PUT /api/notes/updatenote/:id**: Update a specific feedback note.
- **DELETE /api/notes/deletenote/:id**: Delete a specific feedback note.

## Contributing

Contributions are welcome! Feel free to fork the project, make improvements, and submit a pull request.

1. Fork the project.
2. Create a new branch for your feature: `git checkout -b feature/new-feature`.
3. Commit your changes: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature/new-feature`.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/ContriHUB/NoteSphere/blob/main/LICENSE) file for more details.
