const BASE_URI = 'http://localhost:3002';

const api = {
  createNewUser: async (user) => {
    const response = await fetch(`${BASE_URI}/users/`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  },
};

export default api;
