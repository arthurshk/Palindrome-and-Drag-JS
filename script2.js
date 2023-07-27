function isPalindrome(str) {
    const len = Math.floor(str.length / 2);
    for (let i = 0; i < len; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
}

const inputElem = document.getElementById('input');
const checkBtnElem = document.getElementById('checkBtn');
const resultElem = document.getElementById('result');

checkBtnElem.addEventListener('click', () => {
    const inputVal = inputElem.value.trim().toLowerCase();
    const isPalin = isPalindrome(inputVal);
    resultElem.textContent = isPalin ? 'Yes, it is a palindrome!' : 'No, it is not a palindrome.';
});