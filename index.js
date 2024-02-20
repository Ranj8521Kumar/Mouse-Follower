function changeSizeOfCircleOnMove(){
    var xScale=1;
    var yScale=1;

    var xPrev=0;
    var yPrev=0;

    window.addEventListener('mousemove', function(det){
        clearTimeout(timer);

        var xDiff=det.clientX-xPrev;
        var yDiff=det.clientY-yPrev;

        xScale=gsap.utils.clamp(0.8,1.2,xDiff);
        yScale=gsap.utils.clamp(0.8,1.2,yDiff);

        xPrev=det.clientX;
        yPrev=det.clientY;

        mouseFollower(xScale,yScale);

        var timer=setTimeout(function(){
            document.querySelector('.mini-circle').style.transform=`translate(${det.clientX}px,${det.clientY}px) scale(${1,1})`;
        },100);
    })
}


function mouseFollower(xScale,yScale){
    window.addEventListener('mousemove', function(det){
        document.querySelectorAll('.mini-circle')[0].style.transform=`translate(${det.clientX}px, ${det.clientY}px) scale(${xScale},${yScale})`;
    })
}

mouseFollower();
changeSizeOfCircleOnMove();