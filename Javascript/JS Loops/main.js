let groceryList = 
[
    ["Meats", ["Fish", "Chicken", "Pork", "Beef"] ],
    ["Soaps and Shampoos", ["Head n shoulders", "safeguard", "dove", "rejoice"] ],
    ["Vegetables", ["Carrots", "Petchay", "Talong", "Sitaw"] ],
    ["Canned goods", ["corned beef", "sardines", "spam", "beef loaf"] ],
];


let root = '';
for(let i=0; i<groceryList.length; i++)
{
    root +=
    `
    <div class="list">
        <p> ` + groceryList[i][0] + ` </p>
    `;

    for(let j=0; j<groceryList[i][1].length; j++)
    {
        root +=
        `
        <input type="checkbox" id="`+groceryList[i][1][j]+`" name="`+groceryList[i][1][j]+`" checked>
        <label for="`+groceryList[i][1][j]+`">`+groceryList[i][1][j]+`</label><br>
        `;
    }
    
    root +=
    `
    </div>
    `;
}

document.getElementById("root").innerHTML = root