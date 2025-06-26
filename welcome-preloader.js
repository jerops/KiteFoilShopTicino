// IMMEDIATELY show loader and content
document.documentElement.classList.add('kst-ready');
document.body.classList.add('kst-loader-active');

const overlay = document.getElementById('kstLoaderOverlay');
overlay.classList.add('active');

// Hide loader after 5.5 seconds with elegant transition
setTimeout(function () {
  // Start elegant fade out
  overlay.style.transition = 'opacity 1.2s ease-out, transform 1.2s ease-out';
  overlay.style.opacity = '0';
  overlay.style.transform = 'scale(1.05)';

  // Complete hide after elegant fade
  setTimeout(function () {
    overlay.classList.remove('active');
    overlay.style.display = 'none';
    document.body.classList.remove('kst-loader-active');

    // Reset for next time
    overlay.style.opacity = '1';
    overlay.style.transform = 'scale(1)';
    overlay.style.transition = '';
  }, 1200);
}, 2000);
