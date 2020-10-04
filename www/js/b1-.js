window.onload = function(){
    const form = document.getElementById("form");
    const error = document.getElementsByClassName("error");
    
    const name = document.getElementById("name");
    const price = document.getElementById("price");
    const nameReport = document.getElementById("nameReport");

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validateForm();
        
    });

    function validateForm(){
        if(removewhitespace(name.value) === ''){
            setError(name,0,"Name is Require");
        }else{
            setSuccess(name,0);
        }
        if(removewhitespace(price.value) === ''){
            setError(price,1,"Price is Require");
        }else{
            setSuccess(price,1);
        }
        if(removewhitespace(nameReport.value) === ''){
            setError(nameReport,2,"Name report is Require");
        }else{
            setSuccess(nameReport,2);
        }
        if(removewhitespace(name.value) !== '' && removewhitespace(price.value) !== '' && removewhitespace(nameReport.value) !== ''){
            form.reset();
        }

    }

    function setError(input,index,message) {
        error[index].innerText = message;
        input.style.borderColor = "red";
    }
    function setSuccess(input,index) {
        error[index].innerText = '';
        input.style.borderColor = "#ccc";
    }
    function removewhitespace(text){
        return text.trim();
    }

};



