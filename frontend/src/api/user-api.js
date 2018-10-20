export const registerNewUser = userCredentials => fetch('/signUp', {
  method: 'POST',
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  redirect: 'follow', // manual, *follow, error
  referrer: 'no-referrer', // no-referrer, *client
  body: JSON.stringify(userCredentials), // body data type must match "Content-Type" header
}).then((response) => { console.log(response); return response.json(); });

export const login = userCredentials => fetch('/login', {
  method: 'POST',
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  redirect: 'follow', // manual, *follow, error
  referrer: 'no-referrer', // no-referrer, *client
  body: JSON.stringify(userCredentials), // body data type must match "Content-Type" header
}).then((response) => { console.log(response); return response.json(); });
