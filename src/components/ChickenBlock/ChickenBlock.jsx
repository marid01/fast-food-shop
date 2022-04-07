import React, {useEffect, useState} from 'react';
import Button from "../Button";
import ButtonBasket from "../ButtonBasket";
import {useDispatch, useSelector} from "react-redux";
import {minusBasketItem} from "../../redux/reducers/basket";

function ChickenBlock ({id, name, img, price, onClickAddItems, addedCount}) {
    const dispatch = useDispatch()
    const order = useSelector(({basket}) => basket.items);
    const [buttonStatus, setButtonStatus] = useState(true)
    const changeButtonStatus = (boolean) => {
        setButtonStatus(boolean)
    }

    useEffect(() => {
        if (Object.keys(order).length === 0) {
            setButtonStatus(true)
        }
    },[order])

    const onAddItems = () => {
        const obj = {
            id,
            name,
            price,
        };
        onClickAddItems(obj);
    }

    const onMinusItem = (id) => {
        dispatch(minusBasketItem(id));
    };
    return (
        <div className="chicken-block">
            <div className="container">
                <div className="chicken-block__inner">
                    <img className="chicken-block__image" src={img} alt="Бургер"/>
                    <h4>{name}</h4>
                    <div className="chicken-block__price">{price}</div>
                    {buttonStatus ?
                        <Button onAddItems={onAddItems} changeButtonStatus={changeButtonStatus}/>
                        : <ButtonBasket
                            id={id}
                            onClick={onAddItems}
                            onMinusItem={onMinusItem}
                            addedCount={addedCount}
                            setButtonStatus={setButtonStatus}/>
                    }
                </div>
            </div>
        </div>
    );
}

export default ChickenBlock

