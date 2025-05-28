export const simulateAuth = async () => {
    // Random delay between 3 and 5 seconds
    const delay = Math.floor(Math.random() * (5000 - 3000 + 1) + 1000);

    // Wait for the delay
    await new Promise(resolve => setTimeout(resolve, delay));

    // 1 in 5 chance of rejection
    const shouldReject = Math.random() < 0.2;

    if (shouldReject) {
        throw new Error('Autenticacion fallida. Por favor, intente nuevamente.');
    }

    return true;
};