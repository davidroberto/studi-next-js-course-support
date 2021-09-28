
import { ICocktailResponse, ICocktail } from '../../types/cocktailType';
import { GetStaticPaths, InferGetStaticPropsType } from 'next';
import Menu from '../../components/Menu';

const Cocktail = (
  { cocktail, cocktails }: InferGetStaticPropsType<typeof getStaticProps> 
) => {
    return (
        <div >
          <header>
            <Menu cocktails={cocktails.drinks}/>
          </header>
    
          <main className="title">
            <h1>Détail d'un cocktail</h1>
            <section>
                <article>
                    <h2>{cocktail.strDrink}</h2>
                    <p>{cocktail.strInstructions}</p>

                    { cocktail.strDrinkThumb ?
                      <img src={cocktail.strDrinkThumb}/>
                    :
                      <p>Pas d'image pour ce cocktail</p>
                    }

                </article>
            </section>
          </main>
    
          <footer>
    
          </footer>
        </div>
      )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
  
    const response = await fetch(url);
    const cocktails = await response.json();

    const paths = cocktails.drinks.map((cocktail) => ({
        params: {
            id: cocktail.idDrink
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }

}


export const getStaticProps = async ({params}) => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
  
    const response = await fetch(url);
    const cocktails: ICocktailResponse = await response.json();

    const id = params.id;

    let cocktailFiltered = cocktails.drinks.filter(cocktail => {
        return cocktail.idDrink === id;
    });

    const cocktail: ICocktail = cocktailFiltered[0];
  
    return {
      props: {
        cocktail,
        cocktails
      } 
    }
}

export default Cocktail;