let page = 1;
function loadNews() {
    let api = `https://newsapi.org/v2/${endpoint}?apikey=2f8eda0083fc4be29257842fa81d73a0&q=${query}&page=${page}`;
    console.log(api);
    var data;
    fetch(api).then((response) =>
        response
            .json()
            .then((responseJSON) => (data = responseJSON))
            .then(() => {
                console.log(data);
                var articles = data["articles"];
                console.log(articles);
                for (let index = 0; index < 20; index++) {
                    let i = Math.floor(Math.random() * data["totalResults"] + 1);
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
            })
    );
    page += 1;
}
function scrollLoad(){
    let container = document.getElementById("news-container");
    let home = document.getElementById("home");
    console.log(home.scrollTop + home.offsetHeight + 20, container.offsetHeight);
    if (
        home.scrollTop + home.offsetHeight + 20 >
        container.offsetHeight
    ) {
        console.log('loading...');
        loadNews;
    }
}
loadNews();
// document.addEventListener("scroll",scrollLoad,false);
