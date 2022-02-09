const initState = {
    games: [],
  };
  
const gamesReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_GAMES":
            return {
                ...state,
                games: action.payload.games,
            };
        default:
            return { ...state };
    }
};

export default gamesReducer;