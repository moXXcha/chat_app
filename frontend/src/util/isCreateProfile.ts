import axios from "axios";

export const isCreateProfile = async (userId: string) => {
  let result = false;
  await axios
    .get("/api/profile", {
      params: {
        id: userId,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        result = true;
      } else {
        result = false;
      }
    })
    .catch((error) => {
      console.log(error);
      result = false;
    });
  return result;
};
