import React from 'react';
import classes from './Advantages.module.css'
import Block from "./Block/Block";
import vector1 from './../../../img/Vector1.png'
import vector2 from './../../../img/Vector2.png'
import vector3 from './../../../img/Vector3.png'
import vector4 from './../../../img/Vector4.png'

const Advantages = () => {
    return (
        <section className={classes.wrapper}>
            <h2>Переваги співпраці з нами</h2>
            <div className={classes.container}>
                <Block
                    img={vector1}
                    title='Гарантія якості'
                    description='Ми є частиною українського виробництва
                    з міжнародними стандартами, тому знаємо
                    як воно працює і зробимо якнайкраще'
                />
                <Block
                    img={vector2}
                    title='Конструктивна перевага'
                    description='Ми постійно працюємо над вдосконаленням
                    технологій та програмного забезпечення власного виробництва'
                />
                <Block
                    img={vector3}
                    title='Відповідність ціни-якості'
                    description='Ви отримуєте сучасну технологію з
                    відмінною деталізацією за середньостатистичну ціну'
                />
                <Block
                    img={vector4}
                    title='Підтримка'
                    description='Наша підтримка працює 24/7/365
                    і дослуховується до ваших побажань  '
                />
            </div>
        </section>
    );
};

export default Advantages;