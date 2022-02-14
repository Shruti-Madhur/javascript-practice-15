let count = 0;

const value = document.querySelector('#value');
const btns  = document.querySelectorAll('.btn');

btns.forEach( btn => {
    btn.addEventListener('click', e => {
        const classes = e.currentTarget.classList;
        if(classes.contains('decrease')){
            count--;
        }else if(classes.contains('increase')){
            count++;
        }else{
            count = 0;
        }

        value.style.color = count > 0 ? 'green' : count < 0 ? 'red' : 'black';
        value.textContent = count;
    })
});