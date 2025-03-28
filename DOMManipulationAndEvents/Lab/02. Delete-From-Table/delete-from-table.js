function deleteByEmail() {
    let input = document.querySelector('[name="email"]');
    let pattern = input.value;

    if (!pattern) {
        return;
    }

    let rows = Array.from(document.querySelectorAll('tbody tr'));

    let deleted = false;

    for (let row of rows) {
        let emailColumn = row.children[1];
        let email = emailColumn.textContent;

        if (email.includes(pattern)) {
            row.remove();
            deleted = true;
        }
    }

    let output = document.getElementById('result');

    if (deleted) {
        input.value = '';
        output.textContent = 'Deleted.';
    } else {
        output.textContent = 'Not found.';
    }
}
