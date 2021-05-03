# Interactive-Form
 In this project, I'll be using JavaScript to enhance an interactive registration form for a fictional Full Stack conference.

I have separated into sections what the JavaScript code will do to enhance operability, and accessibility.

 * BASIC INFO *

    Dynamically hiding/displaying the "Other Job Role?" text input field when the user selects the "other" job role in the drop down menu.

    Initially this text input field will be left blank.

 * T-SHIRT INFO *

    Adjusting the color theme options based on the design option that the user selects. 

    Initially the color theme dropdown menu will be disabled until user has selected a theme option.

 * ACTIVITIES *

    In this section, the code will update the total costs of the activities as they are being checked. Furthermore, if the user selects an activity that conflicts with another time, the activity that was not checked & conflicts with the time will be disabled.
    
 * PAYMENT *

    JavaScript will update the payment type based on user selection.

    Initially, the credit card option will be selected as this is the most common way of payment.

 * Validation *

    The following functions, minus actSignUpValidator, will return a true or false boolean when their respective text input fields are tested to their respective regex value.

    nameValidator 
        tests name input field, ensures that it is not blanked or has any numbers.
   
    emailValidator
        tests email input field, ensures that it has the '@' and '.' characters.

    actSignUpValidator
        keeps track of the number of activities that the user has signed up for.

    CCNumberValidator
        tests the credid card number, ensures that the characters are numerical values and that it is between 13-16 digits long.

    zipCodeValidator
        tests the zip Code number, ensures that the characters are numerical values and that it is between 5 digits long.

    CCVValidator
        tests the ccv number, ensures that the characters are numerical values and that it is between 3 digits long.

 * ACCESSIBILITY *

    showNotValid(errorField) 
         is a function that will display error hints on input fields parent's elements that are blank or do not have the  proper structure when the user clicks submit on the form.

    showValid(validField)
        is a function that will display valid check marks on the correctly filled input fields when the form has been submitted and there are other errors in the input fields to fix.

 * LIVE FEEDBACK *

    Name & Email Input + Conditional Error
        With the 'input' event listener added to their respective text fields, conditional statements have been added to them that will provide additional information for certain types of errors so that the user can better structure their responses.

            In the name field, the user cannot type in number characters or leave the field blank.

            In the email field, the user has to have the '@' and '.' characters in the email.

    Card Number, Zip Code, CCV
        These inputs have an 'input' event listener that has been added to ensure that as the user is typing the information they will display an error message when an 
        improper character has been typed in.

 * FINAL FORM SUBMITTAL *

    With the 'submit' event listener added to the form, JavaScript will ensure that there are not errors in the input on the different sections. If there are any errors the preventDefault() method will be applied until the respective error is fixed. 
