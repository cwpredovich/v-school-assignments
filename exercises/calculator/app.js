

document.add.addEventListener("submit", function (e){
    e.preventDefault();
    var add1 = document.add.add1.value;
    var add2 = document.add.add2.value;

    document.getElementById("screen").innerHTML = Number(add1) + Number(add2);

})

document.subtract.addEventListener("submit", function (e){
    e.preventDefault();
    var sub1 = document.subtract.sub1.value;
    var sub2 = document.subtract.sub2.value;

    document.getElementById("screen").innerHTML = Number(sub1) - Number(sub2);

})

document.multiply.addEventListener("submit", function (e){
    e.preventDefault();
    var mult1 = document.multiply.mult1.value;
    var mult2 = document.multiply.mult2.value;

    document.getElementById("screen").innerHTML = Number(mult1) * Number(mult2);

})