const items = [
    {
        title: "Page number one",
        url: "page1.html",
        children: []
    },
    {
        title: "Page number two",
        url: "page2.html",
        children: []
    },
    {
        title: "Genre",
        url: "",
        children: [
            {
                title: "Black metal",
                url: "https://en.wikipedia.org/wiki/Black_metal",
                children: []
            },
            {
                title: "Death metal",
                url: "https://en.wikipedia.org/wiki/Death_metal",
                children: []
            }
        ]
    }
];

function renderMenu(menuItems) {
    let list = document.createElement("ul");

    let url = window.location.pathname;
    let currentPage = url.substring(url.lastIndexOf('/') + 1);

    for (const item of menuItems) {
        let listItem = document.createElement("li");
        list.appendChild(listItem);

        if (item.url !== currentPage) {
            let link = document.createElement("a");
            link.href = item.url;
            link.innerHTML = item.title;
            listItem.appendChild(link);
        } else {
            let link = document.createElement("span");
            link.innerHTML = item.title;
            link.classList.add("menu-item-selected");
            listItem.appendChild(link);
        }

        if (item.children && item.children.length > 0) {
            listItem.appendChild(renderMenu(item.children));
        }
    }

    return list;
}

window.addEventListener('load', () => {
    const menu = document.getElementsByTagName("menu")[0];
    menu.appendChild(renderMenu(items));
});