export const HELPVALIDATION = (inputData) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!inputData.name.trim()) {
        errors.name = 'Name is required';
    }

    if (!inputData.email.trim()) {
        errors.email = 'Email is required';
    } else if (!emailRegex.test(inputData.email)) {
        errors.email = 'Email is invalid';
    }

    if (!inputData.message.trim()) {
        errors.message = 'Message is required';
    }

    return errors;
}