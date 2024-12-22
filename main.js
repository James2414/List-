// seleccionar lo elementos  


const input = document.querySelector('input');
const addBtn  = document.querySelector('.btn-add')
const ul = document.querySelector('ul');
const empty = document.querySelector('.empty');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const text = input.value.trim(); // Asegúrate de eliminar espacios en blanco al inicio y final
    if (text !== '') { // Cambia la condición para verificar si no está vacío
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;
    
        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);

        input.value = ''; // Limpia el campo de entrada
        empty.style.display = 'none'; // Oculta el mensaje "vacío"
    }
});


function addDeleteBtn() {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.className = 'btn-delete';

    deleteBtn.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);
    });

    return deleteBtn; // Asegúrate de retornar el botón creado
}

 