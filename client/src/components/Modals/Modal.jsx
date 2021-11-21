import React from "react";
import {motion} from 'framer-motion';
const Modal = ({selectedImg, setSelectedImg}) =>{
    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')) { //to avoid closing of image on clicking the image
        setSelectedImg(null);
    }}
    return (
        <motion.div className = "backdrop" onClick ={handleClick}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.2}}>
            <motion.img src={selectedImg} alt="enlarged" 
            initial={{y:"-100vh"}}
            animate={{y: 0}}/>
        </motion.div>
    )
}

export default Modal;