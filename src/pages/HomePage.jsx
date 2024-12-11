import AcerNitro5 from "../assets/4.png";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="max-w-screen-2xl m-auto min-h-[90vh] bg-white border-gray-200 dark:bg-gray-900">
      <h1 className="jaro-font pt-8 text-slate-300 text-center text-7xl">
        TechScout Picks
      </h1>
      <p className="jaro-font text-center text-4xl text-slate-300 p-4 px-8">
        Unveiling the Best Gadgets of the Year
      </p>
      <div className="background">
        <img
          className="bg-white border-gray-200 dark:bg-gray-900"
          src={AcerNitro5}
          alt="acernitro5image"
        />
        <h1 className="jaro-font text-slate-300 text-center text-7xl">
          Acer Nitro 5 AN515-58
        </h1>
        <Link to="/blog">
          <Button />
        </Link>
      </div>
    </div>
  );
};
