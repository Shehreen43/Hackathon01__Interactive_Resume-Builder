// modules/formHandlers.ts

export function getFormValues() {
    const resumeName = document.getElementById("userName") as HTMLInputElement;
    const resumeEmail = document.getElementById("email") as HTMLInputElement;
    const resumePhone = document.getElementById("phone") as HTMLInputElement;
    const resumeAddress = document.getElementById("address") as HTMLInputElement;
    const resumeAboutMe = document.getElementById("aboutMe") as HTMLInputElement;
    const resumeDOB = document.getElementById("dob") as HTMLInputElement;
    const resumeGender = document.getElementById("gender") as HTMLSelectElement;
    const resumeNationality = document.getElementById("nationality") as HTMLInputElement;
  
    return {
      resumeName,
      resumeEmail,
      resumePhone,
      resumeAddress,
      resumeAboutMe,
      resumeDOB,
      resumeGender,
      resumeNationality,
    };
  }
  