document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        // Prevent default form submission
        event.preventDefault();

        // Validate personal info fields
        const firstName = document.querySelector('#first-name');
        const lastName = document.querySelector('#last-name');
        const phoneNumber = document.querySelector('#phone');
        const email = document.querySelector('#email');

        // Check if all personal info fields are filled
        if (firstName.value.trim() === "") {
            alert("Please fill out your first name.");
            return; // Stop the submission
        }
        if (lastName.value.trim() === "") {
            alert("Please fill out your last name.");
            return; // Stop the submission
        }
        if (phoneNumber.value.trim() === "") {
            alert("Please fill out your phone number.");
            return; // Stop the submission
        }
        if (email.value.trim() === "") {
            alert("Please fill out your email.");
            return; // Stop the submission
        }

        // Validate shipping address fields
        const address1 = document.querySelector('#address1');
        const address2 = document.querySelector('#address2');
        const country = document.querySelector('#country');
        const city = document.querySelector('#city');
        const state = document.querySelector('#state'); // province/region field
        const postalCode = document.querySelector('#postal-code');

        // Check if shipping address fields are filled
        if (address1.value.trim() === "") {
            alert("Please fill out Address line 1.");
            return; // Stop the submission
        }

        // Check for selected country and city
        if (country.value.trim() === "") {
            alert("Please select a country.");
            return; // Stop the submission
        }
        if (city.value.trim() === "") {
            alert("Please select a city.");
            return; // Stop the submission
        }
        if (state.value.trim() === "") {
            alert("Please select the option."); // Updated message
            return; // Stop the submission
        }
        if (postalCode.value.trim() === "") {
            alert("Please fill out the postal/zip code.");
            return; // Stop the submission
        }

        // Get the values of shipping method radio buttons
        const shippingMethod = document.querySelectorAll('input[name="Method"]');
        let methodSelected = false;

        shippingMethod.forEach(method => {
            if (method.checked) {
                methodSelected = true;
            }
        });

        // Check if billing address is required
        const billingCheckbox = document.querySelector('#same-as-shipping');
        let billingAddressFilled = true;

        // If "Same as Shipping Address" is not checked, check if billing address fields are filled
        if (!billingCheckbox.checked) {
            const billingTextareas = document.querySelectorAll('details textarea');
            billingTextareas.forEach(textarea => {
                if (textarea.value.trim() === "") {
                    billingAddressFilled = false;
                }
            });
        }

        // Check if payment method is selected
        const paymentMethod = document.querySelector('select[name="payment_method"]');
        const paymentSelected = paymentMethod.value.trim() !== ""; // Check if a payment method is selected

        // Show alerts if validations fail
        if (!methodSelected) {
            alert("Please select a shipping method.");
        } else if (!billingAddressFilled) {
            alert("Please fill out the billing address fields.");
        } else if (!paymentSelected) {
            alert("Please select a payment method.");
        } else {
            // If all validations pass, show success alert
            alert("Your form has been submitted successfully!");

            // Optionally, reset the form after submission
            form.reset();
        }
    });

    // Logic to auto-fill billing address if "Same as Shipping Address" is checked
    const billingCheckbox = document.querySelector('#same-as-shipping');
    billingCheckbox.addEventListener('change', function() {
        if (this.checked) {
            document.querySelector('#billing-address1').value = document.querySelector('#address1').value;
            document.querySelector('#billing-address2').value = document.querySelector('#address2').value;
            document.querySelector('#billing-country').value = document.querySelector('#country').value;
            document.querySelector('#billing-city').value = document.querySelector('#city').value;
            document.querySelector('#billing-state').value = document.querySelector('#state').value;
            document.querySelector('#billing-postal-code').value = document.querySelector('#postal-code').value;
        } else {
            // Clear the billing address fields if the checkbox is unchecked
            document.querySelector('#billing-address1').value = '';
            document.querySelector('#billing-address2').value = '';
            document.querySelector('#billing-country').value = '';
            document.querySelector('#billing-city').value = '';
            document.querySelector('#billing-state').value = '';
            document.querySelector('#billing-postal-code').value = '';
        }
    });
});
