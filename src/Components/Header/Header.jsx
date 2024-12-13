import React, {useEffect, useRef} from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Header = () => {
    const liens = [
        {link: "/", titre:"Accueil"},
        {link: "/articles", titre:"Articles"},
        {link: "/a-propos", titre:"A propos"},
        {link: "/contacts", titre:"Contact"},
    ]

    const mouseEnter = (target)=>{
        const ligne = target.parentNode.lastChild
        ligne.classList.remove("w-0")
        ligne.classList.add("w-full")
    }

    const mouseLeave = (target)=>{
        if(!Array.from(target.classList).includes("active")){
            const ligne = target.parentNode.lastChild
            ligne.classList.remove("w-full")
            ligne.classList.add("w-0")
        }
    }

    const click = (target)=>{
        Array.from(target.parentNode.parentNode.children).forEach(lien=>{
            const ligne = lien.lastChild
            ligne.classList.remove("w-full")
            ligne.classList.add("w-0")
        })
        const ligne = target.parentNode.lastChild
        ligne.classList.remove("w-0")
        ligne.classList.add("w-full")
    }
    
    const nav_ref = useRef()

    useEffect(()=>{
        const liste = Array.from(nav_ref.current.children)
        liste.forEach(lien =>{
            if(Array.from(lien.firstChild.classList).includes("active")){
                click(lien.firstChild)
            }
        })
    },[])

    return (
        <div className='flex w-full flex-col bg-[#222222] text-white sticky top-0 z-10'>
            <h1 className='w-full text-center text-[25px]'>Application Blog</h1>
            <nav ref={nav_ref} className='flex flex-row w-full justify-center p-[5px]'>
                {liens.map((lien, index)=>{
                    return <div key={index}
                    className='relative flex flex-col items-center p-[10px] ml-[10px] mr-[10px] '
                    >
                        <NavLink
                            onClick={e=>click(e.target)}
                            onMouseEnter={e=>mouseEnter(e.target)}
                            onMouseLeave={e=>mouseLeave(e.target)}
                            className="w-full h-full pointer transition-all duration-900 hover:text-[#29eb8a]"
                            to={lien.link}
                        >{lien.titre}</NavLink>
                        <div className='w-0 h-[3px] bg-[#29eb8a] rounded-lg
                            transition-all duration-900 
                        '></div>
                    </div>
                })}
            </nav>
        </div>
    )
}

export default Header