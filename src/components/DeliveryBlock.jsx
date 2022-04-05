import React, {useState} from 'react';
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {addOrder, addOrderBool} from "../redux/reducers/order";
import {buttonStatus, clearBasket} from "../redux/reducers/basket";

function DeliveryBlock(props) {
    const order = useSelector(({basket}) => basket.items);
    const orderAddress = useSelector(({order}) => order.items);
    const orderBool = useSelector(({order}) => order.bool)
    const [activeType, setActiveType] = useState(true);
    const dispatch = useDispatch()

    const onSelectBtnDelivery = () => {
        setActiveType(true);
    };

    const onSelectBtnPickup = () => {
        setActiveType(false);
    };

    const fetchSort = () => {

    }

    const formik = useFormik({
        initialValues: {
            street: '',
            house: ''
        },
        validate: values => {
            const errors = {};
            if (!values.street) {
                errors.street = 'Нужно заполнить для офомления доставки';
            } else if (values.street.length < 4) {
                errors.street = 'Должно быть больше 4 символов';
            }

            if (!values.house) {
                errors.house = 'Нужно заполнить для офомления доставки';
            } else if (values.house.length < 2) {
                errors.house = 'Должно быть больше 2 символов';
            }

            return errors;
        },
        onSubmit: values => {
            dispatch(addOrder(values)) // добавить санку
            console.log(values)
            console.log(order)
            dispatch(clearBasket())
            formik.resetForm();
        },
    });

    return (
        <div className="delivery">

            <div className="delivery__block">
                {activeType ?
                    <div className="delivery__form">
                        <div className="delivery__form-title">Доставка г. Москва</div>
                        <form className="form" id="my-form" onSubmit={formik.handleSubmit}>
                            <div className="form__street">
                                <label>
                                    Улица
                                    <input
                                        name="street"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.street}
                                        onBlur={formik.handleBlur}
                                        placeholder="Остоженка"
                                    />
                                </label>
                                {formik.touched.street && formik.errors.street ? (
                                    <div className="error-street">{formik.errors.street}</div>
                                ) : null}
                            </div>
                            <div className="form__house">
                                <label>
                                    Дом
                                    <input
                                        name="house"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.house}
                                        onBlur={formik.handleBlur}
                                        placeholder="д.26"
                                    />
                                </label>
                                {formik.touched.house && formik.errors.house ? (
                                    <div className="error-house">{formik.errors.house}</div>
                                ) : null}
                            </div>
                        </form>
                    </div>
                    : <div onClick={fetchSort()}>Самовывоз</div>}
                <div className="delivery__btn">
                    <button
                        onClick={onSelectBtnDelivery}
                        className={classNames('btn', {
                            active: activeType === true
                        })}>
                        Доставка
                    </button>
                    <button
                        onClick={onSelectBtnPickup}
                        className={classNames('btn', {
                            active: activeType === false
                        })}>
                        Самовывоз
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeliveryBlock;
