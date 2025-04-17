from pyscript import document, window

# List of all screen ids
SCREENS = [
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
]


def hide(id):
    if document.getElementById(id) is not None:
        document.getElementById(id).classList.add("hidden")


def show(id):
    if document.getElementById(id) is not None:
        document.getElementById(id).classList.remove("hidden")


def show_screen(screen):
    for id in SCREENS:
        hide(id)
    show(screen)


def nav_to(event):
    screen = event.target.getAttribute("data-screen")
    if screen in SCREENS:
        show_screen(screen)
    else:
        print(f"Screen {screen} not found.")


def hide_spinner():
    spinner = document.getElementById("loading-spinner")
    if spinner:
        spinner.classList.add("hidden")


# Call on startup
hide_spinner()
