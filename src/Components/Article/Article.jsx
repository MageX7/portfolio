import React, {useState, useEffect} from 'react'
import Search from './Search'
import Content from './Content'
import axios from 'axios'

const fetchData = async ()=>{
    return await axios.get("https://jsonplaceholder.org/posts" )

}

const decoupage = (liste, decoupe)=>{
    return Array.from({length:Math.ceil(liste.length/decoupe)}, (_,i)=>liste.slice(i*decoupe, i*decoupe+decoupe))
}

const toDateObject = (str) => {
    
    const [datePart, timePart] = str.split(" ");
    const [month, day, year] = datePart.split("/");
    let date = new Date(`${year}-${month}-${day}T${timePart}`);
    if(isNaN(date)){
        date = new Date(`${year}-${day}-${month}T${timePart}`); 
        }
    return date 
};

const Article = () => {

  const [page, setPage] = useState(1)
  const [nbr_page, setNbrPage] = useState(1)
  const [data, setData] = useState([])

  
  useEffect(()=>{
    fetchData()
    .then(donnees=>{
        const data_sort = donnees.data.sort((a, b) => toDateObject(b.publishedAt) - toDateObject(a.publishedAt))
        const decoupe = decoupage(data_sort, 30)
        setNbrPage(decoupe.length)
        setData(decoupe[page-1])
    })
}, [page])

  return (
    <>
      <Search nbr_page={nbr_page} setPage={setPage}></Search>
      <Content data={data}></Content>
    </>
  )
}

export default Article