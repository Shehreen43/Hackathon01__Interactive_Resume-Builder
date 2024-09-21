"use strict";
// modules/profilePicture.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleProfilePicture = void 0;
function handleProfilePicture(profilePicture, profilePictureInput) {
    // Click on the profile picture to trigger file input
    profilePicture.addEventListener("click", () => {
        profilePictureInput.click();
    });
    // When file input changes (user selects a file)
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
}
exports.handleProfilePicture = handleProfilePicture;
