import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main";
import Products from "./pages/Products/Products";
import Categories from "./pages/Categories/Categories";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/products' element={<Categories/>}/>
            <Route path='/products/:id' element={<Products/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/services' element={<Services/>}/>
        </Routes>
    );
};

export default AppRouter;