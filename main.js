/* ===============================
   🚀 ULTRA PREMIUM MAIN JS
   =============================== */

document.addEventListener("DOMContentLoaded", () => {
    console.log("🚀 Website Loaded");

    safe(initNavigation);
    safe(initSmoothScroll);
    safe(initKeyboardSupport);
    safe(initAutoFocus);
});

/* ===============================
   NAV ACTIVE LINK
   =============================== */
function initNavigation() {
    const links = document.querySelectorAll("nav a");
    const current = window.location.pathname;

    links.forEach(link => {
        if (link.getAttribute("href") === current || link.href.includes(current)) {
            link.classList.add("active-link");
        }
    });
}

/* ===============================
   SMOOTH SCROLL
   =============================== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", e => {
            e.preventDefault();

            const target = document.querySelector(anchor.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
}

/* ===============================
   ENTER KEY SUPPORT
   =============================== */
function initKeyboardSupport() {
    document.querySelectorAll("input").forEach(input => {
        input.addEventListener("keypress", e => {
            if (e.key === "Enter") {
                const btn = input.closest(".tool-box")?.querySelector("button");
                if (btn) btn.click();
            }
        });
    });
}

/* ===============================
   AUTO FOCUS FIRST INPUT
   =============================== */
function initAutoFocus() {
    const firstInput = document.querySelector(".tool-box input");
    if (firstInput) firstInput.focus();
}

/* ===============================
   COPY TEXT (SMART)
   =============================== */
function copyText(text) {
    if (!text) return;

    if (navigator.clipboard) {
        navigator.clipboard.writeText(text)
            .then(() => toast("Copied Successfully ✅"))
            .catch(() => fallbackCopy(text));
    } else {
        fallbackCopy(text);
    }
}

/* ===============================
   FALLBACK COPY
   =============================== */
function fallbackCopy(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();

    try {
        document.execCommand("copy");
        toast("Copied ✅");
    } catch {
        toast("Copy Failed ❌");
    }

    document.body.removeChild(textarea);
}

/* ===============================
   TOAST NOTIFICATION
   =============================== */
function toast(msg) {
    const t = document.createElement("div");
    t.innerText = msg;

    Object.assign(t.style, {
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "#111",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "8px",
        fontSize: "14px",
        zIndex: "9999",
        opacity: "0",
        transition: "0.3s"
    });

    document.body.appendChild(t);

    setTimeout(() => t.style.opacity = "1", 100);
    setTimeout(() => {
        t.style.opacity = "0";
        setTimeout(() => t.remove(), 300);
    }, 2000);
}

/* ===============================
   LOADING TEXT (USE IN TOOLS)
   =============================== */
function showLoading(id = "result") {
    const el = document.getElementById(id);
    if (el) el.innerText = "Calculating...";
}

/* ===============================
   VALIDATION
   =============================== */
function isEmpty(value) {
    return !value || value.trim() === "";
}

function isNumber(value) {
    return !isNaN(value) && value !== "";
}

/* ===============================
   FORMAT NUMBER
   =============================== */
function formatNumber(num) {
    return new Intl.NumberFormat().format(num);
}

/* ===============================
   SAFE RUN
   =============================== */
function safe(fn) {
    try {
        fn();
    } catch (e) {
        console.error("Error:", e);
    }
}