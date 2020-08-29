window.addEventListener('load', function(){
    // animateScroll('.animatedAppear');

    document.querySelectorAll('.animatedAppear').forEach(item => {
        animate(item);
        // console.log(item);
    });

}, false);