export const API_URL = 'https://reqres.in';

export function TOKEN_POST(body) {
  return {
    url: API_URL + '/api/login',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function USER_GET(id) {
  return {
    url: API_URL + '/api/users/' + id,
    options: {
      method: 'GET',
      headers: {},
    },
  };
}

export function REGISTER(body) {
  return {
    url: API_URL + '/api/register',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}