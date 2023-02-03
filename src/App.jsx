import { useState, useEffect } from "react";
import CardList from "./components/card-list/cardList";
import SearchBox from "./components/search-box/SearchBox";

function App() {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log('render')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
  }

  return (
    <div className="App bg-gradient-to-r from-emerald-900 to-blue-900 py-6 mx-auto min-h-[100vh]">
      <h1 className="app-title my-10 mx-auto w-fit text-2xl md:text-7xl font-bold text-[#0ccac4] font-bigelo">
        Monsters Rolodex
      </h1>

      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search monsters" />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
