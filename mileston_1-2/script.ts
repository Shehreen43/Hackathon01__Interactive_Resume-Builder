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