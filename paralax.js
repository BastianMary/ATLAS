(function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#bg");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.0025}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.005}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }
})()

var nbclick = false;

function changerTaille() {
    if (nbclick==true){
        Mercure.style.width = 2 + '%';
        Venus.style.width = 3.2 + '%';
        Terre.style.width = 3.2 + '%';
        Mars.style.width = 2.5 + '%';
        Jupiter.style.width = 12 + '%';
        Grpsaturne.style.width = 19 + '%';
        Uranus.style.width = 4 + '%';
        Neptune.style.width = 4 + '%';
        [document.querySelector(".grpdiv").style.gap=30+"px"];
    }else{
        Mercure.style.width = 0.123 + '%';
        Venus.style.width = 0.123 + '%';
        Terre.style.width = 0.3177 + '%';
        Mars.style.width = 0.1765 + '%';
        Jupiter.style.width = 3.53 + '%';
        Grpsaturne.style.width = 6 + '%';
        Uranus.style.width = 1.27 + '%';
        Neptune.style.width = 1.235 + '%';
        [document.querySelector(".grpdiv").style.gap=6+"%"];
    }  
    nbclick=!nbclick
}

function tourner() {
    var element = document.getElementById("fleche");
    element.classList.toggle("clicked");
}