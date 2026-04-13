/* ===== GOOGLE ANALYTICS (CLEAN SETUP) ===== */

// Load Google Analytics script
(function () {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-2D6W4WWWSR";
    document.head.appendChild(script);
})();

// Setup dataLayer
window.dataLayer = window.dataLayer || [];

// gtag function
function gtag(){ 
    dataLayer.push(arguments); 
}

// Initialize analytics
gtag('js', new Date());

// Configure your Measurement ID
gtag('config', 'G-2D6W4WWWSR');