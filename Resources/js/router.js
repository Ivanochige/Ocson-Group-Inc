const mainBody = document.querySelector(".main-body");

function getPageFromHash() {
    let hash = location.hash.replace("#", "");
    if (!hash) hash = "dashboard";
    return `${hash}.html`;
}

// Auto-highlight active sidebar link //
function setActiveLink(page) {
    document.querySelectorAll("a[data-page]").forEach(link => {
        link.classList.toggle("active", link.dataset.page === page);
    });
}
// Auto-highlight active sidebar link //

async function loadPage(page) {
    try {
        mainBody.style.opacity = "0";

        const res = await fetch(`Resources/pages/${page}`);
        if (!res.ok) throw new Error("Page not found");

        const html = await res.text();
        mainBody.innerHTML = html;

        setActiveLink(page);

        // ✅ reveal smoothly
        requestAnimationFrame(() => {
            mainBody.style.opacity = "1";
        });

    } catch (err) {
        mainBody.innerHTML = "<h3>Failed to load content</h3>";
        mainBody.style.opacity = "1";
        console.error(err);
    }
}



// Handle sidebar clicks
document.addEventListener("click", (e) => {
    const link = e.target.closest("a[data-page]");
    if (!link) return;

    e.preventDefault();
    location.hash = link.dataset.page.replace(".html", "");
});

// Handle back/forward
window.addEventListener("hashchange", () => {
    loadPage(getPageFromHash());
});

// Initial load
window.addEventListener("DOMContentLoaded", () => {
    loadPage(getPageFromHash());
});
