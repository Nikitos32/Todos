import {FC, useRef, useState} from "react";
import ItemList from "./ItemList";
import * as React from "react";

export interface ITodo {
    title: string
    id: number,
    completed: boolean
}

const List: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const inputRef = useRef<HTMLInputElement>(null)

    const ToggleCompleted = function (id: number) {
        setTodos(prevState => prevState.map(elem => {
            if (id === elem.id) {
                elem.completed = !elem.completed
            }
            return elem
        }))

    }

    const inputHandler = function (event: React.KeyboardEvent) {
        if (event.key === "Enter") {
            const todoString: ITodo = {
                title: inputRef.current!.value,
                id: Date.now(),
                completed: false,
            }
            setTodos(prevState => [todoString, ...prevState])
            inputRef.current!.value = ''
        }
    }

    const buttonHandler = function () {
        const todoString: ITodo = {
            title: inputRef.current!.value,
            id: Date.now(),
            completed: false,
        }
        setTodos(prevState => [todoString, ...prevState])
        inputRef.current!.value = ''
    }

    const removeItem = function (id: number) {
        if (confirm('Вы действительно хотите удалить задачу?')) {
            setTodos(prevState => prevState.filter((todo) => {
                if (id !== todo.id) return todo
            }))
        }
    }

    return (
        <div className="taskSection">
            <input
                className="taskInput"
                ref={inputRef}
                onKeyDown={inputHandler}
                type="text"
                placeholder="Введите задачу"
            />
            <button className="btn" onClick={buttonHandler}>
                Добавить Задачу
                <i className="material-icons right">add</i>
            </button>
            {todos.length === 0 && <span className="emptyList">Добавьте задачу<i className="material-icons">playlist_add</i></span>}
            <section className="list">
                {todos.map((elem) =>
                    <ItemList
                        toggleComplete={ToggleCompleted}
                        todos={elem}
                        key={elem.id}
                        removeItem={removeItem}
                    />
                )}
            </section>
        </div>
    )
}

export default List