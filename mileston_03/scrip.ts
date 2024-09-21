// Selecting elements
const toggleSkillsButton: HTMLElement | null = document.getElementById("toggle-skills");
const skillsSection: HTMLElement | null = document.getElementById("skills");

// Select the profile picture and file input elements
const profilePicture = document.getElementById("profilePicture") as HTMLImageElement | null;
const profilePictureInput = document.querySelector("input[type=file]") as HTMLInputElement | null;

try {
  if (profilePicture && profilePictureInput) {
    // Add click event listener to the profile picture
    profilePicture.addEventListener("click", () => {
      try {
        profilePictureInput.click();
      } catch (error) {
        console.error("Error when clicking the profile picture input: ", error);
      }
    });

    // Add change event listener to the file input
    profilePictureInput.addEventListener("change", (event) => {
      try {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            try {
              if (profilePicture) {
                profilePicture.src = reader.result as string;
              }
            } catch (error) {
              console.error("Error when setting the profile picture source: ", error);
            }
          };
          reader.readAsDataURL(file);
        }
      } catch (error) {
        console.error("Error when reading the profile picture file: ", error);
      }
    });
  } else {
    throw new Error("Profile picture or input element is missing.");
  }

  // Function to add more fields for Education
  const educationList = document.getElementById("education-list");
  document.getElementById("add-education")?.addEventListener("click", () => {
    try {
      const newEducationField = document.createElement("textarea");
      newEducationField.name = "education";
      newEducationField.rows = 2;
      newEducationField.placeholder = "Enter more education.";
      educationList?.appendChild(newEducationField);
    } catch (error) {
      console.error("Error when adding new education field: ", error);
    }
  });

  // Function to add more fields for Experience
  const experienceList = document.getElementById("experience-list");
  document.getElementById("add-experience")?.addEventListener("click", () => {
    try {
      const newExperienceField = document.createElement("textarea");
      newExperienceField.name = "experience";
      newExperienceField.rows = 2;
      newExperienceField.placeholder = "Enter more experience.";
      experienceList?.appendChild(newExperienceField);
    } catch (error) {
      console.error("Error when adding new experience field: ", error);
    }
  });

  // Function to add more fields for Skills
  const skillsList = document.getElementById("skills-list");
  document.getElementById("add-skills")?.addEventListener("click", () => {
    try {
      const newSkillsField = document.createElement("textarea");
      newSkillsField.name = "skills";
      newSkillsField.rows = 2;
      newSkillsField.placeholder = "Enter more skills.";
      skillsList?.appendChild(newSkillsField);
    } catch (error) {
      console.error("Error when adding new skills field: ", error);
    }
  });

  // Submit form and generate resume
  document.getElementById("resumeBuilder")?.addEventListener("submit", function (event) {
    event.preventDefault();

    try {
      // Get the form values
      const resumeName = document.getElementById("userName") as HTMLInputElement | null;
      const resumeEmail = document.getElementById("email") as HTMLInputElement | null;
      const resumePhone = document.getElementById("phone") as HTMLInputElement | null;
      const resumeAddress = document.getElementById("address") as HTMLInputElement | null;
      const resumeAboutMe = document.getElementById("aboutMe") as HTMLInputElement | null;
      const resumeDOB = document.getElementById("dob") as HTMLInputElement | null;
      const resumeGender = document.getElementById("gender") as HTMLSelectElement | null;
      const resumeNationality = document.getElementById("nationality") as HTMLInputElement | null;

      if (
        resumeName && resumeEmail && resumePhone && resumeAddress &&
        resumeAboutMe && resumeDOB && resumeGender && resumeNationality
      ) {
        // Get the list of education, experience, and skills inputs
        const educationFields = document.querySelectorAll("textarea[name='education']");
        const educationListItems = Array.from(educationFields)
          .map((field) => `<li>${(field as HTMLInputElement).value}</li>`)
          .join("");

        const experienceFields = document.querySelectorAll("textarea[name='experience']");
        const experienceListItems = Array.from(experienceFields)
          .map((field) => `<li>${(field as HTMLInputElement).value}</li>`)
          .join("");

        const skillsFields = document.querySelectorAll("textarea[name='skills']");
        const skillsListItems = Array.from(skillsFields)
          .map((field) => `<li>${(field as HTMLInputElement).value}</li>`)
          .join("");

        // Get user-selected colors
        const selectedBgColor = document.getElementById("bgColor") as HTMLSelectElement | null;
        const selectedHeadingColor = document.getElementById("headingColor") as HTMLSelectElement | null;
        const selectedParagraphColor = document.getElementById("paragraphColor") as HTMLSelectElement | null;

        const resumeOutput = document.getElementById("resumeOutput");
        if (resumeOutput && selectedBgColor && selectedHeadingColor && selectedParagraphColor) {
          // Generate the resume HTML content
          resumeOutput.innerHTML = `
            <div class="profile-container">
              <img src="${profilePicture?.src}" alt="Profile Picture" width="150" height="150">
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
            (heading as HTMLElement).style.color = selectedHeadingColor.value;
          });

          paragraphs.forEach((paragraph) => {
            (paragraph as HTMLElement).style.color = selectedParagraphColor.value;
          });

          resumeOutput.classList.remove("hidden");
          resumeOutput.scrollIntoView({ behavior: "smooth" });
        } else {
          throw new Error("Resume output or color selection elements are missing.");
        }
      } else {
        throw new Error("One or more required input fields are missing.");
      }
    } catch (error) {
      console.error("Error while generating the resume: ", error);
    }
  });
} catch (error) {
  console.error("Error initializing the resume builder script: ", error);
}
