const form = document.querySelector("form");
const elements = form.elements;


 

// méthode pour boucler sur une collection (ca c'est la version java =>  for(String str: strings))
for (const element of elements) { 
    const type = element.type;
    const name = element.name;
    const helpText = document.getElementById(`${name}` + "-helptext")
    

    if (type != "submit") {

        // Invalid event
        element.addEventListener('invalid',(event) => {
            event.preventDefault();

            element.classList.add("is-invalid");
            helpText.classList.add("text-danger");

            element.setAttribute("data-bs-toggle", "tooltip");
            let message = "Ce champ est obligatoire";
            element.setAttribute("data-bs-title", `${message}`);

            if (element.name == "date" && element.validity.rangeUnderflow) {

                message = 'Doit être égale ou supérieure à aujourd’hui';

            } else if (element.name == "tarif" && element.validity.rangeUnderflow) {

                message = 'Doit être positif';
            }
            const tooltip = bootstrap.Tooltip.getOrCreateInstance(element);
            

            tooltip.setContent({ '.tooltip-inner': message });
            
            const firstInvalidElement = document.querySelector(".is-invalid");
          
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

        // Submit event 
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            if (type != "submit" && type!= "button") {
                element.classList.remove("is-valid");
                helpText.classList.remove("text-success");
                form.reset();
            }
        
        // Toast - Success !
        const toastElem = document.querySelector('.toast');
        const toast = bootstrap.Toast.getOrCreateInstance(toastElem);
        toast.show();
        })
    }
}




    



