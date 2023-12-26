/* clever function to add multiple "window.onloads" */
/* ########################################################################################################## */

function addLoadEvent(func) {    
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}


/* Accordion Used to open and close various elements throughout the pages */
/* ########################################################################################################## */

function accordion() {
$$('#menu a').each(function(el) { 
		el.addEvent('mouseenter',function(){
		p = el.innerHTML.toUpperCase();
		el.innerHTML = p;
		})
		
		el.addEvent('mouseleave',function(){
		p = el.innerHTML.toLowerCase();
		el.innerHTML = p;
		})
	
	})
	
	myStretch = document.getElementsByClassName('toggler');
	myStretcher = document.getElementsByClassName('accordion');
	
	// setup the accordion elements by clearing display styles	
	myStretcher.each(function(el){
		el.style.display = '';
	});
	
	
var ac = new Fx.Accordion(myStretch,myStretcher,
 
	{
	onActive: function(tog){
	tog.setStyle('cursor', 'pointer');
	},
	onBackground: function(tog){
	tog.setStyle('cursor', 'pointer');
	},
	alwaysHide: true,
	start : 'all-closed',
	opacity : true			
	});
	}

/*	create a "window.onload" function to call. add as many as necessary */

// Accordions Used Throughout The Site
addLoadEvent(accordion);


