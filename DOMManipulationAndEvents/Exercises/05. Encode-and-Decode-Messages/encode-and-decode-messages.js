document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let [encodeBox, decodeBox] = Array.from(document.querySelectorAll("textarea"));
    const [encodeBtn, decodeBtn] = Array.from(document.querySelectorAll("button"));

    encodeBtn.addEventListener("click", encodeMessage);
    decodeBtn.addEventListener("click", decodeMessage);

    function encodeMessage() {
        let current = encodeBox.value;
        let encoded = "";
        for (let char of current) {
            encoded += String.fromCharCode(char.charCodeAt(0) + 1);
        };

        decodeBox.value = encoded;
        encodeBox.value = "";
    };

    function decodeMessage() {
        let current = decodeBox.value;
        let decoded = "";

        for (let char of current) {
            decoded += String.fromCharCode(char.charCodeAt(0) - 1);
        };

        decodeBox.value = decoded;
    };
}