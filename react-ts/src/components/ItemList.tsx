import {FC} from "react";
import {ITodo} from "./List";

interface ItemProps {
    todos: ITodo

    toggleComplete(id: number): void

    removeItem(id: number): void
}

const ItemList: FC<ItemProps> = ({todos, toggleComplete, removeItem}) => {
    let classes: string = ''

    if (todos.completed) {
        classes = "completed"
    }
    else classes = ''

    return (
        <div className="listItem">
            <label>
                <input
                    onChange={toggleComplete.bind(null, todos.id)}
                    type="checkbox"
                    className="filled-in"
                    checked={todos.completed}/>
                <span className={classes}>{todos.title}</span>
            </label>
            <button className="buttonDelete" onClick={removeItem.bind(null, todos.id)}>
                <i className="material-icons red-text">delete</i>
            </button>
        </div>
    )
}

export default ItemList