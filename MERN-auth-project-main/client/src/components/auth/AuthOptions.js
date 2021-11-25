import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";

export default function AuthOptions() {
  const { userData, setUserData } = useContext(UserContext);

  const history = useHistory();

  const register = () => history.push("/register");
  const login = () => history.push("/login");
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
    history.push("/");
  };

  const article = () => {
    history.push('/');
  };

  const storyCollection = () => {
    history.push('/story-collection');
  };

  return (
    <nav className="auth-options">
      {userData.user ? (
        <>
          <button onClick={article}>Article</button>
          <button onClick={storyCollection}>Story Collection</button>
          <button onClick={logout}>Log out</button>
        </>
      ) : (
        <>
          <button onClick={login}>Log in</button>
          <button onClick={register}>Sign up</button>
        </>
      )}
    </nav>
  );
}
