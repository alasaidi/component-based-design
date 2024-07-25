import "./favorite-list.css"
// import LIST_ITEMS from "../data/list-items/listItems";

 const FavoriteList = ({header="default",itemToList={}}) => {
    return (
<div className="favoriteList">
        <h3>
          {header}
        </h3>
        <ul>
          {itemToList.map((item,i)=><li key={i}>{item.value}</li>)}
        </ul>
      </div>
)};

export default FavoriteList;