import s from "./Logo.module.css";
import Logo3 from "/Logo3.png";

const Logo = () => {
  return (
    <div className={s.logo}>
      <img src={Logo3} alt="Oleh Shyian Logo" />
    </div>
  );
};

export default Logo;
