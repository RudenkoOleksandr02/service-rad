import React from 'react';
import BtnTertiary from "../../../components/UI/buttons/tertiary/BtnTertiary";
import {useNavigate} from "react-router-dom";
import classes from './Category.module.css'
import Skeleton from "../../../components/UI/skeleton/Skeleton";

const Category = ({title, img, link}) => {
    const route = useNavigate()

    return (
        <div className={classes.category}>
            <h3>{title}</h3>
            <Skeleton
                src={img}
                alt={title}
                classNameSkeleton={classes.skeleton}
                classNameImage={classes.image}
            />
            <BtnTertiary onClick={() => route(`/products/${link}`)}>Переглянути товари</BtnTertiary>
        </div>
    );
};

export default Category;