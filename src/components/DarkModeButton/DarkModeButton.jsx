import styles from "./DarkModeButton.module.scss";
// icons
import Moon from "@/components/Icons/Moon";
import Sun from "@/components/Icons/Sun";

const DarkModeButton = ({ darkMode, setDarkMode }) => {
  return (
    <div className={styles.darkModeToggle}>
      <div
        className={`${styles.darkModeToggle_button} ${
          darkMode ? styles.darkButton : ""
        }`}
        onClick={() => {
          setDarkMode((prev) => !prev);
        }}
      >
        <div
          className={`${styles.switch_circle} ${
            darkMode ? styles.darkmode : ""
          }`}
        >
          {darkMode ? <Sun /> : <Moon />}
        </div>
      </div>
    </div>
  );
};

export default DarkModeButton;