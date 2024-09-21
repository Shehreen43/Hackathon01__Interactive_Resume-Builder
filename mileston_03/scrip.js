"use strict";
var _a;
const toggleSkillsButton = document.getElementById("toggle-skills");
const skillsSection = document.getElementById("skills");
// Select the profile picture and file input elements
const profilePicture = document.getElementById("profilePicture");
const profilePictureInput = document.querySelector("input[type=file]");
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
                    profilePicture.src = reader.result;
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
// Submit form and generate resume
(_a = document
    .getElementById("resumeBuilder")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    try {
        const resumeName = document.getElementById("userName");
        const resumeEmail = document.getElementById("email");
        const resumePhone = document.getElementById("phone");
        const resumeAddress = document.getElementById("address");
        const resumeEducation = document.getElementById("education");
        const resumeExperience = document.getElementById("experience");
        const resumeSkills = document.getElementById("skills_exp");
        if (resumeName &&
            resumeEmail &&
            resumePhone &&
            resumeAddress &&
            resumeEducation &&
            resumeExperience &&
            resumeSkills) {
            const name = resumeName.value;
            const email = resumeEmail.value;
            const phone = resumePhone.value;
            const address = resumeAddress.value;
            const education = resumeEducation.value;
            const experience = resumeExperience.value;
            const skills = resumeSkills.value;
            const resumeOutput = document.getElementById("resumeOutput");
            if (resumeOutput) {
                resumeOutput.innerHTML = `
            <div class="profile-container">
                <img src="${profilePicture.src}" alt="Profile Picture" width="150">
                <h2>Resume</h2>
                <p><strong>Name:</strong> ${name}</p>       
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Address:</strong> ${address}</p>
            </div>
            <hr>
            <h3>Education</h3>
            <ul>
              <li>${education}</li>
            </ul>
            <hr>
            <h3>Experience</h3>
            <ul>
              <li>${experience}</li>
            </ul>
            <hr>
            <h3>Skills</h3>
            <ul>
              <li>${skills}</li>
            </ul>
          `;
                resumeOutput === null || resumeOutput === void 0 ? void 0 : resumeOutput.classList.remove("hidden");
                resumeOutput === null || resumeOutput === void 0 ? void 0 : resumeOutput.scrollIntoView({ behavior: "smooth" });
            }
            else {
                throw new Error("The resume output element is missing.");
            }
        }
        else {
            throw new Error("One or more of the input elements are missing.");
        }
    }
    catch (error) {
        console.error("Error while generating the resume: ", error);
    }
});
