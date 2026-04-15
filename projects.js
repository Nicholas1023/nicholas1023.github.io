function search() {
    const term = document.getElementById("search-input").value.toLowerCase();
    const content1 = document.getElementById("1");
    const content2 = document.getElementById("2");
    const content3 = document.getElementById("3");
    const content4 = document.getElementById("4");
    const content5 = document.getElementById("5");
    const content6 = document.getElementById("6");
    const content7 = document.getElementById("7");
    const content8 = document.getElementById("8");
    const content9 = document.getElementById("9");
    const notFound = document.getElementById("notFound");
    notFound.style.display = "none";
    reset(content1, content2, content3, content4, content5, content6, content7)
    if (content1.textContent.toLowerCase().includes(term)) {
        content1.innerHTML = `<span class="result">${content1.innerHTML}</span>`;
    } else if (content2.textContent.toLowerCase().includes(term)) {
        content2.innerHTML = `<span class="result">${content2.innerHTML}</span>`;
    } else if (content3.textContent.toLowerCase().includes(term)) {
        content3.innerHTML = `<span class="result">${content3.innerHTML}</span>`;
    } else if (content4.textContent.toLowerCase().includes(term)) {
        content4.innerHTML = `<span class="result">${content4.innerHTML}</span>`;
    } else if (content5.textContent.toLowerCase().includes(term)) {
        content5.innerHTML = `<span class="result">${content5.innerHTML}</span>`;
    } else if (content6.textContent.toLowerCase().includes(term)) {
        content6.innerHTML = `<span class="result">${content6.innerHTML}</span>`;
    } else if (content7.textContent.toLowerCase().includes(term)) {
        content7.innerHTML = `<span class="result">${content7.innerHTML}</span>`;
    } else if (content8.textContent.toLowerCase().includes(term)) {
        content8.innerHTML = `<span class="result">${content8.innerHTML}</span>`;
    } else if (content9.textContent.toLowerCase().includes(term)) {
        content9.innerHTML = `<span class="result">${content9.innerHTML}</span>`;
    } else {
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
