import React, {useState} from 'react';
import classNames from "classnames";

function DeliveryBlock(props) {
    const availableTypes = ['Доставка', 'Самовывоз'];
    const [activeType, setActiveType] = useState(0);

    const onSelectType = (index) => {
        setActiveType(index);
    };

    return (
        <div className="delivery">
            <input name="street" type="text"/>
            <input name="house" type="text"/>
            {availableTypes.map((type, index) => (
                <button
                    key={type}
                    onClick={() => onSelectType(index)}
                    className={classNames('btn', {
                        active: activeType === index,
                    })}>
                    <span>{type}</span>
                </button>
            ))}
        </div>
    );
}

export default DeliveryBlock;
