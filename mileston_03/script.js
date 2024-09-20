"use strict";
var _a;
// script.ts
const toggleSkillsButton = document.getElementById("toggle-skills");
const skillsSection = document.getElementById("skills");
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
            profilePicture.src = reader.result;
        };
        reader.readAsDataURL(file);
    }
});
const resumeBgColor = document.getElementById("bgColor");
const resumeOutput = document.getElementById("resumeOutput");
// Event listener to update the background color in real-time
resumeBgColor.addEventListener("input", function () {
    if (resumeOutput)
        resumeOutput.style.backgroundColor = resumeBgColor.value;
});
(_a = document
    .getElementById("resumeBuilder")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    const resumeName = document.getElementById("userName");
    const resumeEmail = document.getElementById("email");
    const resumePhone = document.getElementById("phone");
    const resumeAddress = document.getElementById("address");
    const resumeAboutMe = document.getElementById("aboutMe");
    const resumeDOB = document.getElementById("dob");
    const resumeGender = document.getElementById("gender");
    const resumeNationality = document.getElementById("nationality");
    const resumeBgColor = document.getElementById("bgColor");
    const resumeEducation = document.getElementById("education");
    const resumeExperience = document.getElementById("experience");
    const resumeSkills = document.getElementById("skills_exp");
    if (resumeName &&
        resumeEmail &&
        resumePhone &&
        resumeAddress &&
        resumeAboutMe &&
        resumeDOB &&
        resumeGender &&
        resumeNationality &&
        resumeBgColor &&
        resumeEducation &&
        resumeExperience &&
        resumeSkills) {
        const name = resumeName.value;
        const email = resumeEmail.value;
        const phone = resumePhone.value;
        const address = resumeAddress.value;
        const aboutMe = resumeAboutMe.value;
        const dob = resumeDOB.value;
        const gender = resumeGender.value;
        const nationality = resumeNationality.value;
        const bgColor = resumeBgColor.value;
        const education = resumeEducation.value;
        const experience = resumeExperience.value;
        const skills = resumeSkills.value;
        const resumeOutput = document.getElementById("resumeOutput");
        if (resumeOutput) {
            resumeOutput.innerHTML = `<div class="profile-container">
    <img src="${profilePicture.src}" alt="Profile Picture" width="150" height="150">
    <h2>Resume</h2>
    <p><strong>Name:</strong> ${name}</p>
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
    // Apply the selected background color
    const selectedBgColor = resumeBgColor.value;
    if (resumeOutput)
        resumeOutput.style.backgroundColor = selectedBgColor;
});
