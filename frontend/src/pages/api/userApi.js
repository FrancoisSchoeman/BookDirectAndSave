const BASE_URL = "http://127.0.0.1:8000/api/"

export const getUserData = async ({ queryKey }) => {
    let [_, accessToken] = queryKey;

    const resUser = await fetch(`${BASE_URL}auth/current-user/`, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
    })
    const user = await resUser.json()

    return user
}