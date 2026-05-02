const STORAGE_KEY = "maintenanceData";

let devices = [];

const deviceForm = document.getElementById("deviceForm");
const deviceNameInput = document.getElementById("deviceName");
const devicesContainer = document.getElementById("devicesContainer");
const upcomingContainer = document.getElementById("upcomingContainer");
const overdueContainer = document.getElementById("overdueContainer");

document.addEventListener("DOMContentLoaded", () => {
  loadData();
  renderApp();
});

deviceForm.addEventListener("submit", event => {
  event.preventDefault();

  const name = deviceNameInput.value.trim();

  if (name === "") {
    alert("Anna huoltokohteen nimi.");
    return;
  }

  addDevice(name);
  deviceNameInput.value = "";
});

function loadData() {
  const data = localStorage.getItem(STORAGE_KEY);
  devices = data ? JSON.parse(data) : [];
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(devices));
}

function generateId(prefix) {
  return prefix + "-" + Date.now() + "-" + Math.floor(Math.random() * 1000);
}

function addDevice(name) {
  devices.push({
    id: generateId("device"),
    name: name,
    tasks: []
  });

  saveData();
  renderApp();
}

function deleteDevice(deviceId) {
  const confirmDelete = confirm("Haluatko varmasti poistaa tämän kohteen ja sen huollot?");

  if (!confirmDelete) {
    return;
  }

  devices = devices.filter(device => device.id !== deviceId);

  saveData();
  renderApp();
}

function addTask(deviceId, taskName, date) {
  const device = devices.find(device => device.id === deviceId);

  if (!device) {
    return;
  }

  device.tasks.push({
    id: generateId("task"),
    name: taskName,
    date: date,
    done: false
  });

  saveData();
  renderApp();
}

function deleteTask(deviceId, taskId) {
  const device = devices.find(device => device.id === deviceId);

  if (!device) {
    return;
  }

  device.tasks = device.tasks.filter(task => task.id !== taskId);

  saveData();
  renderApp();
}

function markTaskDone(deviceId, taskId) {
  const device = devices.find(device => device.id === deviceId);

  if (!device) {
    return;
  }

  const task = device.tasks.find(task => task.id === taskId);

  if (!task) {
    return;
  }

  task.done = true;

  saveData();
  renderApp();
}

function renderApp() {
  renderDevices();
  renderUpcomingTasks();
  renderOverdueTasks();
}

function renderDevices() {
  devicesContainer.innerHTML = "";

  if (devices.length === 0) {
    devicesContainer.innerHTML = "<p>Ei huoltokohteita.</p>";
    return;
  }

  devices.forEach(device => {
    const deviceElement = document.createElement("div");
    deviceElement.className = "device";

    deviceElement.innerHTML = `
      <h3>${device.name}</h3>

      <form class="task-form" data-device-id="${device.id}">
        <label>Huoltotehtävä</label>
        <input type="text" name="taskName" required>

        <label>Päivämäärä</label>
        <input type="date" name="taskDate" required>

        <button type="submit">Lisää huolto</button>
      </form>

      <div class="tasks"></div>

      <button class="delete-button" data-action="delete-device" data-device-id="${device.id}">
        Poista kohde
      </button>
    `;

    const tasksContainer = deviceElement.querySelector(".tasks");

    if (device.tasks.length === 0) {
      tasksContainer.innerHTML = "<p>Ei huoltotehtäviä.</p>";
    } else {
      device.tasks.forEach(task => {
        tasksContainer.appendChild(createTaskElement(device.id, task));
      });
    }

    devicesContainer.appendChild(deviceElement);
  });

  addDynamicEventListeners();
}

function createTaskElement(deviceId, task) {
  const taskElement = document.createElement("div");

  let status = "Tuleva";

  if (task.done) {
    status = "Tehty";
    taskElement.className = "task done";
  } else if (isOverdue(task)) {
    status = "Myöhässä";
    taskElement.className = "task overdue";
  } else {
    taskElement.className = "task upcoming";
  }

  taskElement.innerHTML = `
    <div>
      <strong>${task.name}</strong><br>
      Päivämäärä: ${task.date}<br>
      Tila: ${status}
    </div>

    <div class="task-actions">
      ${
        task.done
          ? ""
          : `<button class="done-button" data-action="mark-done" data-device-id="${deviceId}" data-task-id="${task.id}">
              Merkitse tehdyksi
            </button>`
      }

      <button class="delete-button" data-action="delete-task" data-device-id="${deviceId}" data-task-id="${task.id}">
        Poista
      </button>
    </div>
  `;

  return taskElement;
}

function addDynamicEventListeners() {
  const taskForms = document.querySelectorAll(".task-form");

  taskForms.forEach(form => {
    form.addEventListener("submit", event => {
      event.preventDefault();

      const deviceId = form.dataset.deviceId;
      const taskName = form.taskName.value.trim();
      const taskDate = form.taskDate.value;

      if (taskName === "" || taskDate === "") {
        alert("Täytä huoltotehtävän nimi ja päivämäärä.");
        return;
      }

      addTask(deviceId, taskName, taskDate);
    });
  });

  const buttons = document.querySelectorAll("[data-action]");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;
      const deviceId = button.dataset.deviceId;
      const taskId = button.dataset.taskId;

      if (action === "delete-device") {
        deleteDevice(deviceId);
      }

      if (action === "delete-task") {
        deleteTask(deviceId, taskId);
      }

      if (action === "mark-done") {
        markTaskDone(deviceId, taskId);
      }
    });
  });
}

function renderUpcomingTasks() {
  const upcomingTasks = [];

  devices.forEach(device => {
    device.tasks.forEach(task => {
      if (isUpcoming(task)) {
        upcomingTasks.push({
          deviceName: device.name,
          taskName: task.name,
          date: task.date
        });
      }
    });
  });

  upcomingTasks.sort((a, b) => new Date(a.date) - new Date(b.date));

  upcomingContainer.innerHTML = "";

  if (upcomingTasks.length === 0) {
    upcomingContainer.innerHTML = "<p>Ei tulevia huoltoja.</p>";
    return;
  }

  upcomingTasks.forEach(task => {
    const item = document.createElement("p");
    item.textContent = `${task.deviceName}: ${task.taskName} ${task.date}`;
    upcomingContainer.appendChild(item);
  });
}

function renderOverdueTasks() {
  const overdueTasks = [];

  devices.forEach(device => {
    device.tasks.forEach(task => {
      if (isOverdue(task)) {
        overdueTasks.push({
          deviceName: device.name,
          taskName: task.name,
          date: task.date
        });
      }
    });
  });

  overdueTasks.sort((a, b) => new Date(a.date) - new Date(b.date));

  overdueContainer.innerHTML = "";

  if (overdueTasks.length === 0) {
    overdueContainer.innerHTML = "<p>Ei myöhässä olevia huoltoja.</p>";
    return;
  }

  overdueTasks.forEach(task => {
    const item = document.createElement("p");
    item.textContent = `${task.deviceName}: ${task.taskName} ${task.date}`;
    overdueContainer.appendChild(item);
  });
}

function isOverdue(task) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const taskDate = new Date(task.date);
  taskDate.setHours(0, 0, 0, 0);

  return !task.done && taskDate < today;
}

function isUpcoming(task) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const taskDate = new Date(task.date);
  taskDate.setHours(0, 0, 0, 0);

  return !task.done && taskDate >= today;
}
