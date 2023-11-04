const charLimiter = (text, limitChar = 100) => {
    if (text.length <= limitChar) {
        return text
    }
    const truncatedText = text.substring(0, limitChar);
    return `${truncatedText}...`;
}

export default charLimiter;