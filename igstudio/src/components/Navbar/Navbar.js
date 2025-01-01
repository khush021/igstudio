import cLogo from '../../icons/logo.png';
import s from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <div className={s.root}>
      <img src={cLogo} alt="" className={s.logo}/> 
        <div className={s.list}>
            <p className={s.listItem}>Home</p>
            <p className={s.listItem}>Attorneys</p>
            <p className={s.listItem}>Practice areas</p>
            <p className={s.listItem}>About us</p>
        </div> 
        <div>
            <button className={s.button}> <p className={s.label}>Contact Now </p></button>
        </div>

    
    </div>
  );
};
