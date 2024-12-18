import React, {Fragment} from 'react';
import classes from './CategoryProduct.module.css'
import Category from "./Category/Category";
import Media from "react-media";
import {connect} from "react-redux";
import MySwiper from "../../../components/UI/primarySwiper/PrimarySwiper";

const CategoryProduct = ({categories}) => {
    const categoriesJSX = categories.map((el) => {
        return <Category key={el.id} link={el.link} id={el.id} name={el.name} img={el.image}/>
    })

    return (
        <section className={classes.wrapper}>
            <Media queries={{
                verySmall: "(max-width: 479px)",
                small: "(min-width: 480px) and (max-width: 999px)",
                medium: "(min-width: 1000px) and (max-width: 1279px)",
                large: "(min-width: 1280px)"
            }}>
                {matches => (
                    <Fragment>
                        {matches.verySmall && <div>
                            <h2>Категорії продукції</h2>
                            <div className={classes.containerForVerySmall}>
                                {categoriesJSX}
                            </div>
                        </div>}
                        {matches.small && <MySwiper title='Категорії продукції' gap={15}>
                            {categoriesJSX}
                        </MySwiper>}
                        {matches.medium && <MySwiper title='Категорії продукції' gap={20}>
                            {categoriesJSX}
                        </MySwiper>}
                        {matches.large && <MySwiper title='Категорії продукції' gap={30}>
                            {categoriesJSX}
                        </MySwiper>}
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