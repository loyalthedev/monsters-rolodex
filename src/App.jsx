import { Component } from "react";
import { unmountComponentAtNode } from "react-dom";
import { useState } from "react";
import CardList from "./components/card-list/cardList";
import SearchBox from "./components/search-box/SearchBox";


function App() {
  return (
    <div className="App bg-gradient-to-r from-blue-500 to-emerald-500 py-6 mx-auto min-h-[100vh]">
      <SearchBox />
      <CardList />
    </div>
  );
}

export default App;
