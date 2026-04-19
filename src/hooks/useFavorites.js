import { useState, useEffect } from "react";

export default function useFavorites() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("fav") || "[]");
        setFavorites(saved);
    }, []);

    const toggle = (item) => {
        let updated;
        if (favorites.find((f) => f.id === item.id)) {
            updated = favorites.filter((f) => f.id !== item.id);
        } else {
            updated = [...favorites, item];
        }
        setFavorites(updated);
        localStorage.setItem("fav", JSON.stringify(updated));
    };

    return { favorites, toggle };
}