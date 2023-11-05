let Btn=document.getElementById("button-scroll");
let Scroll=document.getElementById("scroll-page");
let Main=document.getElementById("mainpage");
let Fake=document.getElementById("fak");
window.addEventListener('scroll', function(){
    if(window>500){

    }
    else{
        Main.style.visibility="hidden";
        Scroll.style.visibility="visible";
        // Main.style.transition="0.8s"

        if(window.scrollY>400){
            document.body.style.transition="0.5s"
            document.body.style.background="#F4CE14";
            Btn.style.background="white";
            Btn.style.color="black";
            Btn.style.border="none";
            Btn.style.transition="0.8s";
            document.body.style.transition="0.8s";
        }
        else{
            document.body.style.background="white";
            Btn.style.background="black";
            Btn.style.color="white";   
            Btn.style.hover.background="black";
        }
    
    }


})
