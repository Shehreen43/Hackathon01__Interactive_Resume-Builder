"use strict";
var _a, _b, _c, _d;
// script.ts
const toggleSkillsButton = document.getElementById('toggle-skills');
const skillsSection = document.getElementById('skills');
toggleSkillsButton === null || toggleSkillsButton === void 0 ? void 0 : toggleSkillsButton.addEventListener('click', () => {
    if ((skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.style.display) === 'none') {
        skillsSection.style.display = 'block';
        toggleSkillsButton.textContent = "hide";
    }
    else {
        skillsSection.style.display = 'none';
        toggleSkillsButton.textContent = "show";
    }
});
// Select the profile picture and file input elements
const profilePicture = document.getElementById("profilePicture");
const profilePictureInput = document.querySelector("input[type=file]");
// Add click event listener to the profile picture
profilePicture.addEventListener("click", () => {
    profilePictureInput.click();
});
// Add change event listener to the file input
profilePictureInput.addEventListener("change", (event) => {
    var _a;
    const file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            console.log(reader.result);
            if (reader.result) {
                profilePicture.src = reader.result;
            }
            else {
                console.error("Failed to load the image.");
            }
        };
        reader.readAsDataURL(file);
    }
    else {
        console.error("No file selected.");
    }
});
const resumeBgColor = document.getElementById("bgColor");
const headingColorPicker = document.getElementById("headingColor");
const paragraphColorPicker = document.getElementById("paragraphColor");
const resumeOutput = document.getElementById("resumeOutput");
resumeBgColor.addEventListener("input", function () {
    resumeOutput.style.backgroundColor = resumeBgColor.value;
});
headingColorPicker.addEventListener("input", function () {
    const headings = resumeOutput.querySelectorAll("h2, h3");
    headings.forEach((heading) => {
        heading.style.color = headingColorPicker.value;
    });
});
paragraphColorPicker.addEventListener("input", function () {
    const paragraphs = resumeOutput.querySelectorAll("p");
    const listItems = resumeOutput.querySelectorAll("li");
    paragraphs.forEach((paragraph) => {
        paragraph.style.color = paragraphColorPicker.value;
    });
    listItems.forEach((listItem) => {
        listItem.style.color = paragraphColorPicker.value;
    });
});
// Adding dynamic delete option for education, experience, and skills
function addDeleteOption(field) {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = "10px";
    deleteButton.addEventListener("click", () => {
        field.remove(); // Remove the field on delete
    });
    field.appendChild(deleteButton); // Add delete button next to the field
}
/////////////////////
const resumeForm = document.getElementById("resumeBuilder");
const educationList = document.getElementById("education-list");
const experienceList = document.getElementById("experience-list");
const skillsList = document.getElementById("skills-list");
// Function to add delete button and handle its functionality
function createDeleteButton(container) {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    // Add click event listener for deleting the field
    deleteButton.addEventListener("click", (e) => {
        e.preventDefault();
        container.remove();
    });
    return deleteButton;
}
// Function to validate form inputs
function validateField(field) {
    var _a;
    const errorMessage = (_a = field.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector('.error-message');
    if (field.value.trim() === "") {
        errorMessage.textContent = "Oops! This field is required. Please fill it in to continue.";
        return false;
    }
    else {
        errorMessage.textContent = ""; // Clear error message if field is filled
        return true;
    }
}
// Add dynamic Education field
(_a = document.getElementById("add-education")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    const newEducationContainer = document.createElement("div");
    const newEducationField = document.createElement("textarea");
    newEducationField.name = "education";
    newEducationField.rows = 2;
    newEducationField.placeholder = "Enter more education.";
    const errorSpan = document.createElement("span");
    errorSpan.className = "error-message";
    // Append textarea, error span, and delete button to container
    newEducationContainer.appendChild(newEducationField);
    newEducationContainer.appendChild(errorSpan);
    newEducationContainer.appendChild(createDeleteButton(newEducationContainer));
    educationList.appendChild(newEducationContainer);
});
// Add dynamic Experience field
(_b = document.getElementById("add-experience")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
    const newExperienceContainer = document.createElement("div");
    const newExperienceField = document.createElement("textarea");
    newExperienceField.name = "experience";
    newExperienceField.rows = 2;
    newExperienceField.placeholder = "Enter more experience.";
    const errorSpan = document.createElement("span");
    errorSpan.className = "error-message";
    // Append textarea, error span, and delete button to container
    newExperienceContainer.appendChild(newExperienceField);
    newExperienceContainer.appendChild(errorSpan);
    newExperienceContainer.appendChild(createDeleteButton(newExperienceContainer));
    experienceList.appendChild(newExperienceContainer);
});
// Add dynamic Skills field
(_c = document.getElementById("add-skills")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
    const newSkillsContainer = document.createElement("div");
    const newSkillsField = document.createElement("textarea");
    newSkillsField.name = "skills";
    newSkillsField.rows = 2;
    newSkillsField.placeholder = "Enter more skills.";
    const errorSpan = document.createElement("span");
    errorSpan.className = "error-message";
    // Append textarea, error span, and delete button to container
    newSkillsContainer.appendChild(newSkillsField);
    newSkillsContainer.appendChild(errorSpan);
    newSkillsContainer.appendChild(createDeleteButton(newSkillsContainer));
    skillsList.appendChild(newSkillsContainer);
});
// Prevent form submission if there are empty fields
resumeForm.addEventListener("submit", (event) => {
    const allFieldsValid = Array.from(resumeForm.querySelectorAll('input, textarea'))
        .map((field) => validateField(field))
        .every(Boolean);
    if (!allFieldsValid) {
        event.preventDefault(); // Prevent form submission if any field is invalid
        alert("Please fill in all the required fields.");
    }
});
(_d = document.getElementById("resumeBuilder")) === null || _d === void 0 ? void 0 : _d.addEventListener("submit", function (event) {
    event.preventDefault();
    const resumeName = document.getElementById("userName");
    const resumeEmail = document.getElementById("email");
    const resumePhone = document.getElementById("phone");
    const resumeAddress = document.getElementById("address");
    const resumeEducation = document.getElementById("education");
    const resumeExperience = document.getElementById("experience");
    const resumeSkills = document.getElementById("skills_exp");
    const resumeAboutMe = document.getElementById("aboutMe");
    const resumeDOB = document.getElementById("dob");
    const resumeGender = document.getElementById("gender");
    const resumeNationality = document.getElementById("nationality");
    const resumeBgColor = document.getElementById("bgColor");
    const headingColorPicker = document.getElementById("headingColor");
    const paragraphColorPicker = document.getElementById("paragraphColor");
    const resumeOutput = document.getElementById("resumeOutput");
    let hasErrors = false; // Flag to check if there are empty fields
    // Get all text areas (education, experience, skills)
    const educationFields = document.querySelectorAll("textarea[name='education']");
    const experienceFields = document.querySelectorAll("textarea[name='experience']");
    const skillsFields = document.querySelectorAll("textarea[name='skills']");
    // Function to validate each field and add error message if empty
    function validateFields(fields, fieldName) {
        fields.forEach((field) => {
            var _a;
            const textarea = field;
            const errorMessage = textarea.nextElementSibling;
            // Remove any previous error message
            if (errorMessage && errorMessage.classList.contains("error-message")) {
                errorMessage.remove();
            }
            // If the field is empty, display error and set hasErrors to true
            if (!textarea.value.trim()) {
                hasErrors = true;
                const error = document.createElement("p");
                error.classList.add("error-message");
                error.style.color = "red";
                error.textContent = "Oops! This field is required. Please fill it in to continue.";
                // Insert error message after the textarea
                (_a = textarea.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(error, textarea.nextSibling);
            }
        });
    }
    // Validate all fields
    validateFields(educationFields, "education");
    validateFields(experienceFields, "experience");
    validateFields(skillsFields, "skills");
    // Check if there are any errors before continuing
    if (hasErrors) {
        return; // Stop form submission if there are errors
    }
    const educationListItems = Array.from(educationFields).map((field) => `<li>${field.value}</li>`).join("");
    const experienceListItems = Array.from(experienceFields).map((field) => `<li>${field.value}</li>`).join("");
    const skillsListItems = Array.from(skillsFields).map((field) => `<li>${field.value}</li>`).join("");
    if (resumeName && resumeEmail && resumePhone && resumeAddress && resumeEducation && resumeExperience && resumeSkills && resumeAboutMe && resumeDOB && resumeGender && resumeNationality) {
        const name = resumeName.value;
        const aboutMe = resumeAboutMe.value;
        const dob = resumeDOB.value;
        const gender = resumeGender.value;
        const nationality = resumeNationality.value;
        const email = resumeEmail.value;
        const phone = resumePhone.value;
        const address = resumeAddress.value;
        const selectedBgColor = resumeBgColor.value;
        const selectedHeadingColor = headingColorPicker.value;
        const selectedParagraphColor = paragraphColorPicker.value;
        // Generate resume content
        if (resumeOutput) {
            resumeOutput.innerHTML = `

      <div class="profile-container">
      <h1 class="editable" contenteditable="false">Resume</h1>
        <img src="${profilePicture.src}" alt="Profile Picture" width="150" height="150"class="editable" contenteditable="false">
        <div>
       <h2><span class="editable" contenteditable="false">${name}</span></h2>
        <p><strong>About Me:</strong><span class="editable" contenteditable="false"> ${aboutMe}</span></p>
      </div>
      <hr>
      <h3>Personal Details</h3>
      <p><strong>Date of Birth:</strong> <span class="editable" contenteditable="false">${dob}</span></p>
      <p><strong>Gender:</strong> <span class="editable" contenteditable="false">${gender}</span></p>
      <p><strong>Nationality:</strong> <span class="editable" contenteditable="false">${nationality}</span></p>
      <p><strong>Address:</strong><span class="editable" contenteditable="false"> ${address}</span></p>
      <hr>
      <h3>Contact Information</h3>
      <p><strong>Email:</strong> <span class="editable" contenteditable="false">${email}</span></p>
      <p><strong>Phone:</strong><span class="editable" contenteditable="false"> ${phone}</span></p>
      <hr>
      <h3>Education</h3>
      <p><ul class="editable" contenteditable="false">${educationListItems}</ul></p>
      <hr>
      <h3>Experience</h3>
      <p><ul class="editable" contenteditable="false">${experienceListItems}</ul></p>
      <hr>
      <h3>Skills</h3>
      <p><ul class="editable" contenteditable="false">${skillsListItems}</ul></p>

      <button id="editButton">Edit</button>
      </div>
    `;
            // Apply selected styles
            resumeOutput.style.backgroundColor = selectedBgColor;
            const headings = resumeOutput.querySelectorAll("h2, h3");
            const paragraphs = resumeOutput.querySelectorAll("p");
            const listItems = resumeOutput.querySelectorAll("li");
            const editButton = document.getElementById("editButton");
            const editableSections = document.querySelectorAll(".editable");
            // Variable to track whether editing is enabled
            let isEditing = false;
            // Function to enable editing mode
            function toggleEditMode() {
                if (isEditing) {
                    // Disable editing mode
                    editableSections.forEach((section) => {
                        section.setAttribute("contenteditable", "false");
                        section.classList.remove("editing");
                    });
                    editButton.textContent = "Edit";
                }
                else {
                    // Enable editing mode
                    editableSections.forEach((section) => {
                        section.setAttribute("contenteditable", "true");
                        section.classList.add("editing");
                    });
                    editButton.textContent = "Save";
                }
                isEditing = !isEditing;
            }
            // Listen for clicks on the edit button
            editButton.addEventListener("click", toggleEditMode);
            // Save changes on blur (when the user clicks outside of the edited field)
            editableSections.forEach((section) => {
                section.addEventListener("blur", (event) => {
                    const target = event.target;
                    console.log("New value:", target.textContent); // Save or send data if needed
                });
            });
            headings.forEach((heading) => {
                heading.style.color = selectedHeadingColor;
            });
            paragraphs.forEach((paragraph) => {
                paragraph.style.color = selectedParagraphColor;
            });
            listItems.forEach((item) => {
                item.style.color = selectedParagraphColor;
            });
            const intervalId = setInterval(() => {
                alert("Resume generated successfully!");
                clearInterval(intervalId); // Stops the interval after the first alert
            }, 1000);
            resumeOutput.classList.remove("hidden");
            resumeOutput.scrollIntoView({ behavior: "smooth" });
        }
        else if (!resumeName.value || !resumeEmail.value || !resumePhone.value || !resumeAddress.value || !resumeEducation.value || !resumeExperience.value || !resumeSkills.value || !resumeAboutMe.value || !resumeDOB.value || !resumeGender.value || !resumeNationality.value) {
            alert("Please fill all the fields");
            return;
        }
    }
});
//
function generateUniqueURL(username) {
    const uniqueString = Date.now().toString(36) + Math.random().toString(36);
    return `${username}.${uniqueString}.vercel.app/resume`;
}
generateUniqueURL(document.getElementById("userName").value);
// const downloadResume = document.getElementById("downloadButton");
// downloadResume?.addEventListener("click", () => {
//   const resumeOutput = document.getElementById("resumeOutput");
//   const resumeHTML = resumeOutput?.innerHTML || "";
//   const blob = new Blob([resumeHTML], { type: "text/html" });
//   const url = URL.createObjectURL(blob);
//   const uniqueURL = generateUniqueURL((document.getElementById("userName") as HTMLInputElement).value);
//   const link = document.createElement("a");
//   link.href = url;
//   link.download = `${uniqueURL}.html`;
//   link.click();
//   URL.revokeObjectURL(url);
// });
const downloadbtn = document.getElementById("downloadButton");
downloadbtn === null || downloadbtn === void 0 ? void 0 : downloadbtn.addEventListener("click", () => {
    const resumeOutput = document.getElementById("resumeOutput");
    const resumeHTML = (resumeOutput === null || resumeOutput === void 0 ? void 0 : resumeOutput.innerHTML) || "";
    const blob = new Blob([resumeHTML], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "resume.html";
    a.click();
    URL.revokeObjectURL(url);
});
const shareButton = document.getElementById('shareButton');
shareButton.addEventListener("click", () => {
    const username = document.getElementById("userName").value;
    const uniqueURL = generateUniqueURL(username);
    // Copy the URL to clipboard
    navigator.clipboard.writeText(uniqueURL).then(() => {
        // Provide feedback to the user
        shareButton.textContent = "URL Copied!";
        // Reset the button text after a short delay
        setTimeout(() => {
            shareButton.textContent = "Share Resume";
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
        shareButton.textContent = "Failed to copy URL";
    });
});
