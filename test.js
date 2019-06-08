document.addEventListener("DOMContentLoaded",function(){
	var x= document.querySelectorAll('ul li.link-item a.test');
	var page=document.querySelectorAll('.page');
	sumx=x.length;
	var current=0;
	x[current].classList.add('active');
	page[current].classList.add('show');
	var next=document.querySelector('.next');
	var prev=document.querySelector('.previous');
	prev.style.opacity=0;
	var nutnao=function(btnnao){
		current=(btnnao=="prev")?((current>0)?current-1:prev.style.opacity=1):((current<sumx-1)?current+1:2);
		for(var i=0;i<sumx;i++){
			x[i].classList.remove('active');
			page[i].classList.remove('show');
		}
		if(current<sumx && current>=0){
		x[current].classList.add('active');
		page[current].classList.add('show');
		}
		(current==sumx-1)?next.innerHTML="Done":next.innerHTML="Next";
		(current>0 && current<=sumx-1)?prev.style.opacity=1:prev.style.opacity=0;
	}
	var nextPage=function(){nutnao("next"); }
	var prevPage=function(){nutnao("prev");}
	next.addEventListener('click',nextPage);
	prev.addEventListener('click',prevPage);

	// next.addEventListener('click',function(){
	// 	current<sumx-1?current++:next.innerHTML="Next";
	// 		current>0?prev.style.opacity=1:prev.style.opacity=0;
	// 	for(var i=0;i<sumx;i++){
	// 		x[i].classList.remove('active');
	// 		page[i].classList.remove('show');
	// 	}
	// 	x[current].classList.add('active');
	// 	page[current].classList.add('show');
	// 	current===2?next.innerHTML="done":next.innerHTML="Next";
	// })
	// prev.addEventListener('click',function(){
	// 	current>0?current--:prev.style.opacity=1;
	// 	for(var i=0;i<sumx;i++){
	// 		x[i].classList.remove('active');
	// 		page[i].classList.remove('show');
	// 	}
	// 	x[current].classList.add('active');
	// 	page[current].classList.add('show');
	// 	current===0?prev.style.opacity=0:next.innerHTML="Next";
	// })
},false)