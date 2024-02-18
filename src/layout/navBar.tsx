import { motion } from 'framer-motion'

function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='navbar__list'>
        <li className='navbar__list__item'><a href="#">Home</a></li>
        <li className='navbar__list__item'><a href="#">About</a></li>
      </ul>
      <motion.h3
        className='navbar__title'
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5}}
      >
        Baptiste
      </motion.h3>
      <ul className='navbar__list'>
        <li className='navbar__list__item'><a href="#">Services</a></li>
        <li className='navbar__list__item'><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;