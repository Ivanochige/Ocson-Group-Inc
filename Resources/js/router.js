const mainBody = document.querySelector(".main-body");

// Get current page from hash
function getPageFromHash() {
    let hash = location.hash.replace("#", "");
    if (!hash) hash = "dashboard";
    return `${hash}.html`;
}

// Highlight active sidebar link
function setActiveLink(page) {
    document.querySelectorAll("a[data-page]").forEach(link => {
        link.classList.toggle(
            "active",
            link.dataset.page === page
        );
    });
}

// Load page dynamically
async function loadPage(page) {
    try {
        mainBody.style.opacity = "0";

        // ✅ FIX: Always use relative path with ./
        const res = await fetch(`./Resources/pages/${page}`);

        if (!res.ok) throw new Error("Page not found");

        const html = await res.text();
        mainBody.innerHTML = html;

        setActiveLink(page);

        requestAnimationFrame(() => {
            mainBody.style.opacity = "1";
        });

    } catch (err) {
        mainBody.innerHTML = "<h3>Failed to load content</h3>";
        mainBody.style.opacity = "1";
        console.error("Routing error:", err);
    }
}

// Handle sidebar clicks
document.addEventListener("click", (e) => {
    const link = e.target.closest("a[data-page]");
    if (!link) return;

    e.preventDefault();

    // ✅ cleaner hash handling
    const page = link.dataset.page.replace(".html", "");
    location.hash = page;
});

// Handle back/forward
window.addEventListener("hashchange", () => {
    loadPage(getPageFromHash());
});

// Initial load
window.addEventListener("DOMContentLoaded", () => {
    loadPage(getPageFromHash());
});
