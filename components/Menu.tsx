import Link from 'next/link';
import React from 'react';
import { ICocktail } from '../types/cocktailType';

interface IMenuProps {
    cocktails: ICocktail[]
}

const Menu: React.FC<IMenuProps> = ({cocktails}) => {

    const firstThreeCocktails = cocktails.slice(0, 3);

    return (
        <nav>
            <ul>
                <Link href={'/'}>
                    <a>Home</a>
                </Link>

                {firstThreeCocktails.map((cocktail) => {
                    return (
                        <li key={cocktail.idDrink}>
                            <Link href={`/cocktails/${cocktail.idDrink}`}>
                                <a>
                                    <h2>{cocktail.strDrink}</h2>
                                </a>
                            </Link>
                        </li>
                    );
                })}

            </ul>
        </nav>
    );
}

export default Menu;