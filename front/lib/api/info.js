import baseURL from '.'; 

//POST Info API
export const postInfoAPI = (data) => fetch(`${baseURL}/api/info/`, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
});
 