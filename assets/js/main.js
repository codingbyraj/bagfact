var bagImg;
var currentImg;
var elements = document.getElementsByClassName("prod_imgs");
var prod = document.getElementsByClassName("prod-cont");
var desc = document.getElementsByClassName("description");
var close = document.getElementsByClassName("close");
//describtion variable show on collection pages
var gen = document.getElementsByClassName("gen");
var fea = document.getElementsByClassName("fea");
var dim = document.getElementsByClassName("dim");
for (let i = 0; i < gen.length; i++) {
	gen[i].addEventListener("click", genData);
}
for (let i = 0; i < fea.length; i++) {
	fea[i].addEventListener("click", feaData);
}
for (let i = 0; i < dim.length; i++) {
	dim[i].addEventListener("click", dimData);
}

function genData(e) {
	var genclass = e.srcElement.getAttribute('class');
	var genpar = e.srcElement.parentElement;
	var tab = genpar.getElementsByTagName("table");
	tab[0].style.display = "block";
	tab[1].style.display = "none";
	tab[2].style.display = "none";
	var genclassArr = genclass.split(" ");
	var genNo = genclassArr[1];
}

function dimData(e) {
	var genclass = e.srcElement.getAttribute('class');
	var genpar = e.srcElement.parentElement;
	var tab = genpar.getElementsByTagName("table");
	tab[0].style.display = "none";
	tab[1].style.display = "block";
	tab[2].style.display = "none";
	var genclassArr = genclass.split(" ");
	var genNo = genclassArr[1];
}

function feaData(e) {
	var genclass = e.srcElement.getAttribute('class');
	var genpar = e.srcElement.parentElement;
	var tab = genpar.getElementsByTagName("table");
	tab[0].style.display = "none";
	tab[1].style.display = "none";
	tab[2].style.display = "block";
	var genclassArr = genclass.split(" ");
	var genNo = genclassArr[1];
}
//end describtion on collection page
for (let i = 0; i < close.length; i++) {
	close[i].addEventListener("click", hideDesc);
}
for (let i = 0; i < prod.length; i++) {
	prod[i].addEventListener("click", pordDesciption);
}
jQuery(document).ready(function () {
	$(".description").prependTo($("body"));
});
$(document).ready(function () {
	$('.simpleLens-big-image').simpleLens({
		loading_image: '../images/loading.gif'
	});
});
/**/
/**/
for (let i = 0; i < elements.length; i++) {
	elements[i].addEventListener("click", prodImgsClick);
	elements[i].addEventListener("mouseover", prodImgsMouseIn);
	elements[i].addEventListener("mouseout", prodImgsMouseOut);
}

function prodImgsMouseIn(e) {
	var classes = e.srcElement.getAttribute("class");
	var allClasses = classes.split(" ");
	bagImg = document.getElementById(allClasses[1]);
	currentImg = bagImg.src;
	bagImg.src = e.srcElement.getAttribute("src");
	//    console.log("previous sibling = ", bagImg.previousSibling);
}

function prodImgsMouseOut(e) {
	bagImg.src = currentImg;
}

function prodImgsClick(e) {
	bagImg.src = e.srcElement.getAttribute("src");
	currentImg = bagImg.src;
	bagImg.previousSibling.parentElement.attributes[1].value = bagImg.src;
}

function pordDesciption(e) {
	var productElement = e.srcElement.parentElement;
	for (;;) {
		if (productElement.className != "product") {
			productElement = productElement.parentElement;
		}
		else {
			break;
		}
	}
	productElement = productElement.parentElement;
	var classes = productElement.className;
	var classesArr = classes.split(" ");
	var bagNo = classesArr[1];
	var bag = "";
	for (let i = 3; i < bagNo.length; i++) {
		bag += bagNo[i];
	}
	var classes = document.getElementsByClassName("desc" + bag);
	var descNo = classes[0].classList[2];
	var descclass = document.getElementsByClassName(descNo);
	descclass[0].style.display = "block";
}

function hideDesc(e) {
	var el = e.srcElement.parentElement;
	var newel = el.parentElement.parentElement;
	newel.style.display = "none";
}
/* active class apply */
var tabButtons = document.getElementsByClassName("buttons");
for (let i = 0; i < tabButtons.length; i++) {
	tabButtons[i].addEventListener("click", activeClass);
}

function activeClass(e) {
	let tabs = e.srcElement.parentElement.children;
	console.log("siblings = ", tabs);
	for (let j = 0; j < 3; j++) {
		console.log("\n" + tabs[j].className);
		let classes = tabs[j].className;
		if (classes.length == 3) {
			tabs[j].classList.add(" abhishke");
		}
	}
	e.srcElement.className += " active";
}