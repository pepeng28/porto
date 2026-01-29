function toggleThumbnails(id) {
    const container = document.getElementById(`thumbnails-${id}`);
    if (container.style.display === "none" || container.style.display === "") {
        container.style.display = "flex";
    } else {
        container.style.display = "none";
    }
}

function openLightbox(imageSrc) {
    const lightbox = document.getElementById("lightbox");
    const lightboxContent = document.getElementById("lightbox-content");

    // Hapus gambar sebelumnya dan tambahkan gambar baru
    lightboxContent.innerHTML = '';
    const img = document.createElement('img');
    img.src = imageSrc;
    lightboxContent.appendChild(img);

    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = 'none';
}