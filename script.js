const main = document.querySelector('.main');

const container = document.createElement('div')
container.className='container';
container.setAttribute('id','container');

const header = document.createElement('div');
header.className='header';
header.setAttribute('id','header');

const textheader =  document.createElement('h1');
textheader.className = 'textheader';
textheader.setAttribute('id','textheader');
textheader.textContent = 'Etch-a-Sketch';
const btnreset = document.createElement('button');
btnreset.setAttribute('id','btnreset');

var gridsize = 10;
btnreset.className = 'btnreset';
btnreset.textContent = 'Reset';
btnreset.addEventListener('click', () => {
    gridsize = prompt("Enter number of grid");
    insertgrid(gridsize);
    console.log(gridsize);
});



const randomcolor = document.createElement('button');
randomcolor.setAttribute('id','btnrandom');
randomcolor.className = 'btnrandom';
randomcolor.textContent = 'Random Color';
randomcolor.addEventListener('click', (e) => { mode = 'randomcolor'});




const pickcolor = document.createElement('input');
pickcolor.setAttribute('id','btnpickcolor');
pickcolor.setAttribute('type','color');
pickcolor.className = 'btnpickcolor';

pickcolor.addEventListener('input', (e) => {
    mode='colorpick';

    defaultcolor = e.target.value;

});



const gridcointainer = document.createElement('div');
gridcointainer.setAttribute('id','grid-container');
gridcointainer.className = 'grid-container';

const buttoncontainer = document.createElement('div');
buttoncontainer.setAttribute('id','button-container');
buttoncontainer.className = 'button-container';

var defaultcolor = 'black';
var mode='default';

main.appendChild(container);
container.append(header);
header.append(textheader);
container.append(gridcointainer);
container.append(buttoncontainer);
buttoncontainer.append(btnreset);
buttoncontainer.append(randomcolor);
buttoncontainer.append(pickcolor);
insertgrid(gridsize);

function insertgrid(size)
{
  clearcells();
    gridcointainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridcointainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for(let i=0;i< size * size ;i++){
        var gridbox= document.createElement('div');
        gridbox.className='gridbox';
        gridbox.addEventListener('mousedown', changecolor);
        gridbox.addEventListener('mouseover', changecolor);
        gridcointainer.append(gridbox);
    }

}
function clearcells(){
    while(gridcointainer.firstChild){
    gridcointainer.removeChild(gridcointainer.firstChild);
}
}

function changecolor(e) {
   
    
    if(mode==='randomcolor'){
        const randomr = Math.floor(Math.random() * 256);
        const randomg = Math.floor(Math.random() * 256);
        const randomb = Math.floor(Math.random() * 256);
        e.target.style.background = `rgb(${randomr},${randomg},${randomb})`;}
        else if (mode === 'colorpick'){
            e.target.style.background = defaultcolor;
        }
        else {
            e.target.style.background = defaultcolor;
        }
    }
  
           


