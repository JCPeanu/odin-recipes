const clear = document.querySelector('.Clear')
const canvas = document.querySelector('.canvas')
const grid = document.querySelector('.Grid')
const eraser = document.querySelector('.Eraser')
const rainbow = document.querySelector('.Rainbow')
const num = document.querySelector('.size')
const slider = document.querySelector('.slider')
let mode = 'Grid'

clear.addEventListener('click', reload)
grid.addEventListener('click', changeMode)
eraser.addEventListener('click', changeMode)
rainbow.addEventListener('click', changeMode)
grid.addEventListener('mouseover', expand)
eraser.addEventListener('mouseover', expand)
rainbow.addEventListener('mouseover', expand)
// slider.addEventListener('click', changeSize)
slider.addEventListener('mousemove', changeSize)

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function setupGrid(size){
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (let i  = 0; i < size; i ++){
        for (let i  = 0; i < size; i ++){
            const grid = document.createElement('div');
            grid.className = 'grids';
            grid.style.backgroundColor = 'white'
            grid.addEventListener('mouseover', changeColor)
            grid.addEventListener('mousedown', changeColor)
            canvas.appendChild(grid);
        }
    }   
}

function changeColor(e){
    if (e.type === 'mouseover' && !mouseDown) return
    if (mode === 'Grid'){
        this.style.backgroundColor = `rgb(0, 0, 0)`
        grid.classList.add('clicked')
        eraser.classList.remove('clicked')
        rainbow.classList.remove('clicked')
    }
    else if (mode === 'Eraser'){
        this.style.backgroundColor = `rgb(255, 255, 255)`
        eraser.classList.add('clicked')
        grid.classList.remove('clicked')
        rainbow.classList.remove('clicked')
    }
    else if (mode === 'Rainbow'){
        let first = Math.floor(Math.random() * 256);
        let second = Math.floor(Math.random() * 256);
        let third = Math.floor(Math.random() * 256);
        this.style.backgroundColor = `rgb(${first}, ${second}, ${third})`
        rainbow.classList.add('clicked')
        eraser.classList.remove('clicked')
        grid.classList.remove('clicked')
    }
}

function changeMode(e){
    mode = this.className
    if (mode === 'Grid'){
        grid.classList.add('clicked')
        eraser.classList.remove('clicked')
        rainbow.classList.remove('clicked')
    }
    else if (mode === 'Eraser'){
        eraser.classList.add('clicked')
        grid.classList.remove('clicked')
        rainbow.classList.remove('clicked')
    }
    else if (mode === "Rainbow"){
        rainbow.classList.add('clicked')
        eraser.classList.remove('clicked')
        grid.classList.remove('clicked')
    }
}

function expand(e){
    grid.style.transform = "none"
    eraser.style.transform = "none"
    rainbow.style.transform = "none"
    if (e.type === 'mouseover' && !this.classList.contains('clicked')){
        this.style.transform = `scale(1.1)`
    }
}

function reset(){
    canvas.innerHTML = ''
}

function reload(){
    reset()
    setupGrid(slider.value)
}

function changeSize(){
    num.textContent = `${slider.value}x${slider.value}`
    reload()
    console.log(num)
    console.log(slider.value)
}

window.onload = () => {
    setupGrid(slider.value)
    canvas.addEventListener('click', reload())
    // activateButton(DEFAULT_MODE)
  }