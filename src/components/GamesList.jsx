import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGames } from "../actions/gamesActions";

const GamesList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllGames());
    }, [dispatch]);

    const { games } = useSelector(
        (state) => state.games
      );
    return(
        <div>
            {games.map((game)=>(<div>{game.name}</div>))}
        </div>
    );
}

export default GamesList;