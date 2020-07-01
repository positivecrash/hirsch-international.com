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