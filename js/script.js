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
    
    // Disabling the color options until a design theme has been selected
    colorLabel.disabled = true;

    designOption.addEventListener('change', (e) => {
        colorLabel.disabled = false;
        
        colorOption[0].textContent = 'Please Select a T-shirt Color';
        colorOption[0].setAttribute('selected', true);
        
        for (let i = 0; i < colorOption.length; i++) {
            if (e.target.value === colorOption[i].getAttribute('data-theme')) {
                colorOption[i].hidden = false;
            } else {
                colorOption[i].hidden = true;
            }
        }
        colorOption[0].removeAttribute('selected');
    });

// Register for Activities - Updating the sum of the cost of the user’s selected activities
    const registeringAct = document.getElementById('activities');
    const actCosts = document.getElementById('activities-cost');
    let totalCosts = 0; 

    registeringAct.addEventListener('change', (e) => {
        const dataCost = +e.target.getAttribute('data-cost'); //obtaining a reference to the costs of the activity

        if (e.target.checked) {
            totalCosts += dataCost;
        } else if (!e.target.checked) {
            totalCosts -= dataCost;
        } else {
            totalCosts += 0;
        }
        actCosts.innerHTML = `<p>Total: $ ${totalCosts}</p>`;
    });

// Payment Info - Updating payment section to display only the form of transaction the user desires
    const paymentMethod = document.querySelector('.payment-methods');
    const credit = document.getElementById('credit-card');
    const paypal = document.getElementById('paypal');
    const bitcoin = document.getElementById('bitcoin');

    // Ensuring credit card is the default payment type
    paypal.style.display = 'none';
    bitcoin.style.display = 'none';

    paymentMethod.children[1].setAttribute('selected', true);

    paymentMethod.addEventListener('change', (e) => {
        if (e.target.value === 'credit-card') {
            credit.style.display = 'block';
            paypal.style.display = 'none';
            bitcoin.style.display = 'none';
        } else if (e.target.value === 'paypal') { 
            credit.style.display = 'none';
            paypal.style.display = 'block';
            bitcoin.style.display = 'none';
        } else if(e.target.value === 'bitcoin') {
            credit.style.display = 'none';
            paypal.style.display = 'none';
            bitcoin.style.display = 'block';
        } 
    });

// Form Validation 
    // userName reference
    const emailAddress = document.getElementById('email');
    // registeringAct reference
    const actBox = document.getElementById('activities-box');
    const activities = document.querySelectorAll('input[type="checkbox"]'); //array of all input[type="checkbox"] elements
    const payment = document.getElementById('payment');
    const cardNumber = document.getElementById('cc-num');
    const zipCode = document.getElementById('zip');
    const ccv = document.getElementById('cvv');
    const form = document.querySelector('form');

    // Helper Validation Functions
        // Name
        /*** 
         nameValidator is a function that will test the name input field for proper structure.
         @returns {[boolean]} regexName - returns a boolean value
        ***/
        function nameValidator() {
            const regexName = /^[A-Za - z]+.?[A-Za - z]+$/gi.test(userName.value);
            return regexName;
        }

        // Email 
        /*** 
         emailValidator is a function that will test the email input field for proper structure.
         @returns {[boolean]} regexEmail - returns a boolean value
        ***/
        function emailValidator() {
            const regexEmail = /[^@]+@[^@.]+\.[a-z]+$/i.test(emailAddress.value) //regex provided by Treehouse
            return regexEmail;
        }

        // Activities 
        /*** 
         actSignUpValidator is a function that will keep track of the number of activities the user has selected
         @returns {[number]} actCount - returns the total # of activities selected
        ***/
        function actSignUpValidator() {
            let actCount = 0;
            
            for (let i = 0; i < activities.length; i++) {
                if (activities[i].checked) {
                    actCount += 1;
                } else {
                    actCount += 0;
                }
            }
            return actCount;
        }
        // Credit Card
            // CC Number
                /*** 
                 CCNumberValidator is a function that will test the cc # input to ensure it is b/w 13-16 numerical digits
                @returns {[boolean]} regexCCNumber - returns a boolean value
                ***/
                function CCNumberValidator() {
                    const regexCCNumber = /^\d{13,16}$/.test(cardNumber.value);
                    return regexCCNumber;
                }

            // Zip Code
                 /*** 
                 ZipCodeValidator is a function that will test the zip code # input to ensure it is 5 numerical digits
                @returns {[boolean]} regexZipCode - returns a boolean value
                ***/
                function zipCodeValidator() {
                    const regexZipCode = /^\d{5}$/.test(zipCode.value);
                    return regexZipCode;
                }

            // CCV
                 /*** 
                 CCVValidator is a function that will test the ccv # input to ensure it is 3 numerical digits
                @returns {[boolean]} regexCCV - returns a boolean value
                ***/
                function CCVValidator() {
                    const regexCCV = /^\d{3}$/.test(ccv.value);
                    return regexCCV;
                }

        // Adding Error Hints
        /*** 
         showHint is a function that will display error hints on input fields parent's elements that are blank or do not have the 
         proper structure when the user clicks submit on the form.
         @param1 {[html element]} errorField - reference to the user input's field.
        ***/
        function showHint(errorField) {
            errorField.parentNode.classList.add('not-valid');
            errorField.parentNode.classList.remove('valid');
            errorField.parentNode.lastElementChild.style.display = 'block';
        }

        // Adding Valid Checks
        /*** 
         showHint is a function that will display valid check marks on the correctly filled input fields when the form has been 
         submitted and there are other errors in the input fields to fix.
         @param1 {[html element]} validField -  reference to the user input's field.
        ***/
        function showValid(validField) {
            validField.parentNode.classList.add('valid');
            validField.parentNode.classList.remove('not-valid');
            validField.parentNode.lastElementChild.style.display = 'none';
        }
    
    // Accessibility - Activites
    // activities reference
    for (let i = 0; i < activities.length; i++) {
        activities[i].addEventListener('focus', () => {
            activities[i].parentNode.classList.add('focus');
        });

        activities[i].addEventListener('blur', () => {
            activities[i].parentNode.classList.remove('focus');
        });
    }

    // Accesibility - Error Messages     
    form.addEventListener('submit', (e) => {
        // Name 
        if (!nameValidator()) {
            e.preventDefault();
            userName.value = '';
            showHint(userName);
        } else {
            showValid(userName)
        }

        // Email
        if (!emailValidator()) {
            e.preventDefault();
            emailAddress.value = '';
            showHint(emailAddress);
        } else {
            showValid(emailAddress);
        }
        // Activities
        if (actSignUpValidator() === 0){
            e.preventDefault();
            showHint(actBox);
        } else {
            showValid(actBox);
        }
        // Credit Card
        if (payment.value === 'credit-card' || payment.value === 'select method') {
            // CC Number
            if (!CCNumberValidator()) {
                e.preventDefault();
                cardNumber.value = '';
                showHint(cardNumber);
            } else {
                showValid(cardNumber);
            }
            // Zip Code
            if (!zipCodeValidator()) {
                e.preventDefault();
                zipCode.value = '';
                showHint(zipCode);
            } else {
                showValid(zipCode);
            }
            // CCV
            if (!CCVValidator()) {
                e.preventDefault();
                ccv.value = '';
                showHint(ccv);
            } else {
                showValid(ccv);
            }
        }
    });