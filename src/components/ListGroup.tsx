import { MouseEvent } from "react";

export default function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let selectedIndex = 0;

  //Event handler for click event
  const handleCLick = (e: MouseEvent) => {
    console.log(e);
  };

  return (
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>No items found</p> : null} */}
      {items.length === 0 && <p>No items found</p>}
      <ul
        className={
          selectedIndex === index ? "list-group-item active" : "list-group-item"
        }
      >
        {items.map((item, index) => (
          <li
            className="list-group-item active"
            key={item}
            onClick={handleCLick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
