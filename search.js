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
        "keyword": ["datasheet", "documentation", "docs", "guide", "download", "compiled" , "app", "release", "packaged"],
        "url": "/releases.html"
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

document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        document.getElementById("search-input").focus();
    }
});