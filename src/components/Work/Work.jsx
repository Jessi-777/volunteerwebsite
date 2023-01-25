import React from "react";
import css from "./Work.module.scss"
import { motion } from 'framer-motion';
import { fadeIn, slideIn, staggerContainer, textVariant2, staggerChildren } from "../../utils/motion";
import {workExp} from "../../utils/data.js";
import { textVariant2, zoomIn } from "../../utils/motion";
// draw,  zoomIn

const Work = () => {
    return(
        <motion.section 
        viewport={{ once: false, amount: 0.25 }}
        initial="hidden"
        whileInView="show"
        variants={staggerChildren}
        className={`paddings ${css.wrapper}`}>
            <a className="anchor" id="work"></a>
    
            <div className={`flexCenter innerWidth ${css.container}`}>
                <span className="primaryText ypaddings">Our Volunteering Experience</span>

                <div className={`flexCenter ${css.experiences}`}>
                    {workExp.map((exp, i) => {

                        return ( 
                            <motion.div variants={textVariant2} key={i} className={`flexCenter ${css.exp}`}>
                            <div className={css.post}>
                                <h1>{exp.place}</h1>
                                <p>{exp.tenure}</p>
                            </div>
                            <div className={css.role}>
                                <h1>{exp.role}</h1>
                                <p>{exp.detail}</p>
                            </div>
                            </motion.div>
                        );
                    })}
            {/* </div> */}
            <motion.div variants={zoomIn(1, 1)} className={css.progressbar}>
            <motion.div variants={fadeIn("down", "tween", 2, 1.5)} className={css.line}></motion.div>
            <div><div className={css.circle} style={{background: "#070807"}}></div></div>
            <div><div className={css.circle} style={{background: ""}}></div></div>
            <div><div className={css.circle} style={{background: "#EEC048"}}></div></div>
          </motion.div>
         </div>
        </div>
        </motion.section>
    )
}

export default Work;