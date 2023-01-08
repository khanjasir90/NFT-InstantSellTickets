import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loggedIn: false,
    userData: {},
    username: "",
    email: "",
    user_id: "",
  },
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state.userData = action.payload.userData;
      // store token in local storage
      window.localStorage.setItem("userData", (action.payload.userData.username));
      state.username = action.payload.userData.username;
      state.email = action.payload.userData.email;
      state.user_id = action.payload.userData._id;

    },
    logout: (state, action) => {
      state.loggedIn = false;
      // remove from localstorage
      localStorage.removeItem("userData");
    },
  },
});
export const authActions = authSlice.actions;

export const signup = (data) => {
    return async (dispatch) => {
      console.log(data);
      console.log("pending")
      let response = await fetch("http://localhost:5000/api/user/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let json = await response.json();
      console.log("hello")
      console.log(json);
      if (!response.ok) {
        console.log("failed");
      } else {
        console.log("Success");
      }
    };
  };

  export const signin = (data) => {
    return async (dispatch) => {
        console.log("Logging in");
        let response = await fetch("http://localhost:5000/api/user/login", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        let json = await response.json();
        console.log(json);
        if (!response.ok) {
            console.log("Failed");
        } else {
            dispatch(authActions.login({ userData: json.data }))
            console.log("Success");
        }
    }
}


export default authSlice;