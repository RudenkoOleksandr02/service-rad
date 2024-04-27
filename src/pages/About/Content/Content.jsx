import React from 'react';
import {connect} from "react-redux";
import classes from './Content.module.css'
import Block1 from "./Blocks/Block1";
import Block2 from "./Blocks/Block2";

const Content = ({content}) => {
    const blocksJSX = content.map((el, index) => {
        if (index % 2 === 0) {
            return <Block1 key={el.id} title={el.title} image={el.image} text={el.text}/>
        } else {
            return <Block2 key={el.id} title={el.title} image={el.image} text={el.text}/>
        }
    })

    return (
        <section className={classes.wrapper}>
            {blocksJSX}
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        content: state.about.content
    }
}
export default connect(mapStateToProps)(Content);