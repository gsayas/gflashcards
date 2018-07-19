export const objToArray = (obj) => {
    return Object.keys(obj).map((key) => obj[key]);
}

export const questionsToString = (questions) => {
    return questions.length + (questions.length !== 1 ? ' Cards':' Card');
}