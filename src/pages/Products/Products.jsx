import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import {getProducts} from "../../store/products-reducer";
import Product from "./Product/Product";
import classes from './Products.module.css'
import Breadcrumbs from "../../components/UI/breadcrumbs/Breadcrumbs";
import Preloader from "../../components/UI/preloader/preloader";
import {Helmet, HelmetProvider} from "react-helmet-async";

const Products = ({products, categoryName, getProducts, categories}) => {
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();
    const category = categories.filter(category => category.name === categoryName);
    const metaKeys = category[0]?.["meta_keys"];
    const metaDescription = category[0]?.["meta_description"];

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
            <HelmetProvider>
                <Helmet>
                    <meta name="description"
                          content={metaDescription}
                    />
                    <meta name="keywords"
                          content={metaKeys}
                    />
                </Helmet>
            <Breadcrumbs links={[
                {title: 'Продукція', path: 'products'},
                {title: categoryName, path: params.id}
            ]}/>
            <h1>{categoryName}</h1>
            {productsJSX}
            </HelmetProvider>
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        categoryName: state.products.categoryName,
        categories: state.categories.categories
    }
}

export default connect(mapStateToProps, {getProducts})(Products);