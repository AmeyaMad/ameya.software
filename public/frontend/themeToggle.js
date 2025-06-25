function toggleTheme() {
    const theme = document.getElementById('theme');
    if(theme.href.includes('darkMode.css')){
        theme.href ="frontend/lightMode.css";
    }
    else{
        theme.href ="frontend/darkMode.css";
    }
}