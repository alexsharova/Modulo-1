let btn = document.getElementById('btn');
btn.addEventListener('click', save);

function save() {
    if (validateform()) {
        console.log(inputList(0), value);
        //saveStorage();
    }
}