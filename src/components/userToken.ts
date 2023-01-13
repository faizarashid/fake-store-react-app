import { useEffect, useState } from "react";
const userToken = () => {
  const [token, setToken] = useState((state: any) => {
    console.log(state);
    return state ? state.loginReducer.token : "";
  });
  const local = localStorage.getItem("userToken");

  useEffect(() => {
    {
      local ? setToken(token) : setToken(undefined);
    }
  }, [local]);

  return [token, setToken];
};

export default userToken;
