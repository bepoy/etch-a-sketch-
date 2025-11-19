let parentElem = document.querySelector('.container');
let submit = document.getElementById('submit');
let input = document.getElementById('size');
let gridSize = 16**2;
const root = document.documentElement;
let label = document.getElementById('label');
let clear = document.getElementById('clear');





function createGrid(){
for(let i=0; i<gridSize; i++){
    let newDiv = document.createElement("div");
    newDiv.className = "square";

    parentElem.appendChild(newDiv);
    let squares = document.querySelector('.square');
    console.log(gridSize);    
    root.style.setProperty('--square-size', `${Math.sqrt(gridSize)}` );
   
}
 changeColor();
}
createGrid();

function changeGrid(){

    if(input.value > 100 || input.value < 16){
        label.innerText = "Please enter a number between 16 and 100";
        return;
    }

    
    parentElem.innerHTML = '';
    gridSize = (input.value)**2;
    label.innerText = "Enter grid size(16-100)";
    createGrid();

}
       
submit.addEventListener('click', changeGrid );


function changeColor(){
const boxes = document.querySelectorAll('.square');
boxes.forEach(box => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = `#${randomColor}`;
    })
});
}

clear.addEventListener('click', changeGrid);