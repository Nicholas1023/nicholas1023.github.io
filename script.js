function search() {
    const term = document.getElementById("search-input").value.toLowerCase();
    const content1 = document.getElementById("1");
    const content2 = document.getElementById("2");
    const content3 = document.getElementById("3");
    const notFound = document.getElementById("notFound");
    notFound.style.display = "none";
    if (content1.textContent.toLowerCase().includes(term)) {
        content1.innerHTML = `<span class="result">${content1.innerHTML}</span>`;
        reset(content2);
        reset(content3);
    } else if (content2.textContent.toLowerCase().includes(term)) {
        content2.innerHTML = `<span class="result">${content2.innerHTML}</span>`;
        reset(content1);
        reset(content3);
    } else if (content3.textContent.toLowerCase().includes(term)) {
        content3.innerHTML = `<span class="result">${content3.innerHTML}</span>`;
        reset(content1);
        reset(content2);
    } else {
        reset(content1);
        reset(content2);
        reset(content3);
        notFound.style.display = "block";
    };
};

function reset(content) {
    content.innerHTML = content.textContent;
};

document.getElementById("search").addEventListener("submit", function(e) {
    e.preventDefault();
    search();
});
