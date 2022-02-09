import axios from "axios";
import { getGamesUrl} from "../api/api";

//Action Creators

export const getAllGames = () => async (dispatch) => {
  //Fetch Axios
  const allGames = await axios.get(getGamesUrl());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      games: allGames.data.results,
    },
  });
};