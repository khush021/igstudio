import image1 from "../../icons/profile/1.png";
import image2 from "../../icons/profile/2.png";
import image3 from "../../icons/profile/3.png";
import s from "./HappyClients.module.scss";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";

const data = [
  {
    image: image1,
    name: "Jane Cooper",
    designation: "Ceo of Hunt",
    review:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
  },
  {
    image: image2,
    name: "Devon Lane",
    designation: "Ceo of Hunt",
    review:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
  },
  {
    image: image3,
    name: "Robert Fox",
    designation: "Ceo of Hunt",
    review:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
  },
  {
    image: image1,
    name: "Jane Cooper",
    designation: "Ceo of Hunt",
    review:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
  },
  {
    image: image2,
    name: "Devon Lane",
    designation: "Ceo of Hunt",
    review:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
  },
  {
    image: image3,
    name: "Robert Fox",
    designation: "Ceo of Hunt",
    review:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
  },
];

export const HappyClients = () => {

  const handleScroll = (dir) => {

    const list = document.getElementById('cards')
    if (list && dir === "left") {
      list.scrollBy({left: -1 * 300 , behavior: "smooth"});
    }

    if (list && dir === "right") {
      list.scrollBy({ left: window.screen.width/3 - 32 , behavior: "smooth"});
    }
  };

  return (
    <div className={s.root}>
      <div className={s.top}>
        <p className={s.heading}>
          What says our <br />
          happy Clients
        </p>

        <div className={s.buttons}>
          <div className={s.arrowBtn} onClick={() => handleScroll("left")}>
            <WestIcon />
          </div>

          <div className={s.arrowBtn} onClick={() => handleScroll("right")}>
            <EastIcon />
          </div>
        </div>
      </div>

      <div className={s.body} id='cards'>
        {data?.map((item) => (
          <div className={s.card}>
            <img src={item.image} alt="" className={s.profileImg} />
            <span className={s.name}>{item.name}</span>
            <span className={s.designation}>{item.designation}</span>
            <span className={s.review}>{item.review}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
