const index = [
    {
        "keyword": ["about", "homepage", "achievements"],
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

async function getCommitHash() {
    const API_URL = "https://api.github.com/repos/Nicholas1023/nicholas1023.github.io/commits/main";
    try {
        const response = await fetch(API_URL, {
            method: "GET",
            headers: {
                "Accept": "application/vnd.github.sha"
            }
        })

        if (!response.ok) {
            document.getElementById("commit").innerHTML += "hash API request failed.";
        }
        const hash = (await response.text()).slice(0, 7);
        document.getElementById("commit").innerHTML += `<a href="https://github.com/Nicholas1023/nicholas1023.github.io/commit/${hash}" target="_blank">${hash} <i class="fa-solid fa-arrow-up-right-from-square"></i></a>`;
    } catch (error) {
        document.getElementById("commit").innerHTML += "hash API request failed.";
    }
}

getCommitHash();