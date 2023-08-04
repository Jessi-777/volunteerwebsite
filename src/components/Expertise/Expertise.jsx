import React from 'react';
import css from './Experties.module.scss';
import { projectExperience, HowDoIHelp } from '../../utils/data';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion";
// slideIn,

const Expertise = () => {
  return (
    <motion.section 
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={css.wrapper}>


    <a className="anchor" id="work"></a>

      <div
        className={`paddings yPaddings innerWidth flexCenter ${css.container}`}
      >
        <div className={css.leftSide}>
          {projectExperience.map((exp, i) => {
            return (
                
              <motion.div
              variants={fadeIn("right", "tween", (i+1)*0.2, 1)} 
              className={css.exp} key={i}>
                <div className="flexCenter" style={{background: exp.bg}}>
                  {/* //icons */}
                  <exp.icon size={25} color="white" />
                </div>

                <div>
                  <span>{exp.name}</span>
                  <span className='secondaryText'>{exp.projects} Volunteers</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
        variants={textVariant(0.4)}
        className={css.rightSide}>
        <span className='primaryText'>How can we help? </span>
        <p> You are ready to give back? We got you! Choose what kind of voluteer work, you'd like to do.  
          Once, you confirm your quest. Out team will match you with your mission and schedule your volunteer day! Helping humanity and our beautiful planet is a blessing. 
        </p>
        {HowDoIHelp.map((paragraph, i) => {
                return (
                <span className='secondaryText' key={i}>
                    {paragraph}
                </span>
                );
            })}

        <div className={`flexCenter ${css.stats}`}>
            <div className={`flexCenter ${css.stat}`}>
                <span className='primaryText'>16+</span>
                <span className='secondaryText'>Volunteers</span>
            </div>

            <div className={`flexCenter ${css.stat}`}>
                <span className='primaryText'>Let's go! </span>
                <span className='secondaryText'></span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Expertise;
