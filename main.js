document.addEventListener("DOMContentLoaded", (event) => {
 window.addEventListener("resize", detectOrientation) ;
 detectOrientation() ;
});

let rotateScreen = document.getElementById("rotateScreen");
let displayContent = document.getElementById("displayContent");

function detectOrientation()
{
    if(window.orientation == 0)
    {
        rotateScreen.style.display="block";
        displayContent.style.display="none";
    }
    else
    {
        rotateScreen.style.display="none";
        displayContent.style.display="block";
    }
}