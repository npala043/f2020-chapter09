/* add code after this comment */
const stocks = JSON.parse(stockData);
// console.dir(stocks);

document.addEventListener("DOMContentLoaded", function () {
    const main = document.querySelector('main');
    // loop through stock data and output each one in a div
    for (let stock of stocks) {
        // create img and div container for img
        let img = document.createElement('img');
        img.setAttribute('src',
            `images/logos/${stock.symbol}.svg`);
        img.setAttribute('title', stock.symbol);
        let div = document.createElement('div');
        div.setAttribute('class', 'item');
        // add img to div and div to <main>
        div.appendChild(img);
        main.appendChild(div);
    }

    document.querySelector('main')
        .addEventListener('click', function (e) {
            // verify user has clicked on image within <main>
            if (e.target && e.target.nodeName.toLowerCase() ==
                "img") {
                populateAside(e);
            }
        }
        );

    function populateAside(e) {
        // determine the clicked symbol name from clicked image
        let clickedSymbolName = e.target.getAttribute('title');
        // search through stocks array looking for symbol that matches
        const foundSymbol = stocks.find(function (element) {
            return element.symbol === clickedSymbolName;
        });
        // display aside (hidden initially)
        let aside = document.querySelector('aside');
        aside.style.display = "block";

        let logo = document.querySelector('#logo img');
        let symbol = document.querySelector('#symbol');
        let name = document.querySelector('#name');
        let sector = document.querySelector('#sector');
        let sub = document.querySelector('#sub');
        // populate table with data
        logo.setAttribute('src',
            `images/logos/${foundSymbol.symbol}.svg`);
        symbol.textContent = foundSymbol.symbol;
        name.textContent = foundSymbol.name;
        sector.textContent = foundSymbol.sector;
        sub.textContent = foundSymbol.subIndustry;
    }
});