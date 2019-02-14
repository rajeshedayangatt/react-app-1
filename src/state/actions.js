import axios from "axios";

function userregister() {
  return {
    type: "REGISTER_USER"
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
