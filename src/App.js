import './App.css';
import Character from "./Components/Character/character";

function App() {
    return (
        <div>
            <Character
                id={1}
                name={'Rick Sanchez'}
                status={'Alive'}
                species={'Human'}
                gender={'Male'}
                origin={'aa'}
                alt={"rick"}
                img={"1"}
            />
        </div>
    );
}

export default App;