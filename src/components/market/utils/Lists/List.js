import React from "react";
import "./List.css";
import Listitem from "./Item/Listitem";

const List = ({ list }) => {
  return (
    <>
      <div className=" grid grid-cols-3 gap-8">
        {list.map((item) => (
          <Listitem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default List;
