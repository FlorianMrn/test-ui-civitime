import Colors from "./Colors";
import "./profil.css";
import { ReactComponent as Man } from "../../assets/man.svg";
import { ReactComponent as Women } from "../../assets/woman.svg";
import color88C10F from "../../assets/color-88C10F.svg";
import color533724 from "../../assets/color-533724.svg";
import colorB2C7C7 from "../../assets/color-B2C7C7.svg";
import colorE0A39A from "../../assets/color-E0A39A.svg";
import colorFCCC84 from "../../assets/color-FCCC84.svg";
import colorFCD7B8 from "../../assets/color-FCD7B8.svg";
import colorFF1414 from "../../assets/color-FF1414.svg";
import colorstriped from "../../assets/color-striped.svg";
import skin from "../../assets/skin.svg";
import tshirt from "../../assets/t-shirt.svg";

const Profil = () => {
  const colorsSkins = [colorFCD7B8, colorFCCC84, colorE0A39A, color533724];
  const colorsTshirt = [color88C10F, colorB2C7C7, colorFF1414, colorstriped];

  return (
    <section className="profil">
      <div className="profil-main">
        <header className="profil-header">
          <h1>Profil</h1>
        </header>
        <article className="avatar">
          <h2>Lequel de ces deux avatars préférez-vous ?</h2>
          <div className="avatar-container">
            <Man />
            <Women />
          </div>
          <div className="avatar-line"></div>
        </article>
        <Colors img={skin} colors={colorsSkins} />
        <Colors img={tshirt} colors={colorsTshirt} />
        <div className="button-container">
          <button>valider</button>
        </div>
      </div>
    </section>
  );
};

export default Profil;
