function game(){
    document.getElementById("start").style.display="none";
    var computer = Math.floor(Math.random() * 3) + 1;
    console.log(computer);
    var human = parseInt(prompt("Select an option between 1 & 3: "));
    console.log(human);
    if (human == 1){
        if (computer == 1){
            document.getElementById("draw").style.display="block";
        } else if (computer == 2){
            document.getElementById("lose").style.display="block";
        } else {
            document.getElementById("win").style.display="block";
        }
    } else if (human == 2){
        if (computer == 1){
            document.getElementById("win").style.display="block";
        } else if (computer == 2){
            document.getElementById("draw").style.display="block";
        } else {
            document.getElementById("lose").style.display="block";
        }
    } else if (human == 3){
        if (computer == 1){
            document.getElementById("lose").style.display="block";
        } else if (computer == 2){
            document.getElementById("win").style.display="block";
        } else {
            document.getElementById("draw").style.display="block";
        }
    } else {
        alert("I'm sorry that selection isn't allowed please try again!")
    }
    document.getElementById("restart").style.display="block";
}

function reset(){
    document.getElementById("restart").style.display="none";
    document.getElementById("start").style.display="block";
    document.getElementById("lose").style.display="none";
    document.getElementById("win").style.display="none";
    document.getElementById("draw").style.display="none";
}