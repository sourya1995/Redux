export default (state, action) => {
    switch (action.type) {
        case "SET_TECHNOLOGY":
            state.tech = action.tech;
            return state;
        default:
            return state;
    }
};