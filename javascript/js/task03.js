fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => {
    const todoList = document.getElementById("todoList");
    data.slice(0, 5).forEach((todo) => {
      const listItem = document.createElement("li");
      listItem.textContent = todo.title;
      todoList.appendChild(listItem);
    });
  })
  .catch((error) => console.error("Erreur:", error));
