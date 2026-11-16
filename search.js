const index = [
    {
        "keyword": ["about", "homepage",],
        "url": "/"
    },
    {
        "keyword": ["project", "computer", "microcontroller", "editor", "custom", "web", "PCB"],
        "url": "/projects.html"
    },
    {
        "keyword": ["datasheet", "documentation", "download", "compiled" , "app"],
        "url": "/resources.html"
    }
]

function search() {
    const term = document.getElementById("search-input").value.toLowerCase();
    const redirect = index.filter(page =>
        page.keyword.some(keyword =>
            keyword.toLowerCase().includes(term) ||
            term.includes(keyword.toLowerCase())
        )
    );

    try {
        window.location.href = `https://nicholaslim.me${redirect[0].url}`;
    } catch (error) {
        document.getElementById("notFound").style.display = "inline-block";
    }
};

document.getElementById("search").addEventListener("submit", function(e) {
    e.preventDefault();
    search();
});