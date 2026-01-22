document.getElementById("applicationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;

    // Clear previous errors
    document.querySelectorAll(".error").forEach(el => el.innerHTML = "");

    let studentName = document.getElementById("studentName").value.trim();
    let dob = document.getElementById("dob").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let classValue = document.getElementById("class").value;
    let parentName = document.getElementById("parentName").value.trim();
    let contact = document.getElementById("contact").value.trim();
    let address = document.getElementById("address").value.trim();

    if (studentName === "") {
        document.getElementById("nameError").innerHTML = "Student name is required";
        valid = false;
    }

    if (dob === "") {
        document.getElementById("dobError").innerHTML = "Date of birth is required";
        valid = false;
    }

    if (!gender) {
        document.getElementById("genderError").innerHTML = "Please select gender";
        valid = false;
    }

    if (classValue === "") {
        document.getElementById("classError").innerHTML = "Please select class";
        valid = false;
    }

    if (parentName === "") {
        document.getElementById("parentError").innerHTML = "Parent name is required";
        valid = false;
    }

    if (contact === "" || contact.length < 11) {
        document.getElementById("contactError").innerHTML = "Enter valid contact number";
        valid = false;
    }

    if (address === "") {
        document.getElementById("addressError").innerHTML = "Address is required";
        valid = false;
    }

    if (valid) {
        alert("Application Submitted Successfully!");
        document.getElementById("applicationForm").reset();
    }
});
