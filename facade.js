function fetchTodos() {
	return getFetch("https://jsonplaceholder.typicode.com/todos/1");
}

function fetchUsers() {
	return getFetch("https://jsonplaceholder.typicode.com/users/1");
}

// facade
function getFetch(url) {
	return fetch(url).then((resp) => resp.json());
}

function fetchData() {
	fetchTodos().then((data) => {
		const el = document.getElementById("todos");
		el.innerText = JSON.stringify(data);
	});

	fetchUsers().then((data) => {
		const el = document.getElementById("users");
		el.innerText = JSON.stringify(data);
	});
}

fetchData();
