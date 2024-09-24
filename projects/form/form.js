let submitBtn = document.querySelector('.btn');
let firstName = document.querySelector('#firstName');
let secondName = document.querySelector('#secondName');
let result = document.querySelector('.result');
let clickCount = 0;

submitBtn.addEventListener('click', function() {
    clickCount++;
    
    if (firstName.value && secondName.value) {
        result.textContent = `Здравствуйте, ${firstName.value} ${secondName.value}`;
    } else {
        result.textContent = `Поля пустые!`;
    }
    
    if (clickCount === 2) {
        firstName.value = '';
        secondName.value = '';
        result.textContent = '';
        clickCount = 0;
    }
});