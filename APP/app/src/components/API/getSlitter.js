
import { API_URL } from "./api";



export const getSliiter = successCallback => {
    fetch(`${API_URL}`)
        .then(data => data.json())
        .then(data => successCallback(data))
        .catch(error => console.log(error))
};

export const addAudit = (id, info, status) => {
    fetch(`${API_URL}/${id}`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "PATCH",
        body: JSON.stringify({
            lastAudit: info.lastAudit,
            status: status,
            who: info.who
        })
    })
        .then(r => r.json())
        .then(r => console.log(r))
        .catch(err => console.log(err));
};