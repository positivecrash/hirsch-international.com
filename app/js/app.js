window.addEventListener('load', function(){

    document.querySelectorAll('.animatedAppear').forEach(item => {
        animate(item);
    });

    document.querySelectorAll('.animatedAppearUp').forEach(item => {
        animate(item);
    });

}, false);