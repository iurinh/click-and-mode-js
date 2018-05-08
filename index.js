var html = document.querySelector('html');
var ball = document.querySelector('#ball');
var target = document.querySelector('#target');

/** Atribui posicao do mouse como centro do componente (Realizando deslocamento) */
function _mover(event){
    
    var head = document.querySelector('head');
    var style = document.querySelector('#root-style');
    
    var top = event.clientY + "px";
    var left = event.clientX + "px";

    var classRoot = ':root{'
        + '--top: calc(' + top + " - 1.5em);"
        + '--left: calc(' + left + " - 1.5em);"
    + '}';

    if(!style){
        style = document.createElement('style');
        style.setAttribute('id','root-style');
        style.innerHTML = classRoot;

        head.innerHTML = head.innerHTML + style.outerHTML;
    } else {
        style.innerHTML = classRoot;
    }

    console.log('Moveu!');
}

html.addEventListener('click', function(event){
    _mover(event);
})

html.click();