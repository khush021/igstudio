import s from "./Introduction.module.scss";

export const Introduction = () => {
  return (
    <div className={s.root}>
      <div className={s.left}>
        <p className={s.heading}> Let's Introduce Ourself</p>
      </div>
      <div className={s.divider} />
      <div className={s.right}>
        <p className={s.subheading}>Criminal Lawyer</p>
        <p className={s.body}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
};
