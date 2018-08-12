// This is the Axios To Do List project
// The finished web site will:
    // display tasks
    // allow user to add, edit, and delete tasks
    // allow user to mark tasks as completed

// step 1:  How do I program the site to fetch my to-do list?

function getTasks(name){
    axios.get(`https://api.vschool.io/${name}/todo`).then(function(response){
        displayData(response.data);
        // This line will post all of the response.data to the web document
    }).catch(function(error){
        console.log(error);
    });
    // I think the above line will (1) grab the entire todo list for the specified name (2) print the list on the web doc (3) if there is an error, the error is console logged
};

function displayData(arr){
    // grab list from HTML
    var printOut = document.getElementById("defaultList");

    // loop through the array
        // For each todo obj in arr
        // Create a text element (p, h1-16, span)
        // Put todo in text element
        // Append text element to list on DOM
    for (var i = 0; i < arr.length; i++){
        var tasks = document.createElement("LI");
        var thisTask = document.createTextNode(`Name: ${arr[i].sessionId}, Task: ${arr[i].title}, Description: ${arr[i].description}, Completed: ${arr[i].completed}`);
        tasks.appendChild(thisTask);
        document.getElementById("defaultList").appendChild(tasks);
    }
}

document.specifyName.addEventListener("submit", function(e){
    e.preventDefault();
    getTasks(document.specifyName.nameSpecified.value);
})