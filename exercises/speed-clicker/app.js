// program the web page
// so that each click is adds 1 to the click count
// use web storage so that when the page is refreshed
// the click count remains.



// Click event listener
// Click counter
// Click count display
// Click count storage


// delete localStorage.clickCount;
// console.log(localStorage.clickCount);
let clickCount = 0;
// let loadCount = localStorage.loadCount;


    if(localStorage.clickCount == null){
        document.addEventListener("click", function(e){
            e.preventDefault();
            clickCount += 1;
            document.getElementById("clickDisplay").innerHTML = clickCount;
            localStorage.clickCount = Number(clickCount);
        })
    } else {
            var clickCount = localStorage.clickCount;
            document.addEventListener("click", function(e){
            e.preventDefault();
            clickCount += 1;
            document.getElementById("clickDisplay").innerHTML = clickCount;
            localStorage.clickCount = Number(clickCount);
        })
    }


        // Number(localStorage.clickCount) += 1;
        // document.getElementById("clickDisplay").innerHTML = Number(localStorage.clickCount);



//     } else {
//         clickCount += 1;
//         localStorage.clickCount = `${clickCount}`;
//         document.getElementById("clickDisplay").innerHTML = clickCount;
//     }
// })

// window.onbeforeunload = function(){
//     loadCount += 1;
// }

// // separate function for retrieving and displaying the 

