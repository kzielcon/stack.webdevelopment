function dogYears(humanYears) {
    // Calculate here
    // let dog_years = humanYears*7
    // return dog_years
    return humanYears*7
}

let dogList1 = 
[
    ["Sushi", dogYears(1), ["bone", "water bottle"], "dog1.jpeg", "Belgian Shepherd" ],
    ["Dosan", dogYears(2), ["Ball", "Shoes"], "dog2.jpg", "Beagle" ],
    ["Moonchin", dogYears(2), ["Ducklings, Tabo"], "dog3.jpg", "Maltese" ]
];

let root = '';
for(let i=0; i<dogList1.length; i++)
{
    root +=
    `
    <div class="value">
        <h1> Name: ` + dogList1[i][0] + `<br>Age: Your doggie is ` + dogList1[i][1] + ` years old in dog years!` + ` </h1>
        <img src="` + dogList1[i][3] + `" alt="` + dogList1[i][4] + `"/>
        <h1> ` + `fave toys: `+ dogList1[i][2].toString() + ` </h1>
    </div>
    `
}


document.getElementById("root").innerHTML = root