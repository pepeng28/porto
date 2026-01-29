function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('hidden');
}

function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: 'smooth' });
  document.getElementById('menu').classList.add('hidden');
}

function kirimPesan(event) {
  event.preventDefault();
  alert('Pesan berhasil dikirim!');
}