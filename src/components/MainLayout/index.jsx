import { useContext } from "react";
import ResultSection from "../ResultSection";
import SearchSection from "../SearchSection";
import { AppContext } from "../../context/AppContext";
import "./index.css";

const MainLayout = () => {
  const { isDarkTheme } = useContext(AppContext);
  return (
    <div
      className={`container ${isDarkTheme && "dark-theme"}`}
      data-testid="main-layout"
    >
      <div
        className="blur"
        style={{
          background: "rgb(166, 221, 240)",
          top: "-10%",
          right: "0px",
        }}
      ></div>
      <div
        className="blur"
        style={{
          background: "rgb(166, 221, 240)",
          top: "36%",
          left: "-6rem",
        }}
      ></div>
      <div className="content">
        <section className="section-wrapper left-section">
          <SearchSection />
        </section>
        <section className="section-wrapper right-section">
          <ResultSection />
        </section>
      </div>
    </div>
  );
};

export default MainLayout;
