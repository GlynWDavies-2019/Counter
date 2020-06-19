let count = 0;

const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', event => {
        const styles = event.currentTarget.classList;
        if(styles.contains('decrease')) {
            count--;
        } else if(styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        if(count > 0) {
            value.style.color = '#EF6461';
        }
        if(count < 0) {
            value.style.color = '#E4B363';
        }
        if(count === 0) {
            value.style.color = '#313638';
        }
        value.textContent = count;
    });
});