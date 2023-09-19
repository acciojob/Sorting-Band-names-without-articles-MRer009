let bandNames = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// function removeArticles(name) {
//     return name.replace(/^(a |an |the )/i, '');
// }
function stripArticles(string) {
    return string.replace(/^(a |an |the )/i, '');
}


// bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));
touristSpots.sort((a, b) => {
    return stripArticles(a) > stripArticles(b) ? 1 : -1;
});
// const bandList = document.getElementById('band');
// for (const bandName of bandNames) {
//     const li = document.createElement('li');
//     li.textContent = bandName;
//     bandList.appendChild(li);
// }
let ul = document.getElementById('band');

touristSpots.forEach(spot => {
    let li = document.createElement('li');
    li.innerText = spot;
    ul.appendChild(li);
});