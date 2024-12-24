document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const application = {
        robloxUsername: document.getElementById('robloxUsername').value,
        discordUsername: document.getElementById('discordUsername').value,
        ageConfirmation: document.getElementById('ageConfirmation').value,
        staffRole: document.getElementById('staffRole').value,
        pastExperience: document.getElementById('pastExperience').value,
        whyPickYou: document.getElementById('whyPickYou').value,
        rdm: document.getElementById('rdm').value,
        nlr: document.getElementById('nlr').value,
        aa: document.getElementById('aa').value,
        moderatorCommands: document.getElementById('moderatorCommands').value,
    };

    // Send the application to the backend
    fetch('http://localhost:5000/api/applications', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(application)
    })
    .then(response => response.json())
    .then(data => {
        alert('Application submitted successfully!');
        document.getElementById('applicationForm').reset();
    })
    .catch(error => {
        console.error('Error:', error);
    });
});