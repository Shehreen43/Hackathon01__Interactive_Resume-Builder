// modules/resumeGenerator.ts

export function generateResume(
    profilePictureSrc: string,
    formData: any,
    educationListItems: string,
    experienceListItems: string,
    skillsListItems: string,
    colors: { bgColor: string; headingColor: string; paragraphColor: string }
  ) {
    const resumeOutput = document.getElementById("resumeOutput");
    if (resumeOutput) {
      resumeOutput.innerHTML = `
        <div class="profile-container">
          <img src="${profilePictureSrc}" alt="Profile Picture" width="150" height="150">
          <h2>Resume</h2>
          <p><strong>Name:</strong> ${formData.resumeName.value}</p>
          <p><strong>About Me:</strong> ${formData.resumeAboutMe.value}</p>
        </div>
        <hr>
        <h3>Personal Details</h3>
        <p><strong>Date of Birth:</strong> ${formData.resumeDOB.value}</p>
        <p><strong>Gender:</strong> ${formData.resumeGender.value}</p>
        <p><strong>Nationality:</strong> ${formData.resumeNationality.value}</p>
        <hr>
        <h3>Contact Information</h3>
        <p><strong>Email:</strong> ${formData.resumeEmail.value}</p>
        <p><strong>Phone:</strong> ${formData.resumePhone.value}</p>
        <p><strong>Address:</strong> ${formData.resumeAddress.value}</p>
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
  
      const headings = resumeOutput.querySelectorAll("h2, h3");
      const paragraphs = resumeOutput.querySelectorAll("p");
  
      // Apply selected colors
      resumeOutput.style.backgroundColor = colors.bgColor;
      headings.forEach((heading) => {
        (heading as HTMLElement).style.color = colors.headingColor;
      });
      paragraphs.forEach((paragraph) => {
        (paragraph as HTMLElement).style.color = colors.paragraphColor;
      });
  
      resumeOutput.classList.remove("hidden");
      resumeOutput.scrollIntoView({ behavior: "smooth" });
    }
  }
  