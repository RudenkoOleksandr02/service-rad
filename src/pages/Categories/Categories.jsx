import React from 'react';
import {connect} from "react-redux";
import Category from "./Category/Category";
import classes from './Categories.module.css'
import Breadcrumbs from "../../components/UI/breadcrumbs/Breadcrumbs";

const Categories = ({categories}) => {
    const categoriesJSX = categories.map(category => {
        return <Category key={category.id} title={category.name} img={category.image} link={category.link}/>
    })

    return (
        <section className={classes.wrapper}>
            <Breadcrumbs links={[
                {title: 'Продукція', path: '/products'}
            ]}/>
            <h1>Продукція</h1>
            <div className={classes.categories}>
                {categoriesJSX}
            </div>
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        categories: state.categories.categories
    }
}
export default connect(mapStateToProps)(Categories);