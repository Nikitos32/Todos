import {FC} from "react";
import {ITodo} from "./List";

interface ItemProps {
    todos: ITodo
}

const ItemList: FC<ItemProps> = ({todos}) => {
    return (
        <div>
            <label>
                <input type="checkbox" className="filled-in" checked={todos.completed}/>
                <span>{todos.title}</span>
            </label>
            <i className="material-icons red-text">delete</i>
        </div>
    )
}

export default ItemList