export const HELPSERVICEAPI = async (payload) => {
    const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...payload, access_key: import.meta.env.VITE_HELP_API_KEY })
    });

    const result = await response.json();
    if (!response.ok) {
        throw new Error(result.message || 'Failed to send message');
    }

    return result;
}