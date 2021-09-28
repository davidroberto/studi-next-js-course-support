import Link from 'next/link';
import { ICocktailResponse } from '../types/cocktailType';
import { InferGetStaticPropsType } from 'next';
import Menu from '../components/Menu';

const Home = (
  { cocktails }: InferGetStaticPropsType<typeof getStaticProps> 
  ) => {
  return (
    <div >
      <header>
        <Menu cocktails={cocktails.drinks}/>
      </header>

      <main className="title">
        <h1>Les cocktails de Studi !</h1>
        <section>
        {cocktails.drinks.map((cocktail) => {
            return (
              <article key={cocktail.idDrink}>
                <Link href={`/cocktails/${cocktail.idDrink}`}>
                  <a>
                    <h2>{cocktail.strDrink}</h2>
                  </a>
                </Link>
              </article>
            )
          })}
        </section>
      </main>

      <footer>

      </footer>
    </div>
  )
}

export const getStaticProps = async () => {

  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
  
  const response = await fetch(url);
  const cocktails: ICocktailResponse = await response.json();

  return {
    props: {
      cocktails
    } 
  }
}


export default Home;