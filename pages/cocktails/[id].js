import Link from 'next/link';

export default function Cocktail({cocktail}) {
    return (
        <div >
          <header>
            <Link href={'/'}>
                <a>Home</a>
            </Link>
          </header>
    
          <main className="title">
            <h1>Détail d'un cocktail</h1>
            <section>
                <article>
                    <h2>{cocktail.strDrink}</h2>
                </article>
            </section>
          </main>
    
          <footer>
    
          </footer>
        </div>
      )
}

export async function getStaticPaths() {
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


export async function getStaticProps({params}) {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
  
    const response = await fetch(url);
    const cocktails = await response.json();

    const id = params.id;

    let cocktail = cocktails.drinks.filter(cocktail => {
        return cocktail.idDrink === id;
    });

    cocktail = cocktail[0];
  
    return {
      props: {
        cocktail
      } 
    }
}