function Absalan(){


	function hasClass(element, cls) {
	    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
	}

	function El(selector) {
	  return document.querySelector(selector);
	}


}

var el = Absalan().El('test');

alert(hasClass(el, 'class1'));
alert(hasClass(el, 'class'));