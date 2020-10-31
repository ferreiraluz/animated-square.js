const button = document.querySelector("input")
    .addEventListener("click", ()=>{
        // the first step is get the square in the html

        const square = document.querySelector("#square");

        // the second step is add the class active to the square

        square.classList.add("active");

        // the third step is to make it go up

        square.style.margin = "15px auto"

        
    })