function editElement() {
    //     element.textContent = element.textContent.replace(match, replacer);
        const content = ref.textContent;
        const matcher = new RegExp(match, 'g');
        const edited = content.replace(matcher, replacer);
        ref.textContent = edited;
}