let username = prompt("Введите Ваше имя: ")
let myTitle = document.getElementById('title')
let count = 0

if (username) {
	myTitle.innerHTML = "Ваш список дел, " + username + ":"
} else {
	myTitle.innerHTML = "Список дел анонимного пользователя:"
}



function makeTest() {
	count++

	let myContainer = document.getElementById("container")
	let myInput = document.getElementById("input")
	let value = myInput.value


	if (count <= 5) {
		myContainer.innerHTML = myContainer.innerHTML + "<p>" + count + ". " + value + "</p>" 
	} else if (count === 6) {
		myContainer.innerHTML = myContainer.innerHTML + "Можно ввести до 5 дел"
	} else {
		
	}
	}