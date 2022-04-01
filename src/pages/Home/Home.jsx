import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import BurgerBlock from "../../components/BurgerBlock/BurgerBlock";
import {fetchBurger} from "../../redux/actions/burger";
import TwisterBlock from "../../components/TwisterBlock/TwisterBlock";
import ChickenBlock from "../../components/ChickenBlock/ChickenBlock";
import {fetchChicken} from "../../redux/actions/chicken";
import {fetchTwister} from "../../redux/actions/twister";

function Home() {
    const itemsBurger = useSelector(({ burger }) => burger.items);
    const itemsTwister = useSelector(({ twister }) => twister.items);
    const itemsChicken = useSelector(({ chicken }) => chicken.items);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBurger());
        dispatch(fetchChicken());
        dispatch(fetchTwister());

    },[])

    return (
        <div>
           <div>
               {itemsBurger.map((obj) => {
                   return <BurgerBlock {...obj}/>
               })}
           </div>
            <div>
                {itemsTwister.map((obj) => {
                    return <TwisterBlock {...obj}/>
                })}
            </div>
            <div>
                {itemsChicken.map((obj) => {
                    return <ChickenBlock {...obj}/>
                })}
            </div>
        </div>
    )
}

export default Home;
