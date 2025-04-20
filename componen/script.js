function loadComponent(id, file, callback) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${file}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            const element = document.getElementById(id);
            if (element) {
                element.innerHTML = data;
                if (callback) callback(); 
            } else {
                console.error(`Element with id '${id}' not found.`);
            }
        })
        .catch(error => {
            console.error('Error loading component:', error);
        });
}

loadComponent('navbar', 'componen/navbar.html', () => {
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    const icon = document.getElementById('menu-icon');

    if (btn && menu && icon) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');

            // toggle class icon
            if (menu.classList.contains('hidden')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        });
    }
});


// Footer bebas, tidak perlu event listener
loadComponent('footer', 'componen/footer.html');

document.addEventListener("DOMContentLoaded", function() {
    const text = document.getElementById('name');
    setTimeout(() => {
      text.classList.remove('opacity-0', 'translate-y-10');
      text.classList.add('opacity-100', 'translate-y-0');
    }, 300); // 300ms setelah halaman load
  });
