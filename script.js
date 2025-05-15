// Theme toggle functionality
const toggle = document.getElementById("toggleTheme");
const root = document.documentElement;

const storedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const theme = storedTheme || (prefersDark ? 'dark' : 'light');
root.setAttribute("data-theme", theme);

toggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    const newTheme = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
});

// Dynamic Year
document.getElementById("year").textContent = new Date().getFullYear();

// Share functionality
function shareOnPlatform(platform) {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    let shareUrl;

    switch(platform) {
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
            break;
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
    }

    window.open(shareUrl, '_blank', 'width=600,height=400');
}

// QR Code functionality
function showQRCode() {
    const qrContainer = document.getElementById('qrcode');
    const modal = document.getElementById('qrModal');
    const overlay = document.getElementById('qrOverlay');

    // Clear previous QR code
    qrContainer.innerHTML = '';

    // Generate QR code
    const qr = qrcode(0, 'M');
    qr.addData(window.location.href);
    qr.make();
    qrContainer.innerHTML = qr.createImgTag(5);

    // Show modal
    modal.classList.add('visible');
    overlay.classList.add('visible');
}

function hideQRCode() {
    const modal = document.getElementById('qrModal');
    const overlay = document.getElementById('qrOverlay');
    modal.classList.remove('visible');
    overlay.classList.remove('visible');
}

function downloadQR() {
    const qrImg = document.querySelector('#qrcode img');
    const link = document.createElement('a');
    link.download = 'qr-code.png';
    link.href = qrImg.src;
    link.click();
}

// Close modal when clicking outside
document.getElementById('qrOverlay').addEventListener('click', function(e) {
    if (e.target === this) {
        hideQRCode();
    }
}); 