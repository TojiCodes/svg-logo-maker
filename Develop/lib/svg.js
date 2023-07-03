class SVG {
static generateLogo(color, shape, text) {
    const shapeMarkup = shape.render();
    const textMarkup = `<text x="50%" y="50%" fill="white" dominant-baseline="middle" text-anchor="middle" font-size="24" alignment-baseline="middle">${text}</text>`;

    const svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
        ${shapeMarkup}
        ${textMarkup}
        </svg>
    `;

    return svgContent;
}
}

module.exports = SVG;
