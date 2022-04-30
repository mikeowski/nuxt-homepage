import fetch from 'isomorphic-unfetch';
const client_id = 'fc888f0990d745128b0067a84c74492a'
const client_secret = '0789567a491c4f0ba609d8e0062c95cc'
let refresh_token = 'AQAGH0WJ7GZ0E7VKk2cBfMXG01nE8wU7l7-_McaegxWjHFHBTag7iv-sNYcw6rTfndQ3Yz-De3Ms9wspdCogldYIK460b5uo8_Ur7MHevGiU4fLNk27-KALwQfUDZ8MUd5M';

const basic ='ZmM4ODhmMDk5MGQ3NDUxMjhiMDA2N2E4NGM3NDQ5MmE6MDc4OTU2N2E0OTFjNGYwYmE2MDlkOGUwMDYyYzk1Y2M=';
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token
        }),

        json: true,
    });

    return response.json();
};

export const getNowPlaying = async () => {
    const { access_token } = await getAccessToken();

    return fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    }).then(res => res.json());
};
