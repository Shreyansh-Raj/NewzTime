function fetchApi(url, params) {
    let paramsLength = Object.keys(params).length;
    for (let index = 0; index < paramsLength; index++) {
        console.log(Object.keys(params)[index]);
        console.log(params[Object.keys(params)[index]]);
        newUrl = url;
    }
}