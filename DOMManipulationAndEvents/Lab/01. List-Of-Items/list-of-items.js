function addItem() {
    let input = document.getElementById('newItemText');
    let text = input.value;

    if (!text) {
        return;
    }

    let newLiItem = document.createElement('li');
    newLiItem.textContent = text;

    let list = document.getElementById('items');
    list.appendChild(newLiItem);

    input.value = '';

}
