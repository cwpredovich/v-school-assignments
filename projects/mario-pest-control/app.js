document.calc.addEventListener("submit", function (e) {
    e.preventDefault();
    var goombaTotal = document.calc.gcount.value;
    var bobTotal = document.calc.bcount.value;
    var cheepTotal = document.calc.ccount.value;

    document.getElementById("cost-box").innerHTML = "Amount Due = " + ((Number(goombaTotal)*5) + (Number(bobTotal)*7) + (Number(cheepTotal)*11)) + " coins";

})
