document.getElementById("demo").innerHTML = "This text was added by JavaScript!";

//Navbar
function hideIconBar(){
    let iconBar = document.getElementById("iconBar");
    let navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:none;");
    navigation.classList.remove("hide");
}

function showIconBar(){
    let iconBar = document.getElementById("iconBar");
    let navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:block;");
    navigation.classList.add("hide");
}

//Comment

function showComment(){
    let commentArea = document.getElementById("comment-area")
    commentArea.classList.remove("hide");
}

function showReply(id){
    let replyArea = document.getElementById(id)
    replyArea.classList.remove("hide");
}

