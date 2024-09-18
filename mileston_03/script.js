"use strict";
var _a;
// script.ts
const toggleSkillsButton = document.getElementById("toggle-skills");
const skillsSection = document.getElementById("skills");
toggleSkillsButton === null || toggleSkillsButton === void 0 ? void 0 : toggleSkillsButton.addEventListener("click", () => {
    if ((skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.style.display) === "none") {
        skillsSection.style.display = "block";
    }
    else {
        skillsSection.style.display = "none";
    }
});
(_a = document
    .getElementById("resumeBuilder")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    const profilePicture = document.querySelector('img');
    const profilePictureInput = document.getElementById('profilePictureInput');
    const resumeName = document.getElementById("userName");
    const resumeEmail = document.getElementById("email");
    const resumePhone = document.getElementById("phone");
    const resumeEducation = document.getElementById("education");
    const resumeExperience = document.getElementById("experience");
    const resumeSkills = document.getElementById("skills_exp");
    if (resumeName &&
        resumeEmail &&
        resumePhone &&
        resumeEducation &&
        resumeExperience &&
        resumeSkills) {
        const name = resumeName.value;
        const email = resumeEmail.value;
        const phone = resumePhone.value;
        const education = resumeEducation.value;
        const experience = resumeExperience.value;
        const skills = resumeSkills.value;
        profilePictureInput.addEventListener('change', (event) => {
            var _a;
            const file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                    profilePicture.src = reader.result;
                };
                reader.readAsDataURL(file);
            }
        });
        const resumeOutput = document.getElementById("resumeOutput");
        if (resumeOutput) {
            resumeOutput.innerHTML = `
        <img src="${profilePicture.src}" alt="Profile Picture">
        <h2>Resume</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <hr>
        <h3>Education</h3>
        <p>${education}</p>
        <hr>
        <h3>Experience</h3>
        <p>${experience}</p>
        <hr>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;
            resumeOutput === null || resumeOutput === void 0 ? void 0 : resumeOutput.classList.remove("hidden");
            resumeOutput === null || resumeOutput === void 0 ? void 0 : resumeOutput.scrollIntoView({ behavior: "smooth" });
        }
        else {
            console.error("the resume output elements are missing.");
        }
    }
    else {
        console.error("one or more of the input elements are missing.");
    }
});
