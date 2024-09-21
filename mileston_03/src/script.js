"use strict";
var _a, _b, _c, _d;
// Selecting elements
const toggleSkills = document.getElementById("toggle-skills");
const skills = document.getElementById("skills");
// Select the profile picture and file input elements
const resumeProfilePicture = document.getElementById("profilePicture");
const resumeProfilePictureInput = document.querySelector("input[type=file]");
try {
    if (profilePicture && profilePictureInput) {
        // Add click event listener to the profile picture
        profilePicture.addEventListener("click", () => {
            try {
                profilePictureInput.click();
            }
            catch (error) {
                console.error("Error when clicking the profile picture input: ", error);
            }
        });
        // Add change event listener to the file input
        profilePictureInput.addEventListener("change", (event) => {
            var _a;
            try {
                const file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = () => {
                        try {
                            if (profilePicture) {
                                profilePicture.src = reader.result;
                            }
                        }
                        catch (error) {
                            console.error("Error when setting the profile picture source: ", error);
                        }
                    };
                    reader.readAsDataURL(file);
                }
            }
            catch (error) {
                console.error("Error when reading the profile picture file: ", error);
            }
        });
    }
    else {
        throw new Error("Profile picture or input element is missing.");
    }
    // Function to add more fields for Education
    const educationList = document.getElementById("education-list");
    (_a = document.getElementById("add-education")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        try {
            const newEducationField = document.createElement("textarea");
            newEducationField.name = "education";
            newEducationField.rows = 2;
            newEducationField.placeholder = "Enter more education.";
            educationList === null || educationList === void 0 ? void 0 : educationList.appendChild(newEducationField);
        }
        catch (error) {
            console.error("Error when adding new education field: ", error);
        }
    });
    // Function to add more fields for Experience
    const experienceList = document.getElementById("experience-list");
    (_b = document.getElementById("add-experience")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
        try {
            const newExperienceField = document.createElement("textarea");
            newExperienceField.name = "experience";
            newExperienceField.rows = 2;
            newExperienceField.placeholder = "Enter more experience.";
            experienceList === null || experienceList === void 0 ? void 0 : experienceList.appendChild(newExperienceField);
        }
        catch (error) {
            console.error("Error when adding new experience field: ", error);
        }
    });
    // Function to add more fields for Skills
    const skillsList = document.getElementById("skills-list");
    (_c = document.getElementById("add-skills")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
        try {
            const newSkillsField = document.createElement("textarea");
            newSkillsField.name = "skills";
            newSkillsField.rows = 2;
            newSkillsField.placeholder = "Enter more skills.";
            skillsList === null || skillsList === void 0 ? void 0 : skillsList.appendChild(newSkillsField);
        }
        catch (error) {
            console.error("Error when adding new skills field: ", error);
        }
    });
    // Submit form and generate resume
    (_d = document.getElementById("resumeBuilder")) === null || _d === void 0 ? void 0 : _d.addEventListener("submit", function (event) {
        event.preventDefault();
        try {
            // Get the form values
            const resumeName = document.getElementById("userName");
            const resumeEmail = document.getElementById("email");
            const resumePhone = document.getElementById("phone");
            const resumeAddress = document.getElementById("address");
            const resumeAboutMe = document.getElementById("aboutMe");
            const resumeDOB = document.getElementById("dob");
            const resumeGender = document.getElementById("gender");
            const resumeNationality = document.getElementById("nationality");
            if (resumeName && resumeEmail && resumePhone && resumeAddress &&
                resumeAboutMe && resumeDOB && resumeGender && resumeNationality) {
                // Get the list of education, experience, and skills inputs
                const educationFields = document.querySelectorAll("textarea[name='education']");
                const educationListItems = Array.from(educationFields)
                    .map((field) => `<li>${field.value}</li>`)
                    .join("");
                const experienceFields = document.querySelectorAll("textarea[name='experience']");
                const experienceListItems = Array.from(experienceFields)
                    .map((field) => `<li>${field.value}</li>`)
                    .join("");
                const skillsFields = document.querySelectorAll("textarea[name='skills']");
                const skillsListItems = Array.from(skillsFields)
                    .map((field) => `<li>${field.value}</li>`)
                    .join("");
                // Get user-selected colors
                const selectedBgColor = document.getElementById("bgColor");
                const selectedHeadingColor = document.getElementById("headingColor");
                const selectedParagraphColor = document.getElementById("paragraphColor");
                const resumeOutput = document.getElementById("resumeOutput");
                if (resumeOutput && selectedBgColor && selectedHeadingColor && selectedParagraphColor) {
                    // Generate the resume HTML content
                    resumeOutput.innerHTML = `
            <div class="profile-container">
              <img src="${profilePicture === null || profilePicture === void 0 ? void 0 : profilePicture.src}" alt="Profile Picture" width="150" height="150">
              <h2>Resume</h2>
              <p><strong>Name:</strong> ${resumeName.value}</p>
              <p><strong>About Me:</strong> ${resumeAboutMe.value}</p>
            </div>
            <hr>
            <h3>Personal Details</h3>
            <p><strong>Date of Birth:</strong> ${resumeDOB.value}</p>
            <p><strong>Gender:</strong> ${resumeGender.value}</p>
            <p><strong>Nationality:</strong> ${resumeNationality.value}</p>
            <hr>
            <h3>Contact Information</h3>
            <p><strong>Email:</strong> ${resumeEmail.value}</p>
            <p><strong>Phone:</strong> ${resumePhone.value}</p>
            <p><strong>Address:</strong> ${resumeAddress.value}</p>
            <hr>
            <h3>Education</h3>
            <ul>${educationListItems}</ul>
            <hr>
            <h3>Experience</h3>
            <ul>${experienceListItems}</ul>
            <hr>
            <h3>Skills</h3>
            <ul>${skillsListItems}</ul>
          `;
                    // Apply the selected background, heading, and paragraph colors
                    resumeOutput.style.backgroundColor = selectedBgColor.value;
                    const headings = resumeOutput.querySelectorAll("h2, h3");
                    const paragraphs = resumeOutput.querySelectorAll("p");
                    headings.forEach((heading) => {
                        heading.style.color = selectedHeadingColor.value;
                    });
                    paragraphs.forEach((paragraph) => {
                        paragraph.style.color = selectedParagraphColor.value;
                    });
                    resumeOutput.classList.remove("hidden");
                    resumeOutput.scrollIntoView({ behavior: "smooth" });
                }
                else {
                    throw new Error("Resume output or color selection elements are missing.");
                }
            }
            else {
                throw new Error("One or more required input fields are missing.");
            }
        }
        catch (error) {
            console.error("Error while generating the resume: ", error);
        }
    });
}
catch (error) {
    console.error("Error initializing the resume builder script: ", error);
}
