const SCREENS = [
    "choose-trial",
    "cat-home",
    "cat-feeding",
    "cat-fed-success",
    "cat-reminder",
    "cat-fed-failure",
    "search-home",
    "search-input",
    "search-failure",
    "search-success",
];

let selectedTrial = null; // Variable to store the selected trial

const TRIAL_DATA = {
    1: { licensePlate: "29HA-002.33", position: "Hầm B6 - Cột F9" },
    2: { licensePlate: "68A9-999.99", position: "Hầm B3 - Cột A5" },
    3: { licensePlate: "12B1-323.08", position: "Hầm B4 - Cột K12" },
};

function hide(id) {
    const el = document.getElementById(id);
    if (el) el.classList.add("hidden");
}

function show(id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove("hidden");
}

function navigateTo(screenId, trial = null) {
    if (trial) {
        selectedTrial = trial; // Save the selected trial
        console.log(`Selected trial: ${selectedTrial}`); // Debugging log
    }
    SCREENS.forEach(hide);
    show(screenId);

    // Dynamically update text for the 'cat-fed-success' screen
    if (screenId === 'cat-fed-success') {
        const locationText = document.querySelector('#cat-fed-success .dynamic-location');
        if (locationText) {
            locationText.textContent = `${TRIAL_DATA[selectedTrial].position}`;
        }
    }

    // Automatically navigate from 'cat-feeding' to 'cat-fed-success' after 3 seconds
    if (screenId === 'cat-feeding') {
        setTimeout(() => {
            navigateTo('cat-fed-success');
        }, 3000); // 3000ms = 3 seconds
    } else if (screenId === 'cat-reminder') {
        setTimeout(() => {
            navigateTo('cat-home');
        }, 2000);
    }
}

// Update button onclick handlers in index.html to pass the trial value

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("loading-spinner").classList.add("hidden");
});