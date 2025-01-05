import s from "./FAQ.module.scss";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

export const FAQ = () => {
  return (
    <div className={s.root}>
      <div className={s.left}>
        <span className={s.heading}>FAQ</span>
        <span className={s.subheading}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </span>
      </div>

      <div className={s.right}>
        <Accordion className={s.accordionEl} defaultExpanded>
          <AccordionSummary
            expandIcon={
              <div className={s.icon}>
                <span className={s.add}>+</span>
              </div>
            }
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span" className={s.aHeading}>
              Do I need a personal injury report?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={s.aDetails}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </AccordionDetails>
        </Accordion>
        <Accordion className={s.accordionEl}>
          <AccordionSummary
            expandIcon={
              <div className={s.icon}>
                <span className={s.add}>+</span>
              </div>
            }
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span" className={s.aHeading}>
              How much is my case worth?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={s.aDetails}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion className={s.accordionEl}>
          <AccordionSummary
            expandIcon={
              <div className={s.icon}>
                <span className={s.add}>+</span>
              </div>
            }
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography component="span" className={s.aHeading}>What should I do right after car accidect</Typography>
          </AccordionSummary>
          <AccordionDetails className={s.aDetails}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion className={s.accordionEl}>
          <AccordionSummary
            expandIcon={
              <div className={s.icon}>
                <span className={s.add}>+</span>
              </div>
            }
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography component="span" className={s.aHeading}>How much is my case worth?</Typography>
          </AccordionSummary>
          <AccordionDetails className={s.aDetails}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
