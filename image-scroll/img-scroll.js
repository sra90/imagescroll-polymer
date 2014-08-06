var firstElement = '.image-tumbs-holder .image-tumbs li:first-child',
	  nthImage = '.image-tumbs-holder .image-tumbs li:nth-child',
    ctr = 2,
    curWidth = 0,
    curSide = 4; //position of first side element currently

var scrolling = function(){
    
	//800 is the left position of the first element that is in the side(tilted)
	if((((curSide - 1)*260) - document.querySelector('body /deep/ .image-tumbs-holder').scrollLeft) < 800){
   
		document.querySelector('body /deep/ '+nthImage+'('+ curSide.toString() +') img').style.boxShadow = 'none';
		document.querySelector('body /deep/ '+nthImage+'('+ curSide.toString() +') img').style.width = 'auto';
		document.querySelector('body /deep/ '+nthImage+'('+ curSide.toString()+')').style.webkitTransform = 'none';
    document.querySelector('body /deep/ '+nthImage+'('+ curSide.toString()+')').style.mozTransform = 'none';
    document.querySelector('body /deep/ '+nthImage+'('+ curSide.toString()+')').style.msTransform = 'none';
    document.querySelector('body /deep/ '+nthImage+'('+ curSide.toString()+')').style.oTransform = 'none';
    document.querySelector('body /deep/ '+nthImage+'('+ curSide.toString()+')').style.transform = 'none';
		document.querySelector('body /deep/ '+nthImage+'('+ curSide.toString() +')').style.zIndex = '0';
		document.querySelector('body /deep/ '+nthImage+'('+ curSide.toString() +')').style.position = 'initial';
		document.querySelector('body /deep/ '+nthImage+'('+ (curSide+1).toString() +')').style.right = '20px';
    curSide++;

	}
	else{

    //body /deep/ is to get into shadow dom
    if((((curSide - 2)*260) - document.querySelector('body /deep/ .image-tumbs-holder').scrollLeft) > 800)
      curSide--;
    
		document.querySelector('body /deep/ '+nthImage+'('+ curSide.toString() +') img').style.boxShadow = '9px 4px 12px grey';
		document.querySelector('body /deep/ '+nthImage+'('+ curSide.toString() +') img').style.width = '210px';
  	document.querySelector('body /deep/ '+nthImage+'('+ curSide.toString() +')').style.webkitTransform = 'rotateY(48deg) skewY(10deg)';
  	document.querySelector('body /deep/ '+nthImage+'('+ curSide.toString() +')').style.mozTransform = 'rotateY(48deg) skewY(10deg)';
    document.querySelector('body /deep/ '+nthImage+'('+ curSide.toString() +')').style.msTransform = 'rotateY(48deg) skewY(10deg)';
    document.querySelector('body /deep/ '+nthImage+'('+ curSide.toString() +')').style.oTransform = 'rotateY(48deg) skewY(10deg)';
    document.querySelector('body /deep/ '+nthImage+'('+ curSide.toString() +')').style.transform = 'rotateY(48deg) skewY(10deg)';

		document.querySelector('body /deep/ '+nthImage+'('+ curSide.toString() +')').style.position = 'relative';
		document.querySelector('body /deep/ '+nthImage+'('+ curSide.toString() +')').style.top = '15px';
    document.querySelector('body /deep/ '+nthImage+'('+ curSide.toString() +')').style.zIndex = '5';
    document.querySelector('body /deep/ '+nthImage+'('+ curSide.toString() +')').style.right = '-40px';

		document.querySelector('body /deep/ '+nthImage+'('+ (curSide+1).toString() +') img').style.boxShadow = '9px 4px 12px grey';
		document.querySelector('body /deep/ '+nthImage+'('+ (curSide+1).toString() +') img').style.width = '210px';
		document.querySelector('body /deep/ '+nthImage+'('+ (curSide+1).toString() +')').style.webkitTransform = 'rotateY(48deg) skewY(10deg)';
    document.querySelector('body /deep/ '+nthImage+'('+ (curSide+1).toString() +')').style.mozTransform = 'rotateY(48deg) skewY(10deg)';
    document.querySelector('body /deep/ '+nthImage+'('+ (curSide+1).toString() +')').style.msTransform = 'rotateY(48deg) skewY(10deg)';
    document.querySelector('body /deep/ '+nthImage+'('+ (curSide+1).toString() +')').style.oTransform = 'rotateY(48deg) skewY(10deg)';
    document.querySelector('body /deep/ '+nthImage+'('+ (curSide+1).toString() +')').style.transform = 'rotateY(48deg) skewY(10deg)';
		document.querySelector('body /deep/ '+nthImage+'('+ (curSide+1).toString() +')').style.position = 'relative';
		document.querySelector('body /deep/ '+nthImage+'('+ (curSide+1).toString() +')').style.top = '15px';
		document.querySelector('body /deep/ '+nthImage+'('+ (curSide+1).toString() +')').style.right = '150px';
    document.querySelector('body /deep/ '+nthImage+'('+ (curSide+1).toString() +')').style.zIndex = '0';

	}

}

setTimeout(function(){
  
  document.querySelector("body /deep/ .image-tumbs-holder").onscroll = function() {
    
    scrolling();

  }

  do{
    
    //curWidth += parseInt($('body /deep/ '+nthImage+'(' + ctr.toString() +') img').css('width')); 
    curWidth += parseInt(document.querySelector('body /deep/ '+nthImage+'(' + ctr.toString() +') img').width); 
    ctr++;

  }while(curWidth < 790);

  curSide = ctr;
  ctr = 2;
  curWidth = 0;

  do{

    curWidth += parseInt(document.querySelector('body /deep/ '+nthImage+'(' + ctr.toString() +') img').width); 
    ctr++;

  }while(document.querySelector('body /deep/ '+nthImage+'(' + ctr.toString() +') img'));
   
  if(curWidth > 790){

	  scrolling();	

  }

},1000);


