import Gift from '../../icons/gift.png';
import s from "./WhyChooseUs.module.scss";

const data = [
  {
    title: "98% Success Rate",
    subtitle: "Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
  },
  {
    title: "100% Success Rate",
    subtitle: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
  },
  {
    title: "100% Success Rate",
    subtitle: "Amet minim mollit non deserunt ullamco estsit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
  },
];

export const WhyChooseUs = () => {
  return (
    <div className={s.root}>
      <p className={s.heading}>Why Choose us?</p>

      <div className={s.body}>
        {data.map((item) => (
          <div className={s.card}>
            <img src={Gift} alt="" className={s.gift}/>
            <p className={s.title}>{item.title}</p>
            <p className={s.subtitle}>{item.subtitle}</p>
            <button className={s.readMore}> <p className={s.label}>Read More</p></button>
          </div>
        ))}
      </div>
    </div>
  );
};
