// Security Check - This prevents the site from running if downloaded offline
if (window.location.protocol === "file:") {
    document.body.innerHTML = "<h1 style='color:white;text-align:center;margin-top:20%'>Access Denied: Please view this portfolio live on GitHub.</h1>";
    throw new Error("Local access denied");
}

// ... Paste the rest of your Tailwind config and JS here ...
tailwind.config = {
    theme: { extend: { colors: { brand: { dark: '#050505', card: '#121212', accent: '#ffffff', gray: '#888888', green: '#25D366' } }, fontFamily: { sans: ['Inter', 'sans-serif'] } } }
}

// ... Paste the AOS init and Typed.js code here ...
AOS.init({ duration: 800, once: true, offset: 50 });
// etc...
