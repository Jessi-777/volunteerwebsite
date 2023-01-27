import React, { useState } from 'react';
// useRef
import css from './Header.module.scss';
import { BiPhoneCall, BiMenuAltRight } from 'react-icons/bi';
import useHeaderShadow from '../../hooks/useHeaderShadow';
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import { motion } from 'framer-motion';
import { getMenuStyles, headerVariants } from '../../utils/motion';
import { useRef } from 'react';



const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();
  const menuRef = useRef(null);

  useOutsideAlerter({
    setMenuOpened, menuRef
  });

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`bg-primary paddings ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{boxShadow: headerShadow}}
      >
        
      <div className={`innerWidth ${css.container} flexCenter`}>
        <div className={css.name}>thevolunteer.co</div>
        <ul
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}
          ref={menuRef}
        >
          {/* <li>
            <a href="#experties">Services</a>
          </li> */}
          <li>
            <a href="#work">Services</a>
          </li>
          {/* <li>
            <a href="#portfolio">Portfolio</a>
          </li> */}
          <li>
            <a href="#people">Volunteer  Testimonies</a>
          </li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+001 (369) 333-4444</p>
            <BiPhoneCall size={'40px'} />
          </li>
        </ul>

        {/* for medium and small screens */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
