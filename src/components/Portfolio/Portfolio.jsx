import React from 'react'
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant} from "../../utils/motion";


const Portfolio = () => {
   return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      {/* <a className="anchor" id="portfolio"></a> */}
   
      <div className={`innerWidth flexCenter ${css.container}`}>
        
        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText"> Our fullfilling Volunteer Experiences</span>
            <p style={{marginTop: "10px"}}>Animal, Commmunity and Planet Volunteer work.</p>
          </div>
          {/* <span className="secondaryText">Explore More Work</span> */}
       </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
            <motion.img variants={fadeIn("up", "tween", .5, .6)} src="https://res.cloudinary.com/ninjagrvl/image/upload/v1691125670/showCase1_ty6qil.jpg" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .7, .6)} src="https://res.cloudinary.com/ninjagrvl/image/upload/v1691125673/showCase2_ney3lo.png" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="https://res.cloudinary.com/ninjagrvl/image/upload/v1691125680/showCase3_gih3zn.png" alt="project" />
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;