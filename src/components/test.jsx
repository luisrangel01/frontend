import { useState } from "react";

export const Search = () => {
  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon",
  ];

  const [filterList, setFilterList] = useState(list);

  const handleSearch = (event) => {
    const text = event.target.value.toLowerCase();

    if (text.length === 0) {
      setFilterList(list);
      return true;
    }

    const newList = list.filter((element) => {
      return element.toLowerCase().indexOf(text) !== -1;
    });

    setFilterList(newList);
  };

  return (
    <>
      <input type="text" onChange={handleSearch} />
      {filterList.map((element) => {
        return <div>{element}</div>;
      })}
    </>
  );
};
