const photos = JSON.parse(content);

/* put your code after this */

const parent = document.querySelector("#parent");
for (let photo of photos) {
    let fig = document.createElement("figure");
    parent.appendChild(fig);

    // Image
    let img = document.createElement("img");
    img.setAttribute("src", `images/${photo.filename}`);
    img.setAttribute("alt", `${photo.title}`);
    fig.appendChild(img);
    
    // Figure Caption
    let figCaption = document.createElement("figcaption");
    fig.appendChild(figCaption);

    // Title
    let h2 = document.createElement("h2");
    let title = document.createTextNode(`${photo.title}`);
    h2.appendChild(title);
    figCaption.appendChild(h2);
    
    // Description
    let p = document.createElement("p");
    let desc = document.createTextNode(`${photo.description}`);
    p.appendChild(desc);
    figCaption.appendChild(p);

    // Colour palette
    for (let i = 0; i < photo.colors.length; i++) {
        let span = document.createElement("span");
        span.style.backgroundColor = photo.colors[i].hex;
        figCaption.appendChild(span);
    }
}