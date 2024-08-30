import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}

document.addEventListener("click", (event) => {
    const clickedElement = event.target

    // Check if the clicked element is a celebrity list item
    if (clickedElement.tagName === "LI" && clickedElement.closest("#celebrityListContainer")) {  //checks if it is an li and going through the dom tree finds the id of celebrityListContainer
        const celebrityId = parseInt(clickedElement.getAttribute("data-id")) //uses the data attribute to get the id and turns it to a number
        const celebrities = getCelebrities() //  sets new variable to getCelebrities function
        const celebrity = celebrities.find(celeb => celeb.id === celebrityId) // goes to celebrities array and gets a single(celeb) and gets the id of the current object being tested and finds if it equals the id we want

        if (celebrity) { // using what we just did
            // Display the celebrity's name and sport in an alert
            alert(`${celebrity.name} is a ${celebrity.sport} star`) // allows us to use celebrity and access the celebrity objects
        }
    }
})