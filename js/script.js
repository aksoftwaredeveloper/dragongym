window.onload = innit;

function innit(){
	HideArticle();
	showArticle1();
}

function showArticle1() {

    HideArticle();
    i = "article1";
    showArticle();

}


function showArticle2() {
    HideArticle();
    i = "article2";
    showArticle();

}

function showArticle3() {
    HideArticle();
    i = "article3";
    showArticle();

}

function showArticle4() {
    HideArticle();
    i = "article4";
    showArticle();

}

function showArticle() {


    switch (i){

        case "article1":
            document.getElementById(i).style.display="block";
        break;
        case "article2":
            document.getElementById(i).style.display="block";
            break;
        case "article3":
            document.getElementById(i).style.display="block";
            break;
        case "article4":
            document.getElementById(i).style.display="block";
            break;

        default:
            alert("Click again or reload the page!!");

    }

}
function HideArticle(){

    document.getElementById("article1").style.display="none";
    document.getElementById("article2").style.display="none";
    document.getElementById("article3").style.display="none";
    document.getElementById("article4").style.display="none";

}

function PicShower(ImgSrc) {

    document.getElementById("ImgOpen").innerHTML = "<p><img class=\"CloseButton\" src=\"imgs/close-icon.png\" onclick=\"PicCloser();\" width=\"50px\" height=\"50px\"></p>\n" +
        "        <p><img class=\"bigPics\" src=\""+ImgSrc+"\" alt=\"big picture\"></p>";
    document.getElementById("ImgOpen").style.display="block";

}

function PicCloser() {

    document.getElementById("ImgOpen").style.display="none";

}
