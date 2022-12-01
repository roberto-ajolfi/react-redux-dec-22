import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStateToolkit } from "../store/toolkit/store";
import { toggleDarkMode } from "../store/toolkit/themeSlice";
// import { toggleDarkMode } from "../store/plain/actions";
// import { AppState } from "../store/plain/reducers";

export const DarkModeSelector = () => {
  const darkMode = useSelector<AppStateToolkit, boolean>(
    (state) => state.theme.darkMode
  );
  const dispatch = useDispatch();

  return (
    <div>
      <FontAwesomeIcon
        icon={darkMode ? faSun : faMoon}
        color={darkMode ? "goldenrod" : "black"}
        size={"lg"}
        onClick={() => dispatch(toggleDarkMode())}
      />
    </div>
  );
};
