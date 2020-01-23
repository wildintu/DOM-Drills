document.addEventListener('DOMContentLoaded', function () {
    let div = document.createElement('div');
    div.className = "header-container";
    let h1 = document.createTextNode('This is an h1');
    h1.className = "h1";
    let h2 = document.createTextNode('This is h2');
    h2.className = "h2";
    let h3 = document.createTextNode('This is h3');
    h3.className = "h3";
    let h4 = document.createTextNode('This is h4');
    h4.className = "h4";
    let h5 = document.createTextNode('This is h5');
    h5.className = "h5";
    let h6 = document.createTextNode('This is h6');
    h6.className = "h6";


    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(h5);
    div.appendChild(h6);
    document.body.appendChild(div);

})