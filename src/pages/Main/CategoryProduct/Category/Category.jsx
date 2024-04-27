import React from 'react';
import BtnTertiary from "../../../../components/UI/buttons/tertiary/BtnTertiary";
import classes from './Category.module.css'
import Skeleton from "../../../../components/UI/skeleton/Skeleton";
import {useNavigate} from "react-router-dom";

const Category = ({name, img, link}) => {
    const router = useNavigate()
    return (
        <div className={classes.category}>
            <h3>{name}</h3>
            <Skeleton
                src={img}
                alt={name}
                classNameImage={classes.image}
                classNameSkeleton={classes.skeleton}
            />
            <BtnTertiary onClick={() => router(`/products/${link}`)}>Переглянути товари</BtnTertiary>
        </div>
    );
};

export default Category;