const todoListElement = document.getElementById("todo-list");
const messagingAppElement = document.getElementById("messaging-app");

const todoListElementParagraph = document.getElementById("todo-list-p");
const messagingAppElementParagraph = document.getElementById("messaging-app-p");

const showTodoListElement = () => {
  if (todoListElementParagraph.style.display === "none") {
    todoListElementParagraph.style.display = "block";
  } else {
    todoListElementParagraph.style.display = "none";
  }
};

const showMessagingAppElement = () => {
  if (messagingAppElementParagraph.style.display === "none") {
    messagingAppElementParagraph.style.display = "block";
  } else {
    messagingAppElementParagraph.style.display = "none";
  }
};

todoListElement.addEventListener("click", event => {
    event.preventDefault();
    showTodoListElement();
});
messagingAppElement.addEventListener("click", event => {
    event.preventDefault();
    showMessagingAppElement();
});