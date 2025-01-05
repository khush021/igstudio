import s from "./OurTeam.module.scss";
import image1 from "../../icons/team/1.png";
import image2 from "../../icons/team/2.png";
import image3 from "../../icons/team/3.png";
import image4 from "../../icons/team/4.png";
import image5 from "../../icons/team/5.png";
import image6 from "../../icons/team/6.png";

const data = [
  {
    image: image1,
    name: "Danial Def",
    subheading: "301 Cases",
  },
  {
    image: image2,
    name: "Sanfole",
    subheading: "850 Cases",
  },
  {
    image: image3,
    name: "Cesforila",
    subheading: "470 Cases",
  },
  {
    image: image4,
    name: "Colleen",
    subheading: "180 Cases",
  },
  {
    image: image5,
    name: "Haldone",
    subheading: "212 Cases",
  },
  {
    image: image6,
    name: "Nik Jeo",
    subheading: "350 Cases",
  },
];

export const OurTeam = () => {
  return (
    <div className={s.root}>
      <p className={s.heading}> Our Team </p>

      <div className={s.body}>
        {data.map((item) => (
          <div className={s.card}>
            <img src={item.image} alt="" className={s.image} />
            <div className={s.right}>
              <span className={s.name}>{item.name}</span>
              <span className={s.subheading}>{item.subheading}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
