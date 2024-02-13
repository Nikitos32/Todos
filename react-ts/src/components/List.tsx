import { FC, useRef, useState} from "react";
import ItemList from "./ItemList";
import * as React from "react";

export interface ITodo {
    title: string
    id: string,
    completed: boolean
}

const List: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const inputRef = useRef<HTMLInputElement>(null)

    const inputHandler = function (event: React.KeyboardEvent) {
        if (event.key === "Enter") {
            const todoString: ITodo = {
                title: inputRef.current!.value,
                id: new Date().toLocaleTimeString(),
                completed: false,
            }
            setTodos(prevState => [todoString, ...prevState])
            console.log(todos)
            inputRef.current!.value = ''
        }
    }

    return (
        <div>
            <input
                ref={inputRef}
                onKeyDown={inputHandler}
                type="text"
            />
            <section>
                {todos.map((elem) => <ItemList todos={elem}/>)}
            </section>
        </div>
    )
}

export default List