// modules/dynamicFields.ts

export function addDynamicField(
    buttonId: string,
    listId: string,
    placeholder: string
  ) {
    const list = document.getElementById(listId);
    document.getElementById(buttonId)?.addEventListener("click", () => {
      const newField = document.createElement("textarea");
      newField.rows = 2;
      newField.placeholder = placeholder;
      list?.appendChild(newField);
    });
  }
  
  export function initializeDynamicFields() {
    addDynamicField("add-education", "education-list", "Enter more education.");
    addDynamicField("add-experience", "experience-list", "Enter more experience.");
    addDynamicField("add-skills", "skills-list", "Enter more skills.");
  }
  