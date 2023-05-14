import { addNotification } from "./notification.js"

window.addEventListener("DOMContentLoaded", () => {
    
    document.getElementById("btn1").addEventListener("click", () => {
        console.log("aaaaaaa")
        addNotification("this is an info notification", 0)
    })
    document.getElementById("btn2").addEventListener("click", () => {
        addNotification("this is a success notification", 1)
    })
    document.getElementById("btn3").addEventListener("click", () => {
        addNotification("this is a warning notification", 2)
    })
    document.getElementById("btn4").addEventListener("click", () => {
        addNotification("this is an error notification", 3)
    })

});