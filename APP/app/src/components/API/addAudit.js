import { API_URL } from "./api";

export const addAudit = (id, machin) => {
    fetch(`${API_URL}/${id}`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "PATCH",
        body: JSON.stringify(machinData)
    })
        .then(r => r.json())
        .then(r => console.log(r))
        .catch(err => console.log(err));
};

