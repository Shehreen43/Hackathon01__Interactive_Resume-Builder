"use strict";
var _a;
// script.ts
const toggleSkillsButton = document.getElementById('toggle-skills');
const skillsSection = document.getElementById('skills');
toggleSkillsButton === null || toggleSkillsButton === void 0 ? void 0 : toggleSkillsButton.addEventListener('click', () => {
    if ((skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.style.display) === 'none') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
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
    paragraphs.forEach((paragraph) => {
        paragraph.style.color = paragraphColorPicker.value;
    });
});
(_a = document.getElementById("resumeBuilder")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a, _b, _c;
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
    // Function to add more fields for Education
    const educationList = document.getElementById("education-list");
    (_a = document.getElementById("add-education")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        const newEducationField = document.createElement("textarea");
        newEducationField.name = "education";
        newEducationField.rows = 2;
        newEducationField.placeholder = "Enter more education.";
        educationList === null || educationList === void 0 ? void 0 : educationList.appendChild(newEducationField);
    });
    // Function to add more fields for Experience
    const experienceList = document.getElementById("experience-list");
    (_b = document.getElementById("add-experience")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
        const newExperienceField = document.createElement("textarea");
        newExperienceField.name = "experience";
        newExperienceField.rows = 2;
        newExperienceField.placeholder = "Enter more experience.";
        experienceList === null || experienceList === void 0 ? void 0 : experienceList.appendChild(newExperienceField);
    });
    // Function to add more fields for Skills
    const skillsList = document.getElementById("skills-list");
    (_c = document.getElementById("add-skills")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
        const newSkillsField = document.createElement("textarea");
        newSkillsField.name = "skills";
        newSkillsField.rows = 2;
        newSkillsField.placeholder = "Enter more skills.";
        skillsList === null || skillsList === void 0 ? void 0 : skillsList.appendChild(newSkillsField);
    });
    // Get the list of education inputs
    const educationFields = document.querySelectorAll("textarea[name='education']");
    const educationListItems = Array.from(educationFields).map((field) => `<li>${field.value}</li>`).join("");
    // Get the list of experience inputs
    const experienceFields = document.querySelectorAll("textarea[name='experience']");
    const experienceListItems = Array.from(experienceFields).map((field) => `<li>${field.value}</li>`).join("");
    // Get the list of skills inputs
    const skillsFields = document.querySelectorAll("textarea[name='skills']");
    const skillsListItems = Array.from(skillsFields).map((field) => `<li>${field.value}</li>`).join("");
    if (resumeName && resumeEmail && resumePhone && resumeAddress && resumeEducation && resumeExperience && resumeSkills && resumeAboutMe && resumeDOB && resumeGender && resumeNationality
        && resumeBgColor && headingColorPicker && paragraphColorPicker && resumeOutput && educationListItems && experienceListItems && skillsListItems) {
        const name = resumeName.value;
        const email = resumeEmail.value;
        const phone = resumePhone.value;
        const address = resumeAddress.value;
        const education = resumeEducation.value;
        const experience = resumeExperience.value;
        const skills = resumeSkills.value;
        const aboutMe = resumeAboutMe.value;
        const dob = resumeDOB.value;
        const gender = resumeGender.value;
        const nationality = resumeNationality.value;
        const selectedBgColor = resumeBgColor.value;
        const selectedHeadingColor = headingColorPicker.value;
        const selectedParagraphColor = paragraphColorPicker.value;
        // Get the list of education inputs
        const educationFields = document.querySelectorAll("textarea[name='education']");
        const educationListItems = Array.from(educationFields).map((field) => `<li>${field.value}</li>`).join("");
        // Get the list of experience inputs
        const experienceFields = document.querySelectorAll("textarea[name='experience']");
        const experienceListItems = Array.from(experienceFields).map((field) => `<li>${field.value}</li>`).join("");
        // Get the list of skills inputs
        const skillsFields = document.querySelectorAll("textarea[name='skills']");
        const skillsListItems = Array.from(skillsFields).map((field) => `<li>${field.value}</li>`).join("");
        // Generate resume content
        const resumeOutput = document.getElementById("resumeOutput");
        if (resumeOutput) {
            resumeOutput.innerHTML = `

      <div class="profile-container">
      <h1>Resume</h1>
        <img src="${profilePicture.src}" alt="Profile Picture" width="150" height="150">
        <div>
       <h2>${name}</h2>
        <p><strong>About Me:</strong> ${aboutMe}</p>
      </div>
      <hr>
      <h3>Personal Details</h3>
      <p><strong>Date of Birth:</strong> ${dob}</p>
      <p><strong>Gender:</strong> ${gender}</p>
      <p><strong>Nationality:</strong> ${nationality}</p>
      <hr>
      <h3>Contact Information</h3>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address}</p>
      <hr>
      <h3>Education</h3>
      <p><ul>${educationListItems}</ul></p>
      <hr>
      <h3>Experience</h3>
      <p><ul>${experienceListItems}</ul></p>
      <hr>
      <h3>Skills</h3>
      <p><ul>${skillsListItems}</ul></p>
    `;
            // Apply selected styles
            resumeOutput.style.backgroundColor = selectedBgColor;
            const headings = resumeOutput.querySelectorAll("h2, h3");
            const paragraphs = resumeOutput.querySelectorAll("p");
            headings.forEach((heading) => {
                heading.style.color = selectedHeadingColor;
            });
            paragraphs.forEach((paragraph) => {
                paragraph.style.color = selectedParagraphColor;
            });
            resumeOutput.classList.remove("hidden");
            resumeOutput.scrollIntoView({ behavior: "smooth" });
        }
        else if (!resumeName.value || !resumeEmail.value || !resumePhone.value || !resumeAddress.value || !resumeEducation.value || !resumeExperience.value || !resumeSkills.value || !resumeAboutMe.value || !resumeDOB.value || !resumeGender.value || !resumeNationality.value) {
            alert("Please fill all the fields");
            return;
        }
    }
});
