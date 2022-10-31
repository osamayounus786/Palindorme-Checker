 const textInput = document.querySelector(".ipnutEl input");
 const checkBtn = document.querySelector(".ipnutEl button");
 const txtResult = document.querySelector(".text-result")
 let filterInput;
    checkBtn.addEventListener('click',() =>{
        /*  splitting user input 
            reversing 
            and joining them
        */
        reverseInput = filterInput.split("").reverse().join("");
        txtResult.style.display = "block";
            if(filterInput != reverseInput){
                return txtResult.innerHTML = `No, <span>'${textInput.value}'</span> isn't a palindorme! `;
            }
            return txtResult.innerHTML = `Yes, <span>'${textInput.value}'</span> is a palindorme! `;
    });



 textInput.addEventListener('keyup',() =>{
    //regular expression for removing symbols white spaces
      filterInput = textInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    //   console.log(filterInput)
    if(filterInput){
        return checkBtn.classList.add("active");
    }
    txtResult.style.display = "none";
    
 });