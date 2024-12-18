import React from 'react';
import classes from './Main.module.css'
import SectionForm from "../../components/common/SectionForm/SectionForm";
import Banner from "./Banner/Banner";
import CategoryProduct from "./CategoryProduct/CategoryProduct";
import Advantages from "./Advantages/Advantages";
import Services from "./Services/Services";
import About from "./About/About";
import Faq from "./Faq/Faq";

const Main = () => {
    return (
        <main className={classes.main}>
            <div className={classes.content}>
                <Banner/>
                <CategoryProduct/>
                <Advantages/>
                <Services/>
                <About/>
                <Faq/>
            </div>
            <SectionForm/>
        </main>
    );
};

export default Main;