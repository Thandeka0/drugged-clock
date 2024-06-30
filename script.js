function getMessage(hour) {
    if (hour >= 0 && hour < 3) {
        return "bro go to sleep";
    } else if (hour >= 3 && hour < 5) {
        return "moments before disaster";
    } else if (hour >= 5 && hour < 7) {
        return "average waking up and preparing for 12 hours of work with drugs";
    } else if (hour >= 7 && hour < 12) {
        return "casually doing drugs while working";
    } else if (hour >= 12 && hour < 17) {
        return "contemplating life right now";
    } else if (hour >= 17 && hour < 20) {
        return "HOLY SHIT ITS FINALLY OVER";
    } else if (hour >= 20 && hour < 23) {
        return "oh wait i have to do that all over again";
    } else if (hour >= 23 && hour < 24) {
        return "FU-";
    }
}

function updateClockMessage() {
    const now = new Date();
    const hour = now.getHours();
    const message = getMessage(hour);
    document.getElementById('clock-message').textContent = message;
}

updateClockMessage();
setInterval(updateClockMessage, 60000);
