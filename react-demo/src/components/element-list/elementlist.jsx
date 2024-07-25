import "./element-list.css";
// import LIST_ITEMS from "../data/list-items/listItems";

const ElementList = ({ header = "default", itemToList = {}, stylename = "" }) => {
  return (
    <div className={stylename}>
      <h3>{header}</h3>
      <ul>
        {itemToList.map((item, i) => (
          <li key={i}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default ElementList;
