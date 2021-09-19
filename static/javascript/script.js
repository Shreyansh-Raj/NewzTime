console.log(data);
articles = data['articles']
for (let index = 0; index < 15; index++){
    console.log("title: "+articles[index]['title']+"\n"+"description: "+articles[index]['description']+"\n")
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