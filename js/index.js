var menu = document.getElementById("menu-toggle")
var navbar = document.getElementById("navbar")
var myFoto= document.getElementById("myFoto")

navbar.style.right = "-250px";


menu.onclick = function(){
	if(navbar.style.right == "-250px"){
		navbar.style.right = "0";	
	}
	else{
			navbar.style.right = "-250px";
		}
}



let backToTop = document.getElementById("back-to-top");

window.onscroll = function(){
	scrollFunction();
}

function scrollFunction(){
	if (document.documentElement.scrollTop > 20){
		backToTop.style.visibility = "visible";
	} else {
		backToTop.style.visibility = "hidden";
	}
}

backToTop.onclick = function() {
	document.documentElement.scrollTop = 0;
}


