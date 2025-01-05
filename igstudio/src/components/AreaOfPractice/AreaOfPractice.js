import image1 from "../../icons/grid/1.png";
import image2 from "../../icons/grid/2.png";
import image3 from "../../icons/grid/3.png";
import image4 from "../../icons/grid/4.png";
import image5 from "../../icons/grid/5.png";
import image6 from "../../icons/grid/6.png";
import s from "./AreaOfPractice.module.scss";

import cn from "classnames";

const data = [
  [
    {
      image: image1,
      title: "BUSINESS LAW",
    },
    {
      image: image2,
      title: "Partnership LAW",
    },
  ],
  [
    {
      image: image4,
      title: "REAL ESTATE LAW",
    },
    {
      image: image3,
      title: "BUSINESS LAW",
    },
  ],
  [
    {
      image: image5,
      title: "LANDLORD DISPUTES",
    },
    {
      image: image6,
      title: "ELDER ABUSE",
    },
  ],
];

export const AreaOfPractice = () => {
  return (
    <div className={s.root}>
      <p className={s.heading}>Area of Practices</p>

      <div className={s.grid}>
        {data?.map((item, idx) => {
          return (
            <div className={cn(s.cards, idx % 2 === 0 ? s.even : s.odd)}>
              <div className={s.first}>
                <img
                  src={item[0].image}
                  alt={item[0].title}
                  className={s.firstImage}
                />
                <p className={s.firstTitle}>{item[0].title}</p>
              </div>
              <div className={s.second}>
                <img
                  src={item[1].image}
                  alt={item[1].title}
                  className={s.secondImage}
                />
                <p className={s.secondTitle}>{item[1].title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
