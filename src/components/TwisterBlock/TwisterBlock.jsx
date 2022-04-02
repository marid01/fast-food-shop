import React from 'react';

function TwisterBlock({name, img, price}) {

    return (
        <div className="twister-block">
            <div className="container">
                <div className="twister-block__inner">
                    <img className="twister-block__image" src={img} alt="Твистер"/>
                    <h4>{name}</h4>
                    <div className="twister-block__price">{price}</div>

                </div>
            </div>
        </div>
    );
}

export default TwisterBlock;
