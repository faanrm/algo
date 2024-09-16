function timeConversion(s: string): string {
    let time = s.split(':');
    let hours = parseInt(time[0]);
    let minutes = time[1];
    let seconds = time[2].slice(0, 2);
    let meridiem = time[2].slice(2);

    if (meridiem === 'PM' && hours !== 12) {
        hours += 12;
    } else if (meridiem === 'AM' && hours === 12) {
        hours = 0;
    }

    let hoursStr = hours.toString().padStart(2, '0');
    return `${hoursStr}:${minutes}:${seconds}`;
}
