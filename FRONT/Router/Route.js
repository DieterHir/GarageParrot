export default class Route {
    constructor(url, title, pathHtml, pathJS = "", minAuth = "") {
        this.url = url;
        this.title = title;
        this.pathHtml = pathHtml;
        this.pathJS = pathJS;
        this.minAuth = minAuth;
    }
}