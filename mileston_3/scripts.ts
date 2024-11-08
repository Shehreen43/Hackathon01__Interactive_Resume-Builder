// script.ts
// Define types for each section
type Section = 'Personal Information' | 'Education' | 'Work Experience' | 'Skills' | 'Customize Resume';

document.addEventListener('DOMContentLoaded', ()=> {

   // Define all sections in an array for convenience
    const sections: {name: Section; element: HTMLElement}[] = [
        {name: 'Personal Information', element:document.querySelector('fieldset')! },
        {name: 'Education', element:document.querySelectorAll('fieldset')[1] as HTMLElement },
        {name: 'Work Experience', element:document.querySelectorAll('fieldset')[2] as HTMLElement },
        {name: 'Skills', element:document.querySelectorAll('fieldset')[3] as HTMLElement },
        {name: 'Customize Resume', element:document.querySelectorAll('fieldset')[4] as HTMLElement },

    ]

 // Function to create a toggle button
const createToggleButton = (section: Section, element: HTMLElement) =>{
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = `${section}`;
    button.style.marginBottom = '10px';
    button.addEventListener('click', () =>{
        element.style.display = element.style.display === 'none' ? "block": 'none';
    });
    return button;
}

// Add toggle button to each section
sections.forEach(({name, element}) =>{
    const toggleButton = createToggleButton(name, element);
    element.before(toggleButton) // Place button before each section
})
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

// Adding dynamic delete option for education, experience, and skills
function addDeleteOption(field: HTMLElement) {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.style.marginLeft = "10px";
  deleteButton.addEventListener("click", () => {
    field.remove(); // Remove the field on delete
  });
  field.appendChild(deleteButton); // Add delete button next to the field
}

/////////////////////
const resumeForm = document.getElementById("resumeBuilder") as HTMLFormElement;
const educationList = document.getElementById("education-list")!;
const experienceList = document.getElementById("experience-list")!;
const skillsList = document.getElementById("skills-list")!;

// Function to add delete button and handle its functionality
function createDeleteButton(container: HTMLElement) {
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
function validateField(field: HTMLInputElement | HTMLTextAreaElement): boolean {
  const errorMessage = field.parentElement?.querySelector('.error-message') as HTMLElement;
  if (field.value.trim() === "") {
    errorMessage.textContent = "Oops! This field is required. Please fill it in to continue.";
    return false;
  } else {
    errorMessage.textContent = ""; // Clear error message if field is filled
    return true;
  }
}

// Add dynamic Education field
document.getElementById("add-education")?.addEventListener("click", () => {
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
document.getElementById("add-experience")?.addEventListener("click", () => {
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
document.getElementById("add-skills")?.addEventListener("click", () => {
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
    .map((field) => validateField(field as HTMLInputElement | HTMLTextAreaElement))
    .every(Boolean);

  if (!allFieldsValid) {
    event.preventDefault(); // Prevent form submission if any field is invalid
    alert("Please fill in all the required fields.");
  }
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

    let hasErrors = false; // Flag to check if there are empty fields

    // Get all text areas (education, experience, skills)
    const educationFields = document.querySelectorAll("textarea[name='education']");
    const experienceFields = document.querySelectorAll("textarea[name='experience']");
    const skillsFields = document.querySelectorAll("textarea[name='skills']");

    // Function to validate each field and add error message if empty
    function validateFields(fields: NodeListOf<Element>, fieldName: string) {
      fields.forEach((field) => {
        const textarea = field as HTMLTextAreaElement;
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
          textarea.parentNode?.insertBefore(error, textarea.nextSibling);
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

    const educationListItems = Array.from(educationFields).map((field) => `<li>${(field as HTMLTextAreaElement).value}</li>`).join("");
    const experienceListItems = Array.from(experienceFields).map((field) => `<li>${(field as HTMLTextAreaElement).value}</li>`).join("");
    const skillsListItems = Array.from(skillsFields).map((field) => `<li>${(field as HTMLTextAreaElement).value}</li>`).join("");


    if (resumeName && resumeEmail && resumePhone && resumeAddress && resumeEducation && resumeExperience && resumeSkills && resumeAboutMe && resumeDOB && resumeGender && resumeNationality
    ) {
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
      /*
          resumeOutput.classList.add("hidden");
          resumeOutput.innerHTML = "";
          resumeOutput.style.backgroundColor = "";
          resumeOutput.style.color = "";
          resumeOutput.style.padding = "";
          resumeOutput.style.margin = "";
          resumeOutput.style.borderRadius = "";
          resumeOutput.style.boxShadow = "";
      */
      // Generate resume content
      if (resumeOutput) {
        resumeOutput.innerHTML = `

      <div class="profile-container">
      <h1 style.color = "white";>${name}'s Resume</h1>
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

      } else if (!resumeName.value || !resumeEmail.value || !resumePhone.value || !resumeAddress.value || !resumeEducation.value || !resumeExperience.value || !resumeSkills.value || !resumeAboutMe.value || !resumeDOB.value || !resumeGender.value || !resumeNationality.value) {
        alert("Please fill all the fields");
        return;
      }
    }
  })