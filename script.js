const SCREENS = [
    "choose-trial",
    "cat-home",
    "cat-feeding",
    "cat-fed-sucess",
    "cat-reminder",
    "cat-fed-failure",
    "search-home",
    "search-input",
    "search-failure",
    "search-success",
];

let selectedTrial = null; // Variable to store the selected trial

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
}

// Update button onclick handlers in index.html to pass the trial value

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById("loading-spinner").classList.add("hidden");
});