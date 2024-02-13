import {FC} from "react";
import Navbar from "./components/Navbar";
import List from "./components/List";

const App: FC = () => {
    return (
        <div className="app">
            <Navbar />
            <List />
        </div>
    )
}

export default App
