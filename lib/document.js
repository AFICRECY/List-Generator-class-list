// TODO: Import your Header, TaskList, and TaskListItem
const Header = require('./header.js');
const TaskList = require('./tasklist.js');
const TaskListItem = require('./taskListItem.js');

function createDocument(title, tasks = []) {
  // TODO: Create a new Header
  const header = new Header(title);
  // TODO: Create new TaskListItems from the provided tasks
  const taskListItems = [];
  for (task of tasks) {
    taskListItems.push(new TaskListItem(task.priority, task.text));
  }
  // TODO: Add TaskListItems to a new TaskList
  const taskList = new TaskList(taskListItems);

  // TODO: Modify the template below to include your title, Header, and TaskList
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>YOUR TITLE HERE</title>
      <link rel="stylesheet" href="../dist/style.css" />
    </head>
    <body>
      <div class="card">
      <header class="header">
      <h1>Todo Today</h1>
      <p>${DATE_HERE}</p>
      </header>
      </div>
    </body>
  </html>
  `;
}

module.exports = { createDocument };
