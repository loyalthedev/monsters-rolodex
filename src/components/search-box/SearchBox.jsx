const SearchBox = ({ className, placeholder, onChangeHandler }) => {
  return (
    <section className="search-box">
      <div className="text-center">
        <input
          className={`searchbox ${className} border-none outline-none p-[10px] w-[150px] leading-[30px] mb-[30px] appearance-none`}
          type="search"
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
      </div>
    </section>
  );
};

export default SearchBox;
