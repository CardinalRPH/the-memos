const formatDate = (ISODate) => {
    const date = new Date(ISODate);
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    return formattedDate;
}

const formatTime = (ISODate) => {
    const date = new Date(ISODate);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedTime = `${hours.toString().padStart(2, '0')}.${minutes.toString().padStart(2, '0')}`;

    return formattedTime
}

export {formatDate, formatTime}