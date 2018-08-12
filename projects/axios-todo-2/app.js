var section = document.querySelector("section");
var url = "https://api.vschool.io/topher/todo/";

var displayTodo = function(todo){
    // formats and displays all of my to do's
    var container = document.createElement("div");

    var title = document.createElement("h3");
    title.innerHTML = `Task:  ${todo.title}`;

    var description = document.createElement("p");
    description.innerHTML = `Description:  ${todo.description}`;

    var price = document.createElement("p");
    price.innerHTML = `Price: ${todo.price}`;

    var completed = document.createElement("p");
    completed.innerHTML = `Complete:  ${todo.completed}`;

    var checkDiv = document.createElement("div");
    checkDiv.setAttribute("name", "checked")
    checkDiv.textContent = "Completed   "
    var checkMark = document.createElement("input");
    checkMark.setAttribute("type", "checkbox");
    checkMark.setAttribute("id", "finished");
    checkMark.setAttribute("name", "finished");
    checkMark.setAttribute("value", todo.title);

    section.appendChild(container);
    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(completed);
    container.appendChild(price);
    container.appendChild(checkDiv);
    checkDiv.appendChild(checkMark);
}

axios
    .get(url)
    .then(function(response){
        var todos = response.data;
        todos.forEach(displayTodo);
    })
    .catch(function(err){
        console.log(err);
    });

// grab the info from the 3 text inputs
// save those to a new object:  newToDo
// when the button is clicked, axios.post the newToDo
document.post.addEventListener('submit', function(e){
    e.preventDefault();
    var title = document.post.task.value;
    var descr = document.post.descr.value;
    var price = document.post.price.value;
    var newToDo = {
        title: title,
        description: descr,
        price: price
    };
    console.log(newToDo);
    axios.post(url, newToDo).then(function(response){
        console.log(response.data);
        location.reload(true);
    }).catch(function(error){
        console.log(error)
    })
})

document.finished.addEventListener('changed', function(e){
    e.preventDefault();
    if (this.checked){
        document.getElementById("finished").style.textDecoration =  "line-through"
    }
})
