const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

class CLI {
  async run() {
    const { color, shape, text } = await inquirer.prompt([
      {
        type: "input",
        name: "color",
        message: "Enter a color for the logo:",
      },
      {
        type: "list",
        name: "shape",
        message: "Select a shape for the logo:",
        choices: ["Circle", "Triangle", "Square"],
      },
      {
        type: "input",
        name: "text",
        message: "Enter the text for the logo:",
      },
    ]);

    let logoShape;
    switch (shape) {
      case "Circle":
        logoShape = new Circle();
        break;
      case "Triangle":
        logoShape = new Triangle();
        break;
      case "Square":
        logoShape = new Square();
        break;
      default:
        console.error("Invalid shape");
        return;
    }

    logoShape.setColor(color);

    const logoSvg = SVG.generateLogo(color, logoShape, text);
    const filename = "logo.svg";

    try {
      await writeFile(filename, logoSvg);
      console.log(`Logo generated and saved as ${filename}`);
    } catch (error) {
      console.error("Error saving SVG file:", error);
    }
  }
}

module.exports = CLI;
