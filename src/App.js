import './/css/App.css'
import React from 'react';
import Button from '@mui/material/Button';
import Postcard from './components/Forum_components/Postcard.jsx'
import Header from './components/Forum_components/Header.jsx';

function App() {

    return (
        <>
        <Header />
        <div className="App">

            <Button variant="contained" color="primary">

                Hello World

            </Button>
        </div>
        <Postcard />
        </>
    );

}


export default App;



