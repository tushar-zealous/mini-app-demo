const tg = window.Telegram.WebApp;
tg.expand();

// Show user info on profile page
const user = tg.initDataUnsafe?.user;
if (user && document.getElementById("user")) {
    document.getElementById("user").innerText =
        `Welcome, ${user.first_name} ${user.last_name || ""} (@${user.username || "no username"})`;
}

// Close app button
function closeApp() {
    tg.close();
}
