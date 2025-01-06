import s from "./Footer.module.scss";
import cLogo from "../../icons/logo.png";
import { ReactComponent as Icon1 } from "../../icons/share/1.svg";
import { ReactComponent as Icon2 } from "../../icons/share/2.svg";
import { ReactComponent as Icon3 } from "../../icons/share/3.svg";
import { ReactComponent as Icon4 } from "../../icons/share/4.svg";

export const Footer = () => {
  return (
    <div className={s.root}>
      <div className={s.top}>
        <img src={cLogo} alt="" className={s.logo} />
        <div className={s.list}>
          <p className={s.listItem}>Home</p>
          <p className={s.listItem}>Attorneys</p>
          <p className={s.listItem}>Practice areas</p>
          <p className={s.listItem}>About us</p>
        </div>

        <div className={s.icons}>
          <Icon1 />
          <Icon2 />
          <Icon3 />
          <Icon4 />
        </div>
      </div>

      <div className={s.bottom}>
        <span className={s.linkText}>© 2020 Acme. All right reserved.</span>
        <span className={s.linkText}>Privacy Policy</span>
        <span className={s.linkText}>Terms of Service</span>
      </div>
    </div>
  );
};
