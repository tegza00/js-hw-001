document.addEventListener('DOMContentLoaded', function () {
    const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            displayCocktails(data.drinks);
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });

    function displayCocktails(cocktails) {
        const cocktailListContainer = document.getElementById('cocktailList');
        const source = document.getElementById('cocktail-template').innerHTML;
        const template = Handlebars.compile(source);

        cocktails.forEach(cocktail => {
            const html = template(cocktail);
            cocktailListContainer.innerHTML += html;
        });
    }
});