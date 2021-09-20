console.log(query);
let api = `https://newsapi.org/v2/everything?apikey=2f8eda0083fc4be29257842fa81d73a0&q=${query}`;
console.log(api);
var data;
fetch(api).then((response) => response.json().then(responseJSON => data = responseJSON).then(() => {
    console.log(data);
    var articles = data["articles"];
    for (let index = 0; index < 15; index++) {
        let article = articles[index];
        let image = article["urlToImage"];
        let title = article["title"];
        let description = article["description"];
        let link = article["url"];
        let card = `
        <div class="news-card">
        <img src="${image}" class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${description}</p>
            <a href="${link}" target="_blank" class="card-button">Read More</a>
        </div>
        </div>`;
        document.getElementById("news-container").innerHTML += card;
    }

    let card = `
        <div class="news-card">
        <img src="https://source.unsplash.com/user/erondu/1600x900" class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{description}</p>
            <a href="#" target="_blank" class="card-button">Read More</a>
        </div>
        </div>`;
}));