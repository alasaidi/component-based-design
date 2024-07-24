import "./bad-list.css"
import LIST_ITEMS from "../data/list-items/listItems";

 const BadList = ({header="default"}) => {
    return (
<div className="badList">
<h3>
          {header}
        </h3>
        <ul>
          {LIST_ITEMS.map((item,i)=><li key={i}>{item.value}</li>)}
        </ul>
      </div>
)};

export default BadList;