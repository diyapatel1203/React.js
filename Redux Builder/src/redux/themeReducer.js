import { THEME } from "./actiontype";

const initialstate = {
    theme: "light",
};
export const themeReducer = (state = initialstate, action) => {
    switch (action.type) {
        case THEME:
            return {theme: action.payload };
        default:
            return state;
    }
};


 