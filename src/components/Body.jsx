import '../css/Body.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import ItemDetailList from '../containers/ItemDetailList';
import ItemListContainter from '../containers/ItemListContainer';


const Body = () => {
    return (
        <div className="bodyProp">
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<ItemListContainter />} />
                    <Route path="/collection/:collectionClass" element={<ItemListContainter />} />
                    <Route path="/details/:id" element={<ItemDetailList />} />
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
            </BrowserRouter>
        </div>
        
    )
}

export default Body;