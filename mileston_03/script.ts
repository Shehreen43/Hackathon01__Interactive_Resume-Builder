// script.ts
const toggleSkillsButton: HTMLElement | null =
  document.getElementById("toggle-skills");
const skillsSection: HTMLElement | null = document.getElementById("skills");

// Select the profile picture and file input elements
const profilePicture = document.getElementById("profilePicture") as HTMLImageElement;
const profilePictureInput = document.querySelector("input[type=file]") as HTMLInputElement;

// Add click event listener to the profile picture
profilePicture.addEventListener("click", () => {
  profilePictureInput.click();
});

// Add change event listener to the file input
profilePictureInput.addEventListener("change", (event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      profilePicture.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
});
const resumeBgColor = document.getElementById("bgColor") as HTMLInputElement;
const resumeOutput = document.getElementById("resumeOutput");

// Event listener to update the background color in real-time
resumeBgColor.addEventListener("input", function () {
  if (resumeOutput)
  resumeOutput.style.backgroundColor = resumeBgColor.value;
});
document
  .getElementById("resumeBuilder")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    const resumeName = document.getElementById("userName") as HTMLInputElement;
    const resumeEmail = document.getElementById("email") as HTMLInputElement;
    const resumePhone = document.getElementById("phone") as HTMLInputElement;
    const resumeAddress = document.getElementById("address") as HTMLInputElement;
    const resumeAboutMe = document.getElementById("aboutMe") as HTMLInputElement;
    const resumeDOB = document.getElementById("dob") as HTMLInputElement;
const resumeGender = document.getElementById("gender") as HTMLSelectElement;
const resumeNationality = document.getElementById("nationality") as HTMLInputElement;
const resumeBgColor = document.getElementById("bgColor") as HTMLInputElement;
    const resumeEducation = document.getElementById(
      "education"
    ) as HTMLInputElement;
    const resumeExperience = document.getElementById(
      "experience"
    ) as HTMLInputElement;
    const resumeSkills = document.getElementById("skills_exp") as HTMLInputElement;

    if (
      resumeName &&
      resumeEmail &&
      resumePhone &&
      resumeAddress&&
      resumeAboutMe&&
      resumeDOB&&
      resumeGender&&
      resumeNationality&&
      resumeBgColor&&
      resumeEducation &&
      resumeExperience &&
      resumeSkills
    ) {
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
    resumeOutput?.classList.remove("hidden");
    resumeOutput?.scrollIntoView({ behavior: "smooth" });
    
      }else{
        console.error("the resume output elements are missing.");
      }
      
    }else{
        console.error("one or more of the input elements are missing.");
    }
    // Apply the selected background color
    const selectedBgColor = resumeBgColor.value;
    if (resumeOutput)
    resumeOutput.style.backgroundColor = selectedBgColor;
  });

     
