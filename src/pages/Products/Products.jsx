import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import {getProducts} from "../../store/products-reducer";
import Product from "./Product/Product";
import classes from './Products.module.css'
import Breadcrumbs from "../../components/UI/breadcrumbs/Breadcrumbs";
import Preloader from "../../components/UI/preloader/preloader";

const Products = ({products, categoryName, getProducts}) => {
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();

    useEffect(() => {
        setIsLoading(true);

        getProducts(params.id)
            .then(() => setIsLoading(false))
    }, [params.id])

    if (isLoading) return <Preloader/>

    const productsJSX = products.map((product) => {
        return <Product key={product.id} description={product.description} title={product.title} img={product.image}/>
    })

    return (
        <section className={classes.wrapper}>
            <Breadcrumbs links={[
                {title: 'Продукція', path: 'products'},
                {title: categoryName, path: params.id}
            ]}/>
            <h1>{categoryName}</h1>
            {productsJSX}
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        categoryName: state.products.categoryName
    }
}

export default connect(mapStateToProps, {getProducts})(Products);