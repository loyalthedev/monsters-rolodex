import Card from "../card/card";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list w-[85vw] my-0 mx-auto grid grid-cols-4 gap-5">
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
