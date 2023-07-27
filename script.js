const dragItems = document.querySelectorAll('.drag-item');
let currentDragItem;
let correctOrderCount = 0;

function handleDragStart(e){
    console.log('dragstart');
    currentDragItem = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html',this.innerHTML);
}

function handleDragEnter(e){
    console.log('dragenter');
    if(currentDragItem != null && this !== currentDragItem){
        this.classList.add('drag-over');
    }
}

function handleDragOver(e){
    console.log('dragover');
    if(e.preventDefault()){
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function handleDragLeave(e){
    console.log('dragleave');
    this.classList.remove('drag-over');
}

function handleDrop(e){
    console.log('drop');
    e.stopPropagation();
    if(currentDragItem != null && this !== currentDragItem){
        currentDragItem.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
        updateCorrectOrderCount();
    }
}

function handleDragEnd(e){
    console.log('dragend');
    dragItems.forEach((item) => {
        item.classList.remove('drag-over');
    })
    if(correctOrderCount === dragItems.length){
        alert('win !!!');
    }
}

function updateCorrectOrderCount(){
    correctOrderCount = 0;
    let currentNum = 1;
    dragItems.forEach((item) => {
        let itemNum = parseInt(item.innerHTML);
        if(itemNum === currentNum){
            correctOrderCount++;
        }
        currentNum++;
    })
    document.getElementById('correct-order-count').innerHTML = correctOrderCount;
}

dragItems.forEach((item)=>{
    item.addEventListener('dragstart', handleDragStart, false);
    item.addEventListener('dragenter', handleDragEnter, false);
    item.addEventListener('dragover', handleDragOver, false);
    item.addEventListener('dragleave', handleDragLeave, false);
    item.addEventListener('drop', handleDrop, false);
    item.addEventListener('dragend', handleDragEnd, false);
});

updateCorrectOrderCount();