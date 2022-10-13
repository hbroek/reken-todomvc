let state         = loadState();
let viewTasks     = state.tasks
let editTask      = -1
let currentFilter = ''
let newTask       = ''

function addTask(tasks, task) {
	task = task.trim()

	if (task != '') {
		tasks.push({
			title: newTask,
			completed:false
		});
	}

	return ''
}

function updateTask(tasks, task) {
	task.title = task.title.trim();
	
	if (task.title=='')
		{tasks.splice(tasks.indexOf(task),1)}

	return task;	
}

function deleteTask(tasks, task) {
	tasks.splice(tasks.indexOf(task),1)
}

function deleteCompletedTasks(tasks) {
	tasks = tasks.filter(task => !task.completed)

	return tasks
}

function saveState(state) {
	localStorage.setItem('todos-reken', JSON.stringify(state));
}

function loadState() {
	let state = localStorage.getItem('todos-reken');

	if (state != null)
		return JSON.parse(state)

	return {
		tasks: [],
		filter: ''
	}
}

filters = {
	'': () => state.tasks,
	'active': () => state.tasks.filter(task => !task.completed),
	'completed': () => state.tasks.filter(task => task.completed)
}
let activeCount = 0;
