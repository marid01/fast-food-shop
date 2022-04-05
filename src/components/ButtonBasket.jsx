import React from 'react';

function ButtonBasket({id, onClick, addedCount, onMinusItem, setButtonStatus}) {
    const handleMinusItem = () => {
        onMinusItem(id)
        if(addedCount === 1) {
            setButtonStatus(true)
        }
    };
    return (
        <div className="button-basket">
            <button onClick={handleMinusItem} className="button-basket-minus">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="7" width="12" height="2" rx="1" fill="white"/>
                </svg>
            </button>
            <div className="button-basket__num">{addedCount && <span>{addedCount}</span>}</div>
            <button onClick={onClick} className="button-basket-plus">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M9 3C9 2.44772 8.55228 2 8 2C7.44772 2 7 2.44772 7 3V7H3C2.44772 7 2 7.44772 2 8C2 8.55228 2.44772 9 3 9H7V13C7 13.5523 7.44772 14 8 14C8.55228 14 9 13.5523 9 13V9H13C13.5523 9 14 8.55228 14 8C14 7.44772 13.5523 7 13 7H9V3Z"
                          fill="white"/>
                </svg>
            </button>
        </div>
    );
}

export default ButtonBasket;
