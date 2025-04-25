function solutionOfLastTask() {
    // слагам главния URL в променлива за нагледност
    let BASE_URL = 'http://localhost:3030/jsonstore/reservations/';

    // подготвям си всички променливи за елементите
    let loadBtn = document.getElementById('load-history');
    let addBtn = document.getElementById('add-reservation');
    let editBtn = document.getElementById('edit-reservation');
    let nameInput = document.getElementById('names');
    let daysInput = document.getElementById('days');
    let dateInput = document.getElementById('date');
    let listContainer = document.getElementById('list');

    let editId = null;
    // слагам си евент лисънъри на бутоните
    loadBtn.addEventListener('click', loadReservations);
    addBtn.addEventListener('click', addReservation);
    editBtn.addEventListener('click', editReservation);

    async function loadReservations() {
        listContainer.replaceChildren();

        try {
            let res = await fetch(BASE_URL);
            let data = await res.json();

            Object.values(data).forEach(createReservationElement);
        } catch (err) {
            console.error('Failed to load reservations:', err);
        }
    }

    function createReservationElement(reservation) {
        let container = document.createElement('div');
        container.className = 'container';

        let h2 = document.createElement('h2');
        h2.textContent = reservation.names;

        let h3Date = document.createElement('h3');
        h3Date.textContent = reservation.date;

        let h3Days = document.createElement('h3');
        h3Days.id = 'reservation_days';
        h3Days.textContent = reservation.days;

        let btnContainer = document.createElement('div');
        btnContainer.className = 'buttons-container';

        let changeBtn = document.createElement('button');
        changeBtn.className = 'change-btn';
        changeBtn.textContent = 'Change';
        changeBtn.addEventListener('click', () => handleChange(reservation, container));

        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => handleDelete(reservation._id));

        btnContainer.appendChild(changeBtn);
        btnContainer.appendChild(deleteBtn);

        container.appendChild(h2);
        container.appendChild(h3Date);
        container.appendChild(h3Days);
        container.appendChild(btnContainer);

        listContainer.appendChild(container);
    }

    async function addReservation() {
        let names = nameInput.value.trim();
        let days = daysInput.value.trim();
        let date = dateInput.value.trim();

        if (!names || !days || !date) return;

        let newReservation = { names, days, date };

        try {
            await fetch(BASE_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newReservation),
            });

            document.querySelector('form').reset();
            loadReservations();
        } catch (err) {
            console.error('Failed to add reservation:', err);
        }
    }

    function handleChange(reservation, container) {
        nameInput.value = reservation.names;
        daysInput.value = reservation.days;
        dateInput.value = reservation.date;

        editId = reservation._id;

        container.remove();

        addBtn.disabled = true;
        editBtn.disabled = false;
    }

    async function editReservation() {
        if (!editId) return;

        let names = nameInput.value.trim();
        let days = daysInput.value.trim();
        let date = dateInput.value.trim();

        if (!names || !days || !date) return;

        let updatedReservation = { names, days, date };

        try {
            await fetch(`${BASE_URL}${editId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedReservation),
            });

            document.querySelector('form').reset();
            loadReservations();
            addBtn.disabled = false;
            editBtn.disabled = true;
            editId = null;
        } catch (err) {
            console.error('Failed to edit reservation:', err);
        }
    }

    async function handleDelete(id) {
        try {
            await fetch(`${BASE_URL}${id}`, {
                method: 'DELETE',
            });
            loadReservations();
        } catch (err) {
            console.error('Failed to delete reservation:', err);
        }
    }

}

solutionOfLastTask();