

document.travel.addEventListener("submit", function (e) {
    e.preventDefault();
    var firstName = document.travel.fName.value;
    var lastName = document.travel.lName.value;
    var age = document.travel.age.value;
    var gender = document.travel.gender.value;
    var destination = document.travel.destination.value;
    var dietArr = [];
    var checkedBoxes = document.querySelectorAll('input[name=diet]:checked');

    for(var i = 0; i < checkedBoxes.length; i++){
        dietArr.push(checkedBoxes[i].value)
    }
    
    alert(`First Name: ${firstName} \n Last Name: ${lastName} \n Age: ${age} \n Gender: ${gender} \n Destination: ${destination} \n Diet: ${dietArr}`);
})