"use strict";
// modules/formHandlers.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormValues = void 0;
function getFormValues() {
    const resumeName = document.getElementById("userName");
    const resumeEmail = document.getElementById("email");
    const resumePhone = document.getElementById("phone");
    const resumeAddress = document.getElementById("address");
    const resumeAboutMe = document.getElementById("aboutMe");
    const resumeDOB = document.getElementById("dob");
    const resumeGender = document.getElementById("gender");
    const resumeNationality = document.getElementById("nationality");
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
exports.getFormValues = getFormValues;
