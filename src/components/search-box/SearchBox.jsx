import { useState } from "react";
const monsters = [
    {
      id: "name1",
      name: "Jack Griffy",
    },
    {
      id: "name2",
      name: "Tommy Hilfiger",
    },
  ];

const SearchBox = () => {
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  return (
    <section className="search-box">
      <div className="text-center">
        <input
          className="searchbox border-none outline-none p-[10px] w-[150px] leading-[30px] mb-[30px] appearance-none"
          type="search"
          placeholder="search monsters" 
          onChange={(event) => {
            const filterMonsters = monsters.filter((monster) =>
              monster.name
                .toLowerCase()
                .includes(event.target.value.toLowerCase())
            );
            setFilteredMonsters(filterMonsters);
          }}
        />
        {/* {filteredMonsters.map((monsters, index) => (
          <div key={monsters.id}>
            <h1 className="app-title text-5xl font-semibold text-center mx-auto my-1">
              {monsters.name}
            </h1>
          </div>
        ))} */}
      </div>
    </section>
  );
};

export default SearchBox;
