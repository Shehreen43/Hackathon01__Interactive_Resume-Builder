// script.ts
const toggleSkillsButton = document.getElementById('toggle-skills');
const skillsSection = document.getElementById('skills');

toggleSkillsButton?.addEventListener('click', () => {
    if (skillsSection?.style.display === 'none') {
        skillsSection.style.display = 'block';
    } else {
        skillsSection!.style.display = 'none';
    }
});
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
        console.log(reader.result); 
        if (reader.result) {
          profilePicture.src = reader.result as string;
        } else {
          console.error("Failed to load the image.");
        }
      };
      reader.readAsDataURL(file);
    } else {
      console.error("No file selected.");
    }
  });
  

const resumeBgColor = document.getElementById("bgColor") as HTMLInputElement;
const headingColorPicker = document.getElementById("headingColor") as HTMLInputElement;
const paragraphColorPicker = document.getElementById("paragraphColor") as HTMLInputElement;
const resumeOutput = document.getElementById("resumeOutput") as HTMLInputElement;

resumeBgColor.addEventListener("input", function () {
  resumeOutput.style.backgroundColor = resumeBgColor.value;
});

headingColorPicker.addEventListener("input", function () {
  const headings = resumeOutput.querySelectorAll("h2, h3");
  headings.forEach((heading) => {
    (heading as HTMLElement).style.color = headingColorPicker.value;
  });
});

paragraphColorPicker.addEventListener("input", function () {
  const paragraphs = resumeOutput.querySelectorAll("p");
  paragraphs.forEach((paragraph) => {
    (paragraph as HTMLElement).style.color = paragraphColorPicker.value;
  });
});


document.getElementById("resumeBuilder")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    const resumeName = document.getElementById("userName") as HTMLInputElement;
    const resumeEmail = document.getElementById("email") as HTMLInputElement;
    const resumePhone = document.getElementById("phone") as HTMLInputElement;
    const resumeAddress = document.getElementById("address") as HTMLInputElement;
    const resumeEducation = document.getElementById("education") as HTMLInputElement;
    const resumeExperience = document.getElementById("experience") as HTMLInputElement;
    const resumeSkills = document.getElementById("skills_exp") as HTMLInputElement;
    const resumeAboutMe = document.getElementById("aboutMe") as HTMLInputElement;
    const resumeDOB = document.getElementById("dob") as HTMLInputElement;
    const resumeGender = document.getElementById("gender") as HTMLSelectElement;
    const resumeNationality = document.getElementById("nationality") as HTMLInputElement;
    const resumeBgColor = document.getElementById("bgColor") as HTMLInputElement;
    const headingColorPicker = document.getElementById("headingColor") as HTMLInputElement;
    const paragraphColorPicker = document.getElementById("paragraphColor") as HTMLInputElement;
    const resumeOutput = document.getElementById("resumeOutput") as HTMLInputElement;

    // Function to add more fields for Education
const educationList = document.getElementById("education-list");
document.getElementById("add-education")?.addEventListener("click", () => {
  const newEducationField = document.createElement("textarea");
  newEducationField.name = "education";
  newEducationField.rows = 2;
  newEducationField.placeholder = "Enter more education.";
  educationList?.appendChild(newEducationField);
});

// Function to add more fields for Experience
const experienceList = document.getElementById("experience-list");
document.getElementById("add-experience")?.addEventListener("click", () => {
  const newExperienceField = document.createElement("textarea");
  newExperienceField.name = "experience";
  newExperienceField.rows = 2;
  newExperienceField.placeholder = "Enter more experience.";
  experienceList?.appendChild(newExperienceField);
});

// Function to add more fields for Skills
const skillsList = document.getElementById("skills-list");
document.getElementById("add-skills")?.addEventListener("click", () => {
  const newSkillsField = document.createElement("textarea");
  newSkillsField.name = "skills";
  newSkillsField.rows = 2;
  newSkillsField.placeholder = "Enter more skills.";
  skillsList?.appendChild(newSkillsField);
});

    // Get the list of education inputs
    const educationFields = document.querySelectorAll("textarea[name='education']");
    const educationListItems = Array.from(educationFields).map((field) => `<li>${(field as HTMLInputElement).value}</li>`).join("");

    // Get the list of experience inputs
    const experienceFields = document.querySelectorAll("textarea[name='experience']");
    const experienceListItems = Array.from(experienceFields).map((field) => `<li>${(field as HTMLInputElement).value}</li>`).join("");

    // Get the list of skills inputs
    const skillsFields = document.querySelectorAll("textarea[name='skills']");
    const skillsListItems = Array.from(skillsFields).map((field) => `<li>${(field as HTMLInputElement).value}</li>`).join("");


        if (resumeName && resumeEmail && resumePhone && resumeAddress && resumeEducation && resumeExperience && resumeSkills && resumeAboutMe && resumeDOB && resumeGender && resumeNationality 
            && resumeBgColor && headingColorPicker && paragraphColorPicker && resumeOutput && educationListItems && experienceListItems && skillsListItems
        ) {
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
const educationListItems = Array.from(educationFields).map((field) => `<li>${(field as HTMLInputElement).value}</li>`).join("");

// Get the list of experience inputs
const experienceFields = document.querySelectorAll("textarea[name='experience']");
const experienceListItems = Array.from(experienceFields).map((field) => `<li>${(field as HTMLInputElement).value}</li>`).join("");

// Get the list of skills inputs
const skillsFields = document.querySelectorAll("textarea[name='skills']");
const skillsListItems = Array.from(skillsFields).map((field) => `<li>${(field as HTMLInputElement).value}</li>`).join("");

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
      (heading as HTMLElement).style.color = selectedHeadingColor;
    });

    paragraphs.forEach((paragraph) => {
      (paragraph as HTMLElement).style.color = selectedParagraphColor;
    });
    resumeOutput.classList.remove("hidden");
    resumeOutput.scrollIntoView({ behavior: "smooth" });

}else if(!resumeName.value || !resumeEmail.value || !resumePhone.value || !resumeAddress.value || !resumeEducation.value || !resumeExperience.value || !resumeSkills.value || !resumeAboutMe.value || !resumeDOB.value || !resumeGender.value || !resumeNationality.value){
        alert("Please fill all the fields");
        return;
      }
  }})
