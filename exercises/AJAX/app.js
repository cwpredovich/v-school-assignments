// JS
    // document.
    // how to create HTML elements
        // var h1 = document.createElement('h1')
        // var display = document.getElementById('list')
    // how to append HTML elements
        // h1.innerHTML = "<span>Hey I'm an h1</span>"
        // display.appendChild(h1)


// C-R-U-D
    // Http:
    // Post: Create
    // Get: Read
    // Put: Update
    // Delete: Destroy


// AJAX - Asynchronous Javascript and XML

    // XML HTTP Request
        // readystate, onreadystatechange
    var xhr = new XMLHttpRequest();
    console.log(xhr);

    xhr.onreadystatechange = function(){

        if(xhr.readyState == 4 && xhr.status == 200){
            // use double equals not triple
            // status means good to go
            var data = JSON.parse(xhr.responseText);
            console.log(data)
            displayData(data)
        }       
    }

    xhr.open("GET", "https://swapi.co/api/people/1/", true)
        // First argument is a request type (ie. get, post, put, or delete)
        // Second argument is the url
        // Third argument is whether or not you want it to be asynchronous: true or false
    xhr.send()

    function displayData(data){
        var display = document.getElementById('list')
        display.innerHTML = `
                            <h1>
                            ${data.name}
                            </h1>
                            `
        display.style.backgroundColor = data.eye_color;
        display.classList.add('anotherClass');

    }