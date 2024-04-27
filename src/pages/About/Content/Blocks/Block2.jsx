import React from 'react';
import classes from "./Blocks.module.css";
import Skeleton from "../../../../components/UI/skeleton/Skeleton";

const Block2 = ({title, text, image}) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.inner}>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
            <div className={classes.wrapSkeleton}>
                <Skeleton
                    src={image}
                    alt={title}
                    classNameSkeleton={classes.skeleton}
                    classNameImage={classes.image}
                />
            </div>
        </div>
    );
};

export default Block2;