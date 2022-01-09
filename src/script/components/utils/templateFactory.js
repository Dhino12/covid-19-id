const templateFactory = (html, css) => {
    const template = document.createElement('template');
    template.innerHTML = `
        ${css}
        ${html}
    `;
    return template;
};

export default templateFactory;
