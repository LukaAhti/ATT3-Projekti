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
