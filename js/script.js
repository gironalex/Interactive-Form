/*** 
* Treehouse FSJS Techdegree:
* FSJS Project 3 - Interactive Form
* by Alex Giron
* April 2021
***/

// -----------------------------------------------------------------------------------------------------------------------------

// BASIC INFO - Focusing on the 1st Input Field on Page Load
    const userName = document.getElementById('name');
    userName.focus();

// BASIC INFO - Dynamically hiding/showing the "Other" Job Role text field
    const jobRoleOption = document.getElementById('title');
    const otherRoleInput = document.getElementById('other-job-role');

    otherRoleInput.style.display = 'none';

    jobRoleOption.addEventListener('change', (e) => {
        if (e.target.value === 'other') {
            otherRoleInput.style.display = 'block';
        } else { 
            otherRoleInput.style.display = 'none';
        }
    });

// T-SHIRT INFO - Adjusting the color theme options based on the user design selection
    const designOption = document.getElementById('design');
    const colorLabel = document.getElementById('color');
    const colorOption = colorLabel.children;
    
    colorLabel.disabled = true;

    designOption.addEventListener('change', (e) => {
        colorLabel.disabled = false;

        // Adding a message to remind the user to select a color after choosing design theme
        colorOption[0].textContent = 'Please select a T-shirt color';
        colorOption[0].hidden = false;
        colorOption[0].setAttribute('selected', true);

        for (let i = 0; i < colorOption.length; i++) {

            if (e.target.value === colorOption[i].getAttribute('data-theme')) {
                
                colorOption[i].setAttribute('selected', true);
                colorOption[i].hidden = false;
            } else {
                colorOption[i].setAttribute('selected', false);
                colorOption[i].hidden = true;
            } 
        }
    });



