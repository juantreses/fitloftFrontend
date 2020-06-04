import Axios from "axios";

/*****************/
/* INITIAL STATE */
/*****************/
const initialState = {
  isAuthenticated: false,
  error: "",
};

/*********/
/* TYPES */
/*********/
const AUTHENTICATED = "AUTHENTICATED";
const UNAUTHENTICATED = "UNAUTHENTICATED";
const AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR";

/********************/
/* ACTIONS CREATORS */
/********************/
export const signInAction = (email, password, history) => {
  return async (dispatch) => {
    try {
      const res = await Axios.post("https://localhost:8000/login", {
        email,
        password,
      });

      setAuthenticated();
      localStorage.setItem("user", res.data.token);
      history.push("/secret");
    } catch (error) {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: "Ongeldig email of paswoord",
      });
    }
  };
};

export const signUpAction = (email, password, firstName, lastName, history) => {
  return async (dispatch) => {
    try {
      await Axios.post("https://localhost:8000/users", {
        email,
        password,
        firstName,
        lastName,
      });

      signInAction(email, password, history);
    } catch (error) {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: "Oeps, er ging iets mis.",
      });
    }
  };
};

export const signOutAction = (history) => {
  localStorage.clear();
  history.push("/");
  return { type: UNAUTHENTICATED };
};

export const setAuthenticated = () => ({ type: AUTHENTICATED });

/***********/
/* REDUCER */
/***********/
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTHENTICATED:
      return { ...state, isAuthenticated: true };
    case UNAUTHENTICATED:
      return { ...state, isAuthenticated: false };
    case AUTHENTICATION_ERROR:
      return { ...state, isAuthenticated: false, error: payload };
    default:
      return state;
  }
};
