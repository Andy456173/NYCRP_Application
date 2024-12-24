document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const submitButton = document.getElementById('submitButton');
    submitButton.disabled = true; // Disable the button to prevent multiple submissions
    submitButton.textContent = 'Submitting...'; // Change button text

    const application = {
        robloxUsername: document.getElementById('robloxUsername').value,
        discordUsername: document.getElementById('discordUsername').value,
        ageConfirmation: document.getElementById('ageConfirmation').value,
        staffRole: document.getElementById('staffRole').value,
        pastExperience: document.getElementById('pastExperience').value,
        whyPickYou: document.getElementById('why PickYou').value,
        rdm: document.getElementById('rdm').value,
        nlr: document.getElementById('nlr').value,
        aa: document.getElementById('aa').value,
        moderatorCommands: document.getElementById('moderatorCommands').value
    };

    // Simulate an API call
    setTimeout(() => {
        // Here you would typically send the application data to your server
        console.log('Application submitted:', application);

        // Show thank you message and reset the form
        document.getElementById('thankYouMessage').classList.remove('hidden');
        document.getElementById('applicationForm').reset();
        submitButton.disabled = false; // Re-enable the button
        submitButton.textContent = 'Submit Application'; // Reset button text
    }, 2000); // Simulate a 2-second delay for the API call
});
