import React, { useEffect } from "react";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import {reducerCases} from "../utils/Constants"
import styled from "styled-components";

function Playlist() {
    const [state, dispatch] = useStateProvider();
    const { token,playlists } = state;
  
  
  useEffect(() => {
    const getPlayListData = async () => {
      // console.log("Token:", token);
      try {
        const response = await axios.get(
          "https://api.spotify.com/v1/me/playlists",
          {
            headers: {
              Authorization: ` Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        // console.log(response);
        const { items } = response.data;
        const playlists = items.map(({ name, id }) => {
            // console.log({ name, id });
            return { name, id };
          });
          // console.log(playlists);
          
        dispatch({type:reducerCases.SET_PLAYLISTS,playlists})
        
      } catch (error) {
        console.log(error.message);
    
      }
    };

    getPlayListData();
  }, [dispatch,token]);

  const changeCurrentPlaylist = (selectedPlaylistId) => {
    dispatch({ type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId });
  };

  return (
    <Container>
      <ul>
        {playlists && playlists.map(({ name, id }) => (
          <li key={id} onClick={() => changeCurrentPlaylist(id)}>
              {name}
            </li>
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  color: #b3b3b3;
  height: 100%;
  overflow: hidden;
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    height: 55vh;
    max-height: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.7rem;
      &-thumb {
        background-color: rgba(255, 255, 255, 0.6);
      }
    }
    li {
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        color: white;
      }
    }
  }
`;

export default Playlist;
