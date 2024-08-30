import { getChildren } from "./database.js"

const children = getChildren()

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" data-type="child" data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

document.addEventListener("click", (event) => {
    const clickedElement = event.target;

    // Check if the clicked element is a child list item
    if (clickedElement.tagName === "LI" && clickedElement.closest(".details__kids")) {
        const childId = parseInt(clickedElement.getAttribute("data-id"));
        const children = getChildren();
        const child = children.find(child => child.id === childId);

        if (child) {
            // Display the child's name and wish in an alert
            alert(`${child.name}'s wish is to ${child.wish}`);
        }
    }
});