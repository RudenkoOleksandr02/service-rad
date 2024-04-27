import React, {Fragment, useEffect, useState} from 'react';
import classes from './CategoryProduct.module.css'
import Slider from "../../../components/UI/slider/Slider";
import Category from "./Category/Category";
import img1 from './img/Emitter.png'
import img2 from './img/Rectangle 28.png'
import img3 from './img/IMG_0081.png'
import Media from "react-media";
import {connect} from "react-redux";
import {getCategories} from './../../../store/categories-reducer'

const CategoryProduct = ({categories}) => {
    const categoriesJSX = categories.map((el) => {
        return <Category key={el.id} link={el.link} id={el.id} name={el.name} img={el.image}/>
    })

    return (
        <section className={classes.wrapper}>
            <Media queries={{
                verySmall: "(max-width: 360px)",
                small: "(min-width: 361px) and (max-width: 768px)",
                medium: "(min-width: 769px) and (max-width: 1000px)",
                large: "(min-width: 1001px)"
            }}>
                {matches => (
                    <Fragment>
                        {matches.verySmall && <div>
                            <h2>Категорії продукції</h2>
                            {categoriesJSX}
                        </div>}
                        {matches.small && <Slider title='Категорії продукції' gap={15}>
                            {categoriesJSX}
                        </Slider>}
                        {matches.medium && <Slider title='Категорії продукції' gap={20}>
                            {categoriesJSX}
                        </Slider>}
                        {matches.large && <Slider title='Категорії продукції' gap={30}>
                            {categoriesJSX}
                        </Slider>}
                    </Fragment>
                )}
            </Media>
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        categories: state.categories.categories
    }
}
export default connect(mapStateToProps)(CategoryProduct);