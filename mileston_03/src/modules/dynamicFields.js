"use strict";
// modules/dynamicFields.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeDynamicFields = exports.addDynamicField = void 0;
function addDynamicField(buttonId, listId, placeholder) {
    var _a;
    const list = document.getElementById(listId);
    (_a = document.getElementById(buttonId)) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        const newField = document.createElement("textarea");
        newField.rows = 2;
        newField.placeholder = placeholder;
        list === null || list === void 0 ? void 0 : list.appendChild(newField);
    });
}
exports.addDynamicField = addDynamicField;
function initializeDynamicFields() {
    addDynamicField("add-education", "education-list", "Enter more education.");
    addDynamicField("add-experience", "experience-list", "Enter more experience.");
    addDynamicField("add-skills", "skills-list", "Enter more skills.");
}
exports.initializeDynamicFields = initializeDynamicFields;
