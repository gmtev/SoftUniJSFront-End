function extract(content) {
    let pattern = /\((.+?)\)/g;

    let element = document.getElementById(content);
    let text = element.textContent;

    let match = pattern.exec(text);

    let result = [];

    while(match) {
        result.push(match[1]);

        match = pattern.exec(text);
    }

    return result.join('; ');
}