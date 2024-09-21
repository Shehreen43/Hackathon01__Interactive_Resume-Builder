// modules/profilePicture.ts

export function handleProfilePicture(
    profilePicture: HTMLImageElement,
    profilePictureInput: HTMLInputElement
  ) {
    // Click on the profile picture to trigger file input
    profilePicture.addEventListener("click", () => {
      profilePictureInput.click();
    });
  
    // When file input changes (user selects a file)
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
  }
  