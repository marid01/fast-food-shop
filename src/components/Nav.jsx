import React from 'react';
import {Link} from 'react-scroll'

function Nav(props) {

    return (
            <div className="nav">
                <nav className="navbar">
                    <ul className="mainMenu">
                        <li className="menuItem">
                            <Link
                                to="burgers"
                                spy={true}
                                smooth={true}
                                offset={-500}
                                duration={500}
                            >Бургеры
                            </Link>
                        </li>
                        <li className="menuItem">
                            <Link
                                to="twister"
                                spy={true}
                                smooth={true}
                                offset={-500}
                                duration={500}
                            >Твистеры
                            </Link>
                        </li>
                        <li className="menuItem">
                            <Link
                                to="chicken"
                                spy={true}
                                smooth={true}
                                offset={-500}
                                duration={500}
                            >Курицы
                            </Link>
                        </li>
                        <li className="menuItem">
                            <Link
                                spy={true}
                                smooth={true}
                                offset={1}
                                duration={500}
                            >Баскеты
                            </Link>
                        </li>
                        <li className="menuItem">
                            <Link
                                spy={true}
                                smooth={true}
                                offset={-71}
                                duration={500}
                            >Снэки
                            </Link>
                        </li>
                        <li className="menuItem">
                            <Link
                                spy={true}
                                smooth={true}
                                offset={-71}
                                duration={500}
                            >Соусы
                            </Link>
                        </li>
                        <li className="menuItem">
                            <Link
                                spy={true}
                                smooth={true}
                                offset={-71}
                                duration={500}
                            >Напитки
                            </Link>
                        </li>
                        <li className="menuItem">
                            <Link
                                spy={true}
                                smooth={true}
                                offset={-71}
                                duration={500}
                            >Кофе и чай
                            </Link>
                        </li>
                        <li className="menuItem">
                            <Link
                                spy={true}
                                smooth={true}
                                offset={-71}
                                duration={500}
                            >Десерты
                            </Link>
                        </li>
                        <li className="menuItem">
                            <Link
                                spy={true}
                                smooth={true}
                                offset={-71}
                                duration={500}
                            >Хиты по 50
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
    );
}

export default Nav;
