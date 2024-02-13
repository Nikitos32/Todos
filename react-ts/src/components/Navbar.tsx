import {FC} from "react";

const Navbar: FC = () => {
    return (
        <div className="navBar">
            <h4>TodoList</h4>
            <section className="menu">
                <p><span className="td">Заметки</span> <i className="material-icons">assignment</i></p>
                <p><span className="td">Календарь</span> <i className="material-icons">date_range</i></p>
                <p><span className="td">Архив</span> <i className="material-icons">cloud_download</i></p>
            </section>
        </div>
    )
}

export default Navbar