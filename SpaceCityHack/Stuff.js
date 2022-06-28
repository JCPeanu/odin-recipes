function setupGrid(size){
    const canvas = document.querySelector('.container')

    for (let i  = 0; i < size; i ++){
        for (let i  = 0; i < size; i ++){
            const grid = document.createElement('div');
            grid.textContent = '';
            grid.className = 'grids';
            canvas.appendChild(grid);
        }
    }   
}

window.onload = () => {
    setupGrid(16)
}