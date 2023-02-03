import { Component } from "react";
const monsters = [
  {
    id: "name1",
    name: "Jack Griffy",
  },
  {
    id: "name2",
    name: "Tommy Hilfiger",
  },
  {
    id: "name3",
    name: "Dave Gray",
  },
  {
    id: "name4",
    name: "Mosh Hamedani",
  },
  {
    id: "name5",
    name: "Net Ninja",
  },
  {
    id: "name6",
    name: "Emmanuel Oyeyinka",
  },
  {
    id: "name7",
    name: "Javascrip Dev",
  },
  {
    id: "name8",
    name: "Daddy Loyal",
  },
];

const CardList = () => {
  return (
    <div className="card-list w-[85vw] my-0 mx-auto grid grid-cols-4 gap-5">
      {monsters.map((monster) => (
        <div className="card-container mx-auto max-w-md flex flex-col bg-[#95dada] border border-gray-500 rounded-md p-[25px] cursor-pointer translate-x-0 ease-in hover:scale-105" key={monster.id}>
          <img
            src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
            alt={monster.name}
            className="mx-auto"
          />
          <h2 className="mx-auto text-center">{monster.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default CardList;
