function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', onHover);
    let output = document.getElementById('result');

    function onHover(e) {
        let box = e.target;
        let offset = Math.floor(e.offsetX / box.clientWidth * 100);
        output.textContent = `${offset}%`;
    }
}
