window.addEventListener('load', function(){

	var menubtn = document.querySelector('#nav-mobile_toggle'),
		popup = document.querySelector('#nav-mobile'),
		closebtn = document.querySelector('#nav-mobile--close'),
		class_open = 'open';



	function toggle(element){

		if ( element ){
	
			element.addEventListener('click', function(event) {

				event.preventDefault();
				event.stopPropagation();

				if (popup.classList) { 
					popup.classList.toggle(class_open);
				}

			});

		}	

	}


	

	if( menubtn ){
		toggle(menubtn);
	}


	if( closebtn ){
		toggle(closebtn);
	}
	

}, false);
function Tabs() {
  var bindAll = function() {
    var menuElements = document.querySelectorAll('[data-tab]');
    console.log(menuElements.length);
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].addEventListener('click', change, false);
    }
  }

  var clear = function() {
    var menuElements = document.querySelectorAll('[data-tab]');
    for(var i = 0; i < menuElements.length ; i++) {
      menuElements[i].classList.remove('active');
      var id = menuElements[i].getAttribute('data-tab');
      document.getElementById(id).classList.remove('active');
    }
  }

  var change = function(e) {
    clear();
    e.target.classList.add('active');
    var id = e.currentTarget.getAttribute('data-tab');
    document.getElementById(id).classList.add('active');
  }

  bindAll();
}

window.addEventListener('load', function(){
  var connectTabs = new Tabs();
}, false);