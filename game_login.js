score=0;
function updatescore(){
    score=score+1;
    document.getElementById("score").innerHTML="score+score";
    localStorage.setItem("score",score);

}

function nextpage(){
    window.location="activity_two.html";
    
}