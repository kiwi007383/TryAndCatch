function myfunction(){
    let message = document.getElementById("p01");
    message.innerHTML = "";

    let inputText = document.getElementById("demo").value;
    try{
        if(inputText.trim() == "") throw "empty!";
        if(isNaN(inputText)) throw "not a number!";
        inputText = Number(inputText);
        if(inputText < 5) throw "too low!"
        if(inputText > 10) throw "too high!"
        else throw "allowed";
    }
    catch(a){
        message.innerHTML = "Input is " + a;
    };
};