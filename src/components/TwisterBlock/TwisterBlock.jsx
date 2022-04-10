import React, {useEffect, useState} from 'react';
import Button from "../Button";
import ButtonBasket from "../ButtonBasket";
import {useDispatch, useSelector} from "react-redux";
import {minusBasketItem} from "../../redux/reducers/basket";

function TwisterBlock({id, name, hit, newProducts, img, price, onClickAddItems, addedCount}) {
    const dispatch = useDispatch();
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
        <div className="twister-block">
            <div className="container">
                <div className="twister-block__inner">
                    {hit && <div className="hit">Хит</div>}
                    {newProducts && <div className="newProducts">Новое</div>}
                    <img className="twister-block__image" src={img} alt="Твистер"/>
                    <h4>{name}</h4>
                    <div className="twister-block__price">{price}₽</div>
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

export default TwisterBlock;








