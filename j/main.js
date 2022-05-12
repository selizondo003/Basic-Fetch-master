
//This code does NOT create any global variables.
//Promises can be chained together, with the previous promise
// passing its results to the next one in the chain.
// the format is: fetch().then().then().catch()
//it's easier to read if we put each step in its own line,
//that's why the periods start the then lines.

fetch("houses.json")
    .then((response) => response.json())
    .then((data) => {
        //create a temp holder to append all the html generated inside the forEach iterator
        let html = "";

        //the argument "house" passed to the arrow function
        //holds each item in the array in turn.
        data.forEach((house) => {
            let family = house.members.join(" | ");
            let objectInfo =
            
            `<div class = "house">
                <dl>
                    <dt> ${house.name}</dt>
                    <dd> ${family} <dd>
                </dl>
            </div>`
            
            html += objectInfo;
        });

        //make a reference to the html container where
        //the info will be displayed.
        const container = document.querySelector("#container");
        container.innerHTML = html;
    })
    .catch((err) => console.log("Oops!", err));
    //this only runs if there is an error during the above process

//color API

fetch("https://x-colors.herokuapp.com/api/random")
.then(response => response.json())
.then(data => {
    document.body.style.backgroundColor = data.hex;
}).catch(err => {
    console.error('oops', err.message);
})








/*
async function getColor(url) {
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log('my error is: ', error);
    }
}

async function bgColor(url) {
    const backgroundColor = await getColor('https://x-colors.herokuapp.com/api/random');
    document.body.style.backgroundColor = data.hex;
};
*/