const API_URL = '/api'; 

export const signup = async (email, password) => {
    const response = await fetch(`${API_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
        throw new Error('Signup failed');
    }
    return await response.json();
};
