import s from './Hero.module.scss';
import HeroImg from '../../icons/hero.png';
import MailIcon from '@mui/icons-material/Mail';

export const Hero = () => {
    return <div className={s.root}>

        <div className={s.left}>
            <p className={s.headingFirst}>
            You don’t have to 
            <span className={s.headingSecond}>    Fight them Alone.</span>
            </p>
            <p className={s.bodyText}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.
            </p>

            <div className={s.emailBox}>
                <div className={s.left}>
                    <MailIcon style={{color:"#5f5f5f"}}/>
                    <span className={s.label}>Enter your email address</span>
                </div>
                <button className={s.talkButton}>
                    <p>Let's Talk</p>
                </button>
            </div>
        </div>
        <div className={s.right}>
            <img src={HeroImg} alt="" className={s.heroImg}/>
        </div>
    </div>
}