import {reducerCases} from './Constants'
export const initialstate = {
    token:null,
    playlists: [],
    userInfo: null,
    selectedPlaylistId: "4qrPoK9Ll4b3qorAbjZntN",
}

const reducer =(state,action)=>{
    switch (action.type) {
      case reducerCases.SET_TOKEN: {
        return {
          ...state,
          token: action.token,
        };
      }

      case reducerCases.SET_PLAYLISTS:
        return {
          ...state,
          playlists: action.playlists,
        };

      case reducerCases.SET_USER:
        return {
          ...state,
          userInfo: action.userInfo,
        };

        case reducerCases.SET_PLAYLIST_ID:
          return {
            ...state,
            selectedPlaylistId: action.selectedPlaylistId,
          };  

      default:
        return state;
    }

}

export default reducer;