export interface ICocktail {
    idDrink: string,
    strDrink: string,
    strInstructions: string,
    strDrinkThumb: string | null
}

export interface ICocktailResponse {
    drinks: ICocktail[]
}