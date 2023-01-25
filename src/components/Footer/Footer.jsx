import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion';

const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Are you feeling a call to volunteer? 
          </span>
          <span className="primaryText">
            Let's Connect! <a href="mailto:angelwerkengineering@gmail.com">Contact us</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Volunteer.co</span>
            <p>555 Las Vegas, NV 00000</p>
          </div>
          <ul className={css.menu}>
            <li>Services</li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;