function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

function updateTimezones() {
    const now = new Date();
    const timezones = [
        { id: 'ny-time', zone: 'America/New_York', label: 'Nova York' },
        { id: 'london-time', zone: 'Europe/London', label: 'Londres' },
        { id: 'tokyo-time', zone: 'Asia/Tokyo', label: 'Tóquio' },
        { id: 'sydney-time', zone: 'Australia/Sydney', label: 'Sydney' },
        { id: 'paris-time', zone: 'Europe/Paris', label: 'Paris' },
        { id: 'moscow-time', zone: 'Europe/Moscow', label: 'Moscou' },
        { id: 'dubai-time', zone: 'Asia/Dubai', label: 'Dubai' },
        { id: 'beijing-time', zone: 'Asia/Shanghai', label: 'Pequim' },
        { id: 'losangeles-time', zone: 'America/Los_Angeles', label: 'Los Angeles' },
        { id: 'mexicocity-time', zone: 'America/Mexico_City', label: 'Cidade do México' },
        { id: 'cape-town-time', zone: 'Africa/Johannesburg', label: 'Cidade do Cabo' }
    ];

    timezones.forEach(tz => {
        const time = new Date(now.toLocaleString("en-US", { timeZone: tz.zone }));
        document.getElementById(tz.id).textContent = `${tz.label}: ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
    });
}

setInterval(updateClock, 1000);
setInterval(updateTimezones, 1000);

updateClock();
updateTimezones();
