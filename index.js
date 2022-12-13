const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


const form = document.querySelector("form");
const elements = form.elements;

// méthode pour boucler sur une collection
for (const element of elements) {  // la version java =>  for(String str: strings) 
    const type = element.type;
    const name = element.name;
    const helpText = document.getElementById(`${name}` + "-helptext")


    if (type != "submit") {

        // Invalid event
        element.addEventListener('invalid',(event) => {
            event.preventDefault();

            element.setAttribute("data-bs-toggle", "tooltip");
           

            if (element.validity.valueMissing) {
                element.setAttribute("data-bs-title", "Ce champ est obligatoire")

            } else if (element.name == "date" && element.validity.rangeUnderflow) {

                element.setAttribute("data-bs-title", "Doit être égale ou supérieure à aujourd’hui")

            } else if (element.name == "tarif" && element.validity.rangeUnderflow) {

                element.setAttribute("data-bs-title", " Doit être positif")
            }          
            // Adding invalid class
            element.classList.add("is-invalid");

            // Help text
            helpText.classList.add("text-danger");
            
            const firstInvalidElement = document.querySelector(".is-invalid");

            const tooltip = bootstrap.Tooltip.getOrCreateInstance(element);
            firstInvalidElement.focus();

        })

        // Change event
        element.addEventListener("change", (event) => {    
            if (element.checkValidity()) {
                const tooltip = bootstrap.Tooltip.getOrCreateInstance(element);
                tooltip.dispose();
                event.preventDefault();
                element.classList.remove("is-invalid");
                helpText.classList.remove("text-danger");
                element.classList.add("is-valid");
                helpText.classList.add("text-success");
                

    }
})



    }
    // Submit event 
    form.addEventListener("submit", (event) => {
        event.preventDefault();
    
        //Remove class & Form reset 
        element.classList.remove("is-invalid");
        helpText.classList.remove("text-success");
        form.reset();
    
        // Toast - Success !
        const toastElem = document.querySelector('.toast');
        const toast = bootstrap.Toast.getOrCreateInstance(toastElem);
        toast.show();
    
    
    })



}




    



