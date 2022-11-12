export let requiredField = (value) => {
    if(value) return undefined;
    return 'Field is required'
}

export let maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbol`;
}

export let minLengthCreator = (minLength) => (value) => {
    if (value.length < minLength) return `Min length is ${minLength} symbol`;
}
