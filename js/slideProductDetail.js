document.addEventListener("DOMContentLoaded",function(){
const nextP =document.querySelector('button.next');
	const prevP =document.querySelector('button.previous');
	const block_same_product=document.querySelector('.list_product');
	const itemList=document.querySelectorAll('.item');

	// get style cua block_same_product
	const style=getComputedStyle(block_same_product);
	// get gia tri thuoc tinh cua tranform
	const transX= new WebKitCSSMatrix(style.webkitTransform);
	let  buttonClick=function(btn){
		console.log("click chưa")
		let widthSlide=1170;
		let numberItem=itemList.length;
		let numberSlide=Math.round(numberItem/5);

		transX.e=(btn==="nextP")?(transX.e-=widthSlide):(transX.e+=widthSlide);
		// neu do dai ===1170 khong dc prev
		(transX.e===widthSlide)?transX.e=0:transX.e;
		// tinh so luong slides
		(transX.e<=numberSlide*(-widthSlide))?transX.e=-(numberSlide-1)*widthSlide:transX.e;
		block_same_product.style.webkitTransform="translateX("+transX.e+"px)";
	}

	nextSlide=function(){
		buttonClick('nextP');
	}
	prevSlide=function(){
		buttonClick('prevP')
	}
	nextP.addEventListener('click',nextSlide);
	prevP.addEventListener('click',prevSlide);

},true)
	