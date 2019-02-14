import axios from "axios";

function userregister() {
  return {
    type: "REGISTER_USER"
  };
}
function userlogin(data) {
  return {
    type: "REGISTER_USER",
    payload: data
  };
}
export const registerUser = data => {
  console.log(data);
  return dispatch => {
    axios
      .post("https://pacific-gorge-27806.herokuapp.com/users/register", data)
      .then(function(response) {
        dispatch(userregister());
        console.log(response.data);
      })
      .catch(function(error) {
        console.log("Post Error : " + error);
      });
  };
};
export const loginUser = data => {
  console.log(data);
  return dispatch => {
    axios
      .post(
        "https://pacific-gorge-27806.herokuapp.com/users/authenticate",
        data
      )
      .then(function(response) {
        dispatch(userlogin(response.data));
        console.log(response.data);
      })
      .catch(function(error) {
        console.log("Post Error : " + error);
      });
  };
};
