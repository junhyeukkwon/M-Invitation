import baseURL from '.'; 

//POST Info API
export const postInfoAPI = (data) => fetch(`${baseURL}/api/info`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
});
 