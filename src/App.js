import './App.css';
import Character from "./Components/Character/character";

function App() {
    return (
        <div>
            <Character name={'barT'}
            desc={'llalallall'}
            picture={'https://www.softzone.es/app/uploads/2016/06/Bart-Simpson.png'}/>

            <Character name={'hoMer'}
                       desc={'dou'}
                       picture={'https://www.softzone.es/app/uploads/2016/06/Bart-Simpson.png'}/>
        </div>
    );
}

export default App;