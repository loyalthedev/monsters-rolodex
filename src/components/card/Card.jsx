import React from 'react'


const Card = ({ monster }) => {
  const { id, name, email } = monster;
  return (
    <div className="card-container mx-auto max-w-md flex flex-col bg-[#95dada] border border-gray-500 rounded-md p-[25px] cursor-pointer translate-x-0 ease-in hover:scale-105" key={monster.id}>
          <img
            src={`https://robohash.org/${id}?set=set2&size=180x180`}
            alt={name}
            className="mx-auto"
          />
          <h2 className="mx-auto text-center">{name}</h2>
          <p className='mx-auto text-center'>{email}</p>
        </div>
  )
}

export default Card;