//-----------------------------------------дз 9------------------------------------------------------------------------------

let input = document.querySelector('.todolist__input input');
let list = document.querySelector('.todolist__list');

input.addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        if (input.value === '') return;
        editCreateElements(input.value);
        input.value = '';
    }
});

const editCreateElements = function(value) {
    let listFlex = document.createElement('div');

    listFlex.className = 'list__flex';
    list.appendChild(listFlex);

    let listP = document.createElement('p');
    let btn = document.createElement('div');

    listP.className = 'list__item';
    listP.innerHTML = input.value;
    listFlex.appendChild(listP);

    btn.className = 'list__btn';
    btn.innerHTML = '';
    listFlex.appendChild(btn);

    listP.addEventListener('click', function(){
        listP.innerHTML = prompt();
        listP.appendChild(listP);
    });

    btn.addEventListener('click', function(){
        listP.classList.toggle('list__item-active');
    });

    btn.addEventListener('click', function(){
        btn.classList.toggle('list__btn-active');
    });

    let listDel = document.querySelector('.todolist__list-delete');

    listDel.addEventListener('click', function() {
        list.remove(listFlex);
    })

}