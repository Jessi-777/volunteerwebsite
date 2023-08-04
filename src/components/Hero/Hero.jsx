import React from 'react';
import css from './Hero.module.scss';
import { motion } from 'framer-motion';
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.24}}
    
      className={`innerWidth ${css.container}`}>
{/* START upper elements Automate this in my next update */}
        <div className={css.upperElements}>
          <motion.span 
          variants={fadeIn("right", "tween", 0.1, 1)}
          
          className='primaryText'>
            Hi, <br /> Welcome to Volunteer.co
          </motion.span>
          <motion.span className='secondaryText' variants={fadeIn("left", "tween", 0.4, 1)}>
            {/*  */}
            <br />
        Did you know Volunteering towards helping humanity, animals, water, our beautiful planet is the act of pure gratitude? {""}
          </motion.span>
        </div>
{/* END upper elements */}

{/* START person image element */}
        
        <motion.div 
          variants={fadeIn("up", "tween", 0.2, 1)}
          className={css.person}>
            <motion.img 
            variants={slideIn("up", "tween", 0.2, 1.2 )}
            src='https://res.cloudinary.com/ninjagrvl/image/upload/c_scale,w_349/v1691113282/people-volunteering-donating-money_53876-66112_utua9i.avif' alt="" />
        </motion.div>

{/* END person image element */}

{/* START EMAIL */}
<a className={css.email} href="mailto:angelworkengineering@gmail.com">
    {/* thevolunteer.co */}
</a>
{/* END EMAIL */}

{/* START lower elements */}

        <div className={css.lowerElements}>
        <motion.div 
            variants={fadeIn("right", "tween", 0.3, 1)} 
            className={css.experience}>
            
            <div className="primaryText">2</div>
            <div className="secondaryText">
              <div>Year</div>
            
            </div>
            </motion.div>
        

          <motion.div
           className={css.certificate}
           variants={fadeIn("left", "tween", 0.5, 1)}>
            {/* <img src="./certificate.png" alt="" /> */}
            <span>CERTIFIED VOLUNTEERS</span>
        
          </motion.div>
{/* END lower elements */}
        </div>
        </motion.div>
     
    </section>
  );
};

export default Hero;


