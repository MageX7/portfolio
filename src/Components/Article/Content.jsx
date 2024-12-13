import React, { useEffect } from 'react'

const Content =  ({data}) => {

    return (
        <div 
            className='flex flex-row flex-wrap justify-evenly gap-[10px] p-[10px] overflow-auto'
        >{data.map((post, index)=>{
            return (
                <div key={index} className='flex flex-col gap-[10px] w-[300px] p-2 bg-white rounded-md'>
                    <div>
                        <h3>{post.title}</h3>
                        <p>{post.publishedAt}</p>
                    </div>
                    <div>
                        <img className='max-w-full max-h-full w-auto h-auto object-contain' src={post.image} alt={post.slug}/>
                    </div>
                </div>
            )
        })}</div>
    )
}

export default Content