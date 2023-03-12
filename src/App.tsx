import '../src/styles/global.scss';
import '../src/styles/custom-antd.scss';
import '../src/styles/font-family.scss';
import DndCalc from './pages';
import {Route, Routes} from 'react-router-dom';
import NotFoundPage from './pages/not-found-page/not-found-page';

function App() {
    return (
        <Routes location={location}>
            <Route path='/' element={<DndCalc/>}/>
            <Route path='/404' element={<NotFoundPage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
    )
}

export default App;