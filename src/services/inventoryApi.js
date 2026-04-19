const BASE = "http://localhost:3000";

export const getAll = async () => {
    const res = await fetch(`${BASE}/inventory`);
    return res.json();
};

export const getById = async (id) => {
    const res = await fetch(`${BASE}/inventory/${id}`);
    return res.json();
};

export const createItem = async (formData) => {
    const res = await fetch(`${BASE}/register`, {
        method: "POST",
        body: formData,
    });
    return res.json();
};

export const updateItem = async (id, data) => {
    const res = await fetch(`${BASE}/inventory/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return res.json();
};

export const updatePhoto = async (id, formData) => {
    const res = await fetch(`${BASE}/inventory/${id}/photo`, {
        method: "PUT",
        body: formData,
    });
    return res.json();
};

export const deleteItem = async (id) => {
    const res = await fetch(`${BASE}/inventory/${id}`, {
        method: "DELETE",
    });
    return res.json();
};

export const getPhotoUrl = (id) =>
    `${BASE}/inventory/${id}/photo`;