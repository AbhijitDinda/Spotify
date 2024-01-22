import React from 'react'
import styled from 'styled-components'

export default function Login() {
    const handleClick=()=>{
        const clientId = "9db35e7f91644ed4a4ffe4626c89af86";
        const redirectUrl = "http://localhost:3000/";
        const apiUri = "https://accounts.spotify.com/authorize";

        const scope = [
            "user-read-email",
            "user-read-private",
            "user-modify-playback-state",
            "user-read-playback-state",
            "user-read-currently-playing",
            "user-read-recently-played",
            "user-read-playback-position",
            "user-top-read",
          ];
          window.location.href = `${apiUri}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
            " "
          )}&response_type=token&show_dialog=true`;
    }
  return (
    <Container>
    <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png" alt="bajao" />
    <button onClick={handleClick}>Connect Bajao</button>

    </Container>
  )
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #1db954;
  gap: 5rem;
  img {
    height: 20vh;
  }
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    background-color: black;
    color: #49f585;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
  }
`;

