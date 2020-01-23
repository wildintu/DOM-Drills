document.addEventListener('DOMContentLoaded', function () {
    //create div element
    let div = document.createElement('div');
    div.className = "header-container";
    document.body.appendChild(div);
    //console.log(div.className);

    //create header elements with text and class name
    let h1 = document.createElement('h1');
    let h1txt = document.createTextNode('This is an h1');
    h1.className = "h1";
    h1.appendChild(h1txt);
    div.appendChild(h1);

    let h2 = document.createElement('h2');
    let h2txt = document.createTextNode('This is h2');
    h2.className = "h2";
    h2.appendChild(h2txt);
    div.appendChild(h2);

    let h3 = document.createElement('h3');
    let h3txt = document.createTextNode('This is h3');
    h3.className = "h3";
    h3.appendChild(h3txt);
    div.appendChild(h3);

    let h4 = document.createElement('h4');
    let h4txt = document.createTextNode('This is h4');
    h4.className = "h4";
    h4.appendChild(h4txt);
    div.appendChild(h4);

    let h5 = document.createElement('h5');
    let h5txt = document.createTextNode('This is h5');
    h5.className = "h5";
    h5.appendChild(h5txt);
    div.appendChild(h5);

    let h6 = document.createElement('h6')
    let h6txt = document.createTextNode('This is h6');
    h6.className = "h6";
    h6.appendChild(h6txt);
    div.appendChild(h6);

    //create an array of eight colors
    let color = ['blue', 'red', 'yellow', 'orange', 'gray', 'green', 'brown', 'black'];

    function getRandomColor() {
        let getRandomColor = color[Math.floor(Math.random() * color.length)];
        return getRandomColor;
    }

    //create an event and function where text headers change random colors when clicked
    h1.addEventListener('click', function () {
        let randomColor = getRandomColor();
        h1.style.color = randomColor;
    });

    h2.addEventListener('click', function () {
        let randomColor = getRandomColor();
        h2.style.color = randomColor;
    });

    h3.addEventListener('click', function () {
        let randomColor = getRandomColor();
        h3.style.color = randomColor;
    });

    h4.addEventListener('click', function () {
        let randomColor = getRandomColor();
        h4.style.color = randomColor;
    });

    h5.addEventListener('click', function () {
        let randomColor = getRandomColor();
        h5.style.color = randomColor;
    });

    h6.addEventListener('click', function () {
        let randomColor = getRandomColor();
        h6.style.color = randomColor;
    });

    //create a button to add new list item
    let button = document.createElement('button');
    let btnTxt = document.createTextNode('Click to add new list item');
    button.appendChild(btnTxt);
    div.appendChild(button);
    button.className = 'button';

    //create list element
    let ul = document.createElement('ul');
    div.appendChild(ul);

    //function that inserts list item and says text in increments
    let l = 1;
    function addToList() {
        let li = document.createElement('li');
        ul.appendChild(li);
        let liText = document.createTextNode(`This is list item ${(l)}`);
        li.appendChild(liText);
        l = (l + 1);

        //random color when list item clicked
        li.addEventListener("click", function () {
            let randomColor = getRandomColor();
            li.style.color = randomColor;
        });

        //remove when double clicked
        li.addEventListener("dblclick", function () {
        this.remove();
        });
    }
    button.addEventListener("click", addToList);
});