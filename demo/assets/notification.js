export { sendNotification }

window.addEventListener("DOMContentLoaded", () => {
    notificationBox = document.querySelector("notification-box")
});

function sendNotification(message, type) {
    const notif = document.createElement("div")

    notif.classList.add("notification")
    notif.textContent = message

    switch (type) {
        case 0:
            break
        case 1:
            notif.classList.add("notification__success")
            break
        case 2:
            notif.classList.add("notification__warning")
            break
        case 3:
            notif.classList.add("notification__error")
            break
        default:
            console.log("invalid notification type")
    }

    notificationBox.appendChild(notif)
}