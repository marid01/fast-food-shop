import React, {useEffect, useState} from 'react';
import Button from "../Button";
import ButtonBasket from "../ButtonBasket";
import {useDispatch, useSelector} from "react-redux";
import {minusBasketItem} from "../../redux/reducers/basket";

function BurgerBlock({id, hit, newProducts, name, img, price, onClickAddItems, addedCount}) {
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
        <div className="burger-block">
            <div className="container">
                <div className="burger-block__inner">
                    {hit && <div className="hit">Хит</div>}
                    {newProducts && <div className="newProducts">Новое</div>}
                    <img className="burger-block__image" src={img} alt="Бургер"/>
                    <h4>{name}</h4>
                    <div className="burger-block__price">{price}₽</div>
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

export default BurgerBlock;

