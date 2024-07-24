
document.addEventListener('scroll', function() {
    var element = document.getElementById('scroll-top');
    var scrollPosition = window.scrollY ;

    if (scrollPosition < 700) {
        element.style.visibility = "hidden";
        element.style.filter = "opacity(0)";
    } else {
        element.style.visibility = "visible";
        element.style.filter = "opacity(1)";
    }
});

/*
*/
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const root = document.documentElement;
  
    const lightModeVars = {
      '--primary-color': '#fefdff',
      '--secondary-color': '#2e52e1',
      '--tertiary-color': '#1f2023', 
    };
  
    const darkModeVars = {
        '--primary-color': '#1f2023',
        '--secondary-color': '#2e52e1',
        '--tertiary-color': '#fefdff' 
    };
  
    // Apply saved user preference
    if (localStorage.getItem('theme') === 'dark') {
      applyTheme(darkModeVars);
    } else {
      applyTheme(lightModeVars);
    }
  
    darkModeToggle.addEventListener('click', () => {
      if (localStorage.getItem('theme') === 'dark') {
        applyTheme(lightModeVars);
        localStorage.setItem('theme', 'light');
      } else {
        applyTheme(darkModeVars);
        localStorage.setItem('theme', 'dark');
      }
    });
  
    function applyTheme(vars) {
      for (const [key, value] of Object.entries(vars)) {
        root.style.setProperty(key, value);
      }
    }
  });
  

