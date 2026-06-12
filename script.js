document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todoInput');
    const addBtn = document.getElementById('addBtn');
    const todoList = document.getElementById('todoList');

    function addTask() {
        const text = input.value.trim();
        if (text === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${text}</span>
            <button class="delete-btn">Eliminar</button>
        `;

        // Marcar como completado
        li.querySelector('span').addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Eliminar tarea
        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
        });

        todoList.appendChild(li);
        input.value = '';
        input.focus();
    }

    addBtn.addEventListener('click', addTask);

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
