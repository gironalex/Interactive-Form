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
    // userName
    const emailAddress = document.getElementById('email');
    // registeringAct
    const payment = document.getElementById('payment');
    const cardNumber = document.getElementById('cc-num');
    const zipCode = document.getElementById('zip');
    const ccv = document.getElementById('cvv');
    const form = document.querySelector('form');

    // Helper Validation Functions
        // Name
        function nameValidator() {
            const regexName = /^[A-Za - z]+.?[A-Za - z]+$/gi.test(userName.value);
            return regexName;
        }
        // Email 
        function emailValidator() {
            const regexEmail = /[^@]+@[^@.]+\.[a-z]+$/i.test(emailAddress.value) //regex provided by Treehouse
            return regexEmail;
        }
        // Activities
        function actSignUpValidator() {
            const activities = document.querySelectorAll('input[type="checkbox"]'); //array of all input[type="checkbox"] elements
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
                function CCNumberValidator() {
                    const regexCCNumber = /^\d{13,16}$/.test(cardNumber.value);
                    return regexCCNumber;
                }
            // Zip Code
                function zipCodeValidator() {
                    const regexZipCode = /^\d{5}$/.test(zipCode.value);
                    return regexZipCode;
                }
            // CCV
                function CCVValidator() {
                    const regexCCV = /^\d{3}$/.test(ccv.value);
                    return regexCCV;
                }
             
    form.addEventListener('submit', (e) => {
        // Name 
        if (!nameValidator()) {
            e.preventDefault();
            userName.value = '';
            console.log('There is an error with your name');
        }
        // Email
        if (!emailValidator()) {
            e.preventDefault();
            emailAddress.value = '';
            console.log('There is an error with your email');
        }
        // Activities
        if (actSignUpValidator() === 0){
            e.preventDefault();
            console.log('You have not signed up for any activity');
        }
        // Credit Card
        if (payment.value == 'credit-card') {
            // CC Number
            if (!CCNumberValidator()) {
                e.preventDefault();
                cardNumber.value = '';
                console.log('CC Number must be between 13-16 numerical digits');
            }
            // Zip Code
            if (!zipCodeValidator()) {
                e.preventDefault();
                zipCode.value = '';
                console.log('Zip Code is a 5 digit number');
            }
            // CCV
            if (!CCVValidator()) {
                e.preventDefault();
                ccv.value = '';
                console.log('CCV is a 3 digit number');
            }
        }
    });
    



