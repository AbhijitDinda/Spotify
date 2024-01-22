import React, { useEffect } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";
import { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/Constants";
import axios from "axios";

function Spotify() {
  const [state, dispatch] = useStateProvider();
  const { token } = state;

  useEffect(() => {
    const getUserinfo = async () => {

      const { data } = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: ` Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });


      const userInfo = {
        name: data.display_name,
        userId: data.id,
        userUrl: data.external_urls.spotify,
        userImage: data.images[0].url,
      };
      // console.log(userInfo.userImage)
      dispatch({ type: reducerCases.SET_USER, userInfo });
    };

    getUserinfo();
  }, [token, dispatch]);
  return (
    <Container>
      <div className="spotify__body">
        <Sidebar />
        <div className="body">
          <Navbar />
          <div className="body__contents">
            <Body />
          </div>
        </div>
      </div>
      <div className="spotify__footer">
        <Footer />
      </div>
    </Container>
  );
}
const Container = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: 85vh 15vh;
  .spotify__body {
    display: grid;
    grid-template-columns: 15vw 85vw;
    height: 100%;
    width: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 1));
    background-color: rgb(32, 87, 100);
    .body {
      height: 100%;
      width: 100%;
      overflow: auto;
      &::-webkit-scrollbar {
        width: 0.7rem;
        max-height: 2rem;
        &-thumb {
          background-color: rgba(255, 255, 255, 0.6);
        }
      }
    }
  }
`;

export default Spotify;