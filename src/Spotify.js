const clientID = '47dc98e7d16744ac983392be8a5f06f8';
const secretID = '60d908d5170040678d43034ea31b5a15';
const redirectURI = 'http://localhost:3000'; // Cambia esto por tu URL de redireccionamiento

const Spotify = {
    async getAccessToken(){
        const urlToken = "https://accounts.spotify.com/api/token";
        const authInfo = {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `grant_type=client_credentials&client_id=${clientID}&client_secret=${secretID}`
        }

        const result = await fetch(urlToken, authInfo)
        const data = await result.json();
        return data.access_token;       
    },
    async getSongs(search) {
        const token = await Spotify.getAccessToken();
        await Spotify.authorizeUser();
        if(token) {
            const url = 'https://api.spotify.com/v1/search?q=' + search + '&type=track&limit=20';
            const authInfo = {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }
            const result = await fetch(url, authInfo);
            const data = await result.json();
            return data.tracks.items;
        } 
    },
    async getUserId() {
        const token = await Spotify.getAccessToken();
        if (token) {
            const url = 'https://api.spotify.com/v1/me';
            const authInfo = {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }
            const result = await fetch(url, authInfo);
            const data = await result.json();
            console.log(data);
            return data;
        }
    },
    async authorizeUser() {
        const authorizeURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=code&redirect_uri=${redirectURI}&scope=user-read-private%20user-read-email`;
        window.location.href = authorizeURL;
    }
}

export default Spotify;
