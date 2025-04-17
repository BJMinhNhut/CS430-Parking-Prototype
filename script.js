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
    } else if (screenId === 'search-success') {
        const locationText = document.querySelector('#search-success .dynamic-location');
        if (locationText) {
            locationText.textContent = `${TRIAL_DATA[selectedTrial].position}`;
        }
        const plateText = document.querySelector('#search-success .dynamic-plate');
        if (plateText) {
            plateText.textContent = `${TRIAL_DATA[selectedTrial].licensePlate}`;
        }
    }

    // Automatically navigate from 'cat-feeding' to 'cat-fed-success' after 3 seconds
    if (screenId === 'cat-feeding') {
        setTimeout(() => {
            navigateTo('cat-fed-success');
        }, 2750); // 3000ms = 3 seconds
    } else if (screenId === 'cat-fed-success') {
        setTimeout(() => {
            navigateTo('cat-reminder');
        }, 2750);
    } else if (screenId === 'cat-reminder') {
        setTimeout(() => {
            navigateTo('cat-home');
        }, 2000);
    }
}

function search() {
    const input = document.getElementById("location-input").value.trim();
    const expectedPlate = TRIAL_DATA[selectedTrial].licensePlate;

    if (!expectedPlate) {
        alert("Không xác định được thử nghiệm."); // Safety check
        return;
    }

    const last5 = expectedPlate.replace(/\D/g, "").slice(-5); // Get last 5 digits
    const cleanedInput = input.replace(/\D/g, ""); // Remove non-digits

    if (cleanedInput === last5) {
        navigateTo("search-success");
    } else {
        navigateTo("search-failure");
    }
}

// Update button onclick handlers in index.html to pass the trial value

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("loading-spinner").classList.add("hidden");
});