import s from "./NewsLetter.module.scss";
export const NewsLetter = () => {
  return (
    <div className={s.root}>
      <p className={s.heading}> Subscribe Our Newsletter</p>

      <div className={s.body}>
        <input placeholder="Name" className={s.nameIp} />
        <input placeholder="Enter your email" className={s.emailIp} />

        <button >SEND</button>
      </div>
    </div>
  );
};
