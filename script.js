function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

var el = document.getElementById('test');

alert(hasClass(el, 'class1'));
alert(hasClass(el, 'class'));
