import './/css/App.css'
import Button from '@mui/material/Button';
import Header from './components/Forum_components/Header.jsx';
import Homefeed from './components/Forum_components/Homefeed.jsx';


function App() {

    return (
        <>
        <Header />
        <div className="App">

            <Button variant="contained" color="primary">

                Hello World

            </Button>
        </div>
        <Homefeed />
        </>
    );

}


export default App;



