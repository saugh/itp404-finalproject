const baseURL = process.env.REACT_APP_API_BASE_URL;

export function fetchOutfits() {
    return fetch(`${baseURL}/outfits`).then((response) => {
        return response.json();
    })
}

export function fetchOutfitById(id) {
    return fetch(`${baseURL}/outfits/${id}`).then((response) => {
        return response.json();
    })
}

export function addOutfit(data) {
    return fetch(`${baseURL}/outfits`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json"
        }
    }).then((response) => {
        return response.json();
    })
}

export function addFavorite(data) {
    return fetch(`${baseURL}/favorited-outfits`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json"
        }
    }).then((response) => {
        return response.json();
    })
}

export function AddFavoriteUpdate(id, data) {
    // const favoritedId = getFavoritedId(id);
    return fetch(`${baseURL}/outfits/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json"
        }
    }).then((response) => {
        return response.json();
    })

}

export function deleteOutfit(id) {
    return fetch(`${baseURL}/outfits/${id}`, {
        method: 'DELETE'
    }).then((response) => {
        return response.json();
    })
}

export function deleteOutfitFromFavorites(id) {
    return fetch(`${baseURL}/favorited-outfits/${id}`, {
        method: 'DELETE'
    }).then((response) => {
        return response.json();
    })
}

// export function unFavoriteById(id) {
//     return fetch(`${baseURL}/favorited-outfits/${id}`, {
//         method: 'DELETE'
//     }).then((response) => {
//         return response.json();
//     })
// }

export function unFavoriteUpdate(id) {
    return fetch(`${baseURL}/outfits/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(
            {
                "favorited": false,
            }
        ),
        headers: {
            "Content-type": "application/json"
        }
    }).then((response) => {
        return response.json();
    })
}

export function editOutfit(id, data) {
    return fetch(`${baseURL}/outfits/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json"
        }
    }).then((response) => {
        return response.json();
    })
}

export function editOutfitInFavorites(id, data) {
    return fetch(`${baseURL}/favorited-outfits/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json"
        }
    }).then((response) => {
        return response.json();
    })
}

export function updateAlbumData(id, data) {
    return fetch(`${baseURL}/albums/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json"
        }
    }).then((response) => {
        return response.json();
    })
}