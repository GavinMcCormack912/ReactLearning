export async function fetchAvailablePlaces() {
    const response = await fetch('http://localhost:3000/places');
    const resData = await response.json();
    if (!response.ok) {//400ish or 500ish status code
        throw new Error('Failed to fetch places');
    }

    return resData.places;
}


export async function updateUserPlaces(places) {
    const response = await fetch('http://localhost:3000/user-places', { // the default of fetch() is GET. reconfigure fetch with a secondary argument for PUT, POST, DELETE
        method: 'PUT',
        body: JSON.stringify({ places }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const resData = await response.json();

    if (!response.ok) {
        throw new Error('Failed to update user data.');
    }

    return resData.message;
}


export async function fetchUserPlaces() {
    const response = await fetch('http://localhost:3000/user-places');
    const resData = await response.json();
    if (!response.ok) {//400ish or 500ish status code
        throw new Error('Failed to fetch user places');
    }

    return resData.places;
}
