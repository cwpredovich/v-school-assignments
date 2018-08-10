// the point of this exercise is to practice XHR requests in vanilla javascript

// Step 1:  
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        var data = JSON.parse(xhr.responseText);
        parsePokemon(data)

    }
}

xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true)

xhr.send();

function parsePokemon(data){
    var printOut = document.getElementById('list');
    for (var i = 0; i < data.objects[0].pokemon.length; i++) {
        var pokeDex = document.createElement("LI");
        var thisPokemon = document.createTextNode(`${data.objects[0].pokemon[i].name}`)
        pokeDex.appendChild(thisPokemon);
        document.getElementById("list").appendChild(pokeDex);
        // li.innerHTML = `<span>${data.objects[0].pokemon[i].name}</span>`
        // printOut.appendChild(li)
    }
}



// up to this point, I have accessed the entire list of pokemon and saved the pokemon objects to an array