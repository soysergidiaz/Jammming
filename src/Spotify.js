const clientID = '47dc98e7d16744ac983392be8a5f06f8';
const secretID = '60d908d5170040678d43034ea31b5a15';
let token;

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
        token = data; 
        return token;       
    },
    async getSongs(search) {
        const token = await Spotify.getAccessToken();
        if(token) {
            const url = 'https://api.spotify.com/v1/search?q=' + search + '&type=track&limit=20';
            const authInfo = {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + token.access_token
                }
            }
            const result = await fetch(url, authInfo);
            const data = await result.json();
            console.log(data.tracks.items);
            return data.tracks.items;
        } 
    }
}

export default Spotify;