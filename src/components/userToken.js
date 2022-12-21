import { useEffect, useState } from "react";
const userToken = () => {
  const [token, setToken] = useState();
  const local = localStorage.getItem("userToken");

  useEffect(() => {
    {
      local ? setToken(token) : setToken(null);
    }
  }, [local]);

  return [token, setToken];
};

export default userToken;
