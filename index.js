let size = prompt("Enter yout preferred grid size:  ");

let colors = ["red", "green", "yellow", "blue", "aqua", "grey", "orange", "cyan", "teal", "brown"];

let arraylength = colors.length - 1;

function getRandomNumber (arraylength) {
    return Math.floor(Math.random() * arraylength);
}


const container = document.querySelector(".container");

for (let row = 0; row < size; row++) {
    
    for (let column = 0; column < size; column++ ) {
        
        let div = document.createElement("div");
        div.classList.add("square");
        div.style.width = `calc(100% / ${size} )`;
        div.style.height = `calc(100% / ${size} )`;
        container.appendChild(div);

    }
}   

const square = document.querySelector(".square");

container.addEventListener('mouseover',  (e) => {
    let index = getRandomNumber(arraylength);

    let activeDiv = e.target;
    console.log(e.target);
    console.log(e.type);

    console.log(index);

    activeDiv.style.backgroundColor = colors[index];
});