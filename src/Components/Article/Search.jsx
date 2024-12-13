import React from 'react'

const affiche_page= (nombre)=>{
  return [...Array(nombre)].map((_, i) => i + 1);

}
const Search = ({nbr_page, setPage}) => {
  const clickPage = (nombre)=>{
    setPage(nombre)
  }
  return (
    <div className='flex flex-row justify-between p-[5px] text-white bg-[#1e9459] sticky'>
        <div className='flex flex-1 overflow-auto h-full items-center'>
          <span>pages : </span>
          {affiche_page(nbr_page).map((el, index)=>{
          return <div key={index} 
            onClick={()=>clickPage(index+1)}
            className='ml-2 cursor-pointer bg-white text-[#1e9459] transition-all duration-600 hover:bg-[#d4d4d4] w-6 h-6 rounded flex justify-center items-center'>{el}</div>
        })}</div>
        <p>Rechereche</p>
    </div>
  )
}

export default Search