import React, {useState} from 'react';
import Button from "../Button";
import ButtonBasket from "../ButtonBasket";
import {useDispatch, useSelector} from "react-redux";
import {minusBasketItem} from "../../redux/reducers/basket";

function BurgerBlock({id, name, img, price, onClickAddItems, addedCount, onMinus}) {
    const dispatch = useDispatch()
    const [buttonStatus, setButtonStatus] = useState(true)
    const changeButtonStatus = (boolean) => {
        setButtonStatus(boolean)
    }

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
                   <img className="burger-block__image" src={img} alt="Бургер"/>
                   <h4>{name}</h4>
                   <div className="burger-block__price">{price}</div>
                   {buttonStatus ? <Button onClick={onAddItems} changeButtonStatus={changeButtonStatus}/> : <ButtonBasket id={id} onClick={onAddItems} onMinusItem={onMinusItem} addedCount={addedCount}/>}
               </div>
           </div>
       </div>
    );
}

export default BurgerBlock;
