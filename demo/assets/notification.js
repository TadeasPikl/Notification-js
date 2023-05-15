const notificationBox = document.querySelector(".notification-box")

export function addNotification(message, type) {
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

    const notifClose = document.createElement("img")

    notifClose.classList.add("notification--close")
    notifClose.src = "./assets/notification-icons/close-icon.svg"
    
    
    
    notificationBox.prepend(notif)
    notif.append(notifClose)
    
    notifClose.addEventListener("click", (event) => {
        notificationBox.removeChild(event.target.parentElement)
    })
}

