const butInstall = document.getElementById('buttonInstall');
let promptEvent;

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    promptEvent = event;
    butInstall.style.visibility = 'visible';
});

// TODO: Implement a click event handler on the `butInstall` element
// Button event listener added, when clicked will install the app
butInstall.addEventListener('click', async () => {
    if(!promptEvent) {
        butInstall.setAttribute('disabled', true);
        butInstall.textContent = 'Installed';
    } else {
        const response = await promptEvent.prompt();
        if(response.userChoice === "accepted") {
            butInstall.setAttribute('disabled', true);
            butInstall.textContent = 'Installed';
        } else {
            return;
        }
    }
});

// TODO: Add an handler for the `appinstalled` event
// If the app is already installed, it will not install the app again, but it will tell you it is installed already.
window.addEventListener('appinstalled', (event) => {
    console.log('App installed');
});
