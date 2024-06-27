document.getElementById('locationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let location = document.getElementById('locationInput').value;

    getCurrentTime(location);
})
function getCurrentTime(location) {
    let currentTime = new Date().toLocaleTimeString({
        timeZone:location,
        hour12: false,
        hour:'numeric',
        minute:'numeric',
        second:'numeric'
    });
    document.getElementById('currentTime').textContent = ` Hora atual em ${location} : ${currentTime}`;
}