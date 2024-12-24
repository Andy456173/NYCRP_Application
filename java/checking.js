function displayApplications() {
    const applicationsList = document.getElementById('applicationsList');
    applicationsList.innerHTML = ''; // Clear previous applications

    // Fetch applications from the backend
    fetch('http://localhost:5000/api/applications')
    .then(response => response.json())
    .then(applications => {
        applications.forEach((app, index) => {
            const appDiv = document.createElement('div');
            appDiv.className = 'application';
            appDiv.style.backgroundColor = app.status === 'Approved' ? '#d4edda' : app.status === 'Denied' ? '#f8d7da' : '#fff';
            
            appDiv.innerHTML = `
                <h3>Application #${index + 1}</h3>
                <p><strong>Roblox Username:</strong> ${app.robloxUsername}</p>
                < <p><strong>Discord Username:</strong> ${app.discordUsername}</p>
                <p><strong>Are you over +13?</strong> ${app.ageConfirmation}</p>
                <p><strong>What do you want to be staff in NYCRP?</strong> ${app.staffRole}</p>
                <p><strong>Do you have any past experience?</strong> ${app.pastExperience}</p>
                <p><strong>Why should we pick you than other people?</strong> ${app.whyPickYou}</p>
                <p><strong>What is RDM?</strong> ${app.rdm}</p>
                <p><strong>What is NLR?</strong> ${app.nlr}</p>
                <p><strong>What is AA?</strong> ${app.aa}</p>
                <p><strong>What is command that moderator can only use?</strong> ${app.moderatorCommands}</p>
                <p><strong>Status:</strong> <span style="color: ${app.status === 'Approved' ? 'green' : app.status === 'Denied' ? 'red' : 'orange'};">${app.status}</span></p>
            `;
            applicationsList.appendChild(appDiv);
        });
    })
    .catch(error => {
        console.error('Error fetching applications:', error);
    });
}

// Call the function to display applications when the page loads
window.onload = displayApplications;