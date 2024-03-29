// Usar o localstorage/sessionstorage pra salvar os valores do input de texto (que adiciona descrição) e o input de radio (que escolhe qual item vai receber a descrição)


const form = document.getElementById('description-form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission which would try to send data to the server

    const addDescription = document.getElementById('add-description');
    const descriptionValue = addDescription.value;

    // Get the selected item which will receive the description
    const selectedItem = document.querySelector('input[name="item-receive-description"]:checked');

    if (selectedItem) {
        const itemName = selectedItem.value;

        // Save description in sessionStorage with item name as key
        window.sessionStorage.setItem(itemName, descriptionValue);

        // Display the saved description
        const paragraph = document.createElement("p");
        paragraph.textContent = descriptionValue;
        document.body.appendChild(paragraph);

        // Reset the input field
        addDescription.value = '';
    } else {
        console.error('No item selected');
    }
});
