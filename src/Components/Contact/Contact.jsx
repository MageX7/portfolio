import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  
  const reseau = [
    {composant: <FaLinkedin />, lien:"https://mg.linkedin.com/in/eddy-andrisafidy-447743187"}, 
    {composant : <FaFacebookSquare />, lien: "https://www.facebook.com/eddy.andeisafidy/"}
  ];
  const contact = "flex items-center gap-2"
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className='flex-1 flex flex-col items-center justify-center'>
      <h1 className='text-[30px]'>Contactez-moi</h1>
      <div className='flex gap-2'>
        {reseau.map((el, index)=>{
          return <span key={index}
            onClick={()=>openInNewTab(el.lien)}
            className="text-[40px] text-[#326cc2] rounded cursor-pointer transition-all duration-600 hover:text-[#224a86]"
          >{el.composant}</span>
        })}
      </div>
      <div>
        <div className={contact}><FaPhoneAlt></FaPhoneAlt> <span> : +261 34 36 181 02</span></div>
        <div className={contact}><IoMdMail></IoMdMail> <span> : eddynicolas.h@gmail.com</span></div>
      </div>

    </div>
  )
}

export default Contact