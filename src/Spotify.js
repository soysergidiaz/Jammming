const clientID = '47dc98e7d16744ac983392be8a5f06f8';
const secretID = 'e774910e3940483ab46772cae2d3b552';
const redirectURI = 'http://localhost:3000';

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
        const token = await Spotify.getUserAccessToken();
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
            return data;
        }
    },
    async getUserAccessToken() {
        // Verificar si ya tenemos un token de acceso almacenado en el almacenamiento local
        const storedToken = localStorage.getItem('spotifyAccessToken');
        if (storedToken) {
            return storedToken;
        }
    
        // Si no hay un token de acceso almacenado, obtener el código de autorización del parámetro de consulta de la URL
        const params = new URLSearchParams(window.location.search);
        const authorizationCode = params.get('code');
    
        // Si tenemos un código de autorización, intercambiarlo por un token de acceso
        if (authorizationCode) {
            const tokenUrl = 'https://accounts.spotify.com/api/token';
            const authInfo = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `grant_type=authorization_code&code=${authorizationCode}&redirect_uri=${encodeURIComponent(redirectURI)}&client_id=${clientID}&client_secret=${secretID}`
            };
    
            const response = await fetch(tokenUrl, authInfo);
            const data = await response.json();
    
            // Almacenar el token de acceso en el almacenamiento local para futuros usos
            localStorage.setItem('spotifyAccessToken', data.access_token);
            
            // Limpiar el código de autorización de la URL para evitar problemas de seguridad
            window.history.replaceState({}, document.title, '/');
            
            return data.access_token;
        } else {
            // Si no tenemos un código de autorización, redirigir al usuario a la página de autorización de Spotify
            const scopes = 'user-read-private user-read-email playlist-modify-private playlist-modify-public';
            const authorizeURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=code&redirect_uri=${encodeURIComponent(redirectURI)}&scope=${scopes}`;
            window.location.href = authorizeURL;
        }
    },
    async sendPlaylist(title, playlist) {
        const token = await Spotify.getUserAccessToken();
        const userId = await this.getUserId();
        if(token && userId) {
            const url = `https://api.spotify.com/v1/users/${userId.id}/playlists`;
            const authInfo = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify({
                    'name': title,
                    'description': 'Playlist created by Jammming!',
                    'public': false
                })
            }
            const response = await fetch(url, authInfo);
            const data = await response.json();

            const urlAdd = 'https://api.spotify.com/v1/playlists/' + data.id + '/tracks';
            const authInfoAdd = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify({
                    'uris': playlist,
                    'position': 0
                })
            }
            await fetch(urlAdd, authInfoAdd);
        }
    }
}

export default Spotify;
