let bandNames = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function removeArticles(name) {
    return name.replace(/^(a |an |the )/i, '');
}

bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

const bandList = document.getElementById('band');
for (const bandName of bandNames) {
    const li = document.createElement('li');
    li.textContent = bandName;
    bandList.appendChild(li);
}