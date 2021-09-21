import Link from 'next/link';

export default function Home({cocktails}) {
  return (
    <div >
      <header>

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

export async function getStaticProps() {

  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
  
  const response = await fetch(url);
  const cocktails = await response.json();

  return {
    props: {
      cocktails
    } 
  }
}


