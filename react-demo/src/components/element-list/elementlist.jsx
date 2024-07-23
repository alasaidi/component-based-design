import "./element-list.css"
import LIST_ITEMS from "../data/list-items/listItems";

 const ElementList = () => {
    return (
<div className="elementList">
        <ul>
          {LIST_ITEMS.map((item,i)=><li key={i}>{item.value}</li>)}
        </ul>
      </div>
)};

export default ElementList;