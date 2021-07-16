const square = document.createElement('div');
document.body.appendChild(square);
let grow = true;
let size = 100;
square.style.width = size + 'px';
square.style.height = size + 'px';
square.style.backgroundColor = 'salmon';

window.addEventListener('scroll', function(){

    if(size >=window.innerWidth / 2){
        grow = !grow
    }
    else if(size <=0){
        grow = true;
    }
if(grow == true){
    size += 5
    square.style.width = size + 'px';
    square.style.height = size + 'px';

}
else{
    size -= 5
    square.style.width = size + 'px';
    square.style.height = size + 'px';
}
})