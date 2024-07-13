
const container = document.querySelector(".container");

function createDiv(size) {
    
    container.textContent = "";
    for (let row = 0; row < size; row++) {
    
        for (let column = 0; column < size; column++ ) {
            
            let div = document.createElement("div");
            div.classList.add("square");
            div.style.width = `calc(100% / ${size} )`;
            div.style.height = `calc(100% / ${size} )`;
            container.appendChild(div);
    
        }
    }   
}

function generateColor () {
    let r =  Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;

    
}

let size = 16;
createDiv(size);

const input = document.querySelector(".gridInput");
const button = document.querySelector(".button");
const paragraph = document.querySelector(".sizeResult");

button.addEventListener("click", () => {
    
    if (input.value > 100) {
        paragraph.textContent = "You can only set a maximum of 100 X 100 grid";
    
    }
    else {
        paragraph.textContent = "";
        size = input.value;
        createDiv(size);
    }
    

})

container.addEventListener('mouseover',  (e) => {
    let color = generateColor();

    let activeDiv = e.target;

    activeDiv.style.backgroundColor = color;
});