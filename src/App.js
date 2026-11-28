import './/css/App.css'
import Header from './components/Forum_components/Header.jsx';
import Homefeed from './components/Forum_components/Homefeed.jsx';
import { Routes, Route } from 'react-router-dom'
import PostPage from './components/pages/PostPage.jsx';

function App() {

    return (
        <>
        <Header />
        <Routes>
            <Route path="/" element={<Homefeed />}/>
            <Route path="/post/:id" element={<PostPage />}/>
        </Routes>
        </>
    );

}


export default App;



