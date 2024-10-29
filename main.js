function toggleDarkMode() {
    const body = document.body;
    const bubuhImage = document.getElementById('bubuh');
  
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      bubuhImage.src = 'bubuh.png';
    } else {
      body.classList.add('dark-mode');
      bubuhImage.src = 'bubuh-dark.png';
    }
  }