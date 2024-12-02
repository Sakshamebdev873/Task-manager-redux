
Task Manager
A simple and intuitive Task Management Dashboard built with React and Redux to help users efficiently manage their tasks. Users can add, edit, delete, and mark tasks as completed while filtering tasks based on their status.

Live Demo
Check out the live demo here: Task Manager Redux Assignment ["https://taskmanagerreduxassignment.netlify.app/"]

Features
Task Management:

Add tasks with a title, description, and due date.
Edit existing tasks to update their details.
Delete tasks when they are no longer needed.
Mark tasks as completed or pending.
Filters:

View All Tasks, Completed Tasks, Pending Tasks, or Overdue Tasks.
Modern UI:

Clean and responsive design.
User-friendly interface built using modern tools.
Technology Stack
Frontend:

React (JavaScript library for building user interfaces)
Redux (State management library)
Redux Toolkit (Simplified state management)
Styling:

Material-UI (Modern UI components library)
Hosting:

Netlify
Getting Started
1. Clone the Repository
bash
Copy code
git clone https://github.com/your-username/task-manager-redux.git
cd task-manager-redux
2. Install Dependencies
bash
Copy code
npm install
3. Start the Development Server
bash
Copy code
npm start
The application will run at http://localhost:3000/.

4. Build for Production
bash
Copy code
npm run build
This will create an optimized build of the app in the build/ directory.

Folder Structure
bash
Copy code
src/
├── components/          # Reusable UI components
│   ├── TaskForm.js      # Add/Edit Task form
│   ├── TaskList.js      # Displays the list of tasks
│   ├── TaskItem.js      # Individual task item component
│   └── Filter.js        # Task filtering options
├── features/            # Redux features
│   └── tasks/
│       ├── tasksSlice.js # Redux slice for task management
├── pages/               # Page components
│   ├── TaskDashboard.js # Main dashboard page
│   └── TaskDetails.js   # Task details page (optional)
├── App.js               # Main app component
├── store.js             # Redux store configuration
└── index.js             # App entry point
Redux State Structure
javascript
Copy code
{
  tasks: {
    tasks: [
      {
        id: 1,
        title: "Sample Task",
        description: "This is an example task.",
        dueDate: "2024-12-10",
        completed: false,
      },
    ],
    filter: "all", // Filters can be "all", "completed", "pending", "overdue"
  }
}
Future Enhancements
Search Functionality: Allow users to search for tasks by title.
Drag-and-Drop Support: Enable reordering of tasks.
Task Priority: Add priority levels to tasks.
Confirmation Modal: Show a confirmation dialog before deleting tasks.
Contributing
Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.

License
This project is open-source and available under the MIT License.

Author
Saksham Arya
GitHub: Sakshamebdev873
Email: vinodarya344@gmail.com
