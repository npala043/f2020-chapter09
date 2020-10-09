/* code goes here */
document.addEventListener("DOMContentLoaded", function () {
    const cssSelector = "input[type=text],input[type=password]";
    const fields = document.querySelectorAll(cssSelector);

    for (let field of fields) {
        field.addEventListener("focus", setBackground);
        field.addEventListener("blur", setBackground);
    }
    // when user submits form, check for empty fields
    document.querySelector('#sampleForm').
        addEventListener('submit', checkForEmptyFields);
    // ensures form fields are not empty
    function checkForEmptyFields(e) {
        // loop thru the input elements looking for empty values
        const errorList = [];
        for (let field of fields) {
            if (field.value == null || field.value == "") {
                // since a field is empty prevent the form submission
                e.preventDefault();
                errorList.push(field);
            }
        }

        // hide the error message element
        const errorArea = document.getElementById("errors");
        errorArea.className = "hidden";

        // now display the error message if any
        let msg = "The following fields can't be empty: ";
        if (errorList.length > 0) {
            for (let errorField of errorList) {
                msg += errorField.id + ", ";
            }
            alert(msg);
        }

        errorArea.innerHTML = "<p>" + msg + "</p>";
        errorArea.className = "visible";
    }
});
//test
function setBackground(e) {
    if (e.type == "focus") {
        e.target.style.backgroundColor = "#FFE393";
    }
    else if (e.type == "blur") {
        e.target.style.backgroundColor = "white";
    }
}

