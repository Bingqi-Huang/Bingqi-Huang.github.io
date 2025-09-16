const content_dir = 'contents/'
const config_file = 'config.yml'
const section_names = ['home', 'news', 'publications', 'awards']


window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Load content from YAML and Markdown files
    fetch('contents/config.yml')
        .then(response => response.text())
        .then(text => {
            const config = jsyaml.load(text);
            document.getElementById('title').innerText = config.title;
            document.getElementById('page-top-title').innerText = config.name;
            document.getElementById('copyright-text').innerHTML = config.copyright;
            document.getElementById('github-link').href = "https://github.com/" + config.github_username;
            document.getElementById('license-link').href = config.license_url;
            document.getElementById('news-subtitle').innerHTML = '<i class="bi bi-newspaper"></i>&nbsp;' + config.news.subtitle;
            document.getElementById('publications-subtitle').innerHTML = '<i class="bi bi-file-text-fill"></i>&nbsp;' + config.publications.subtitle;
            document.getElementById('awards-subtitle').innerHTML = '<i class="bi bi-award-fill"></i>&nbsp;' + config.awards.subtitle;
        });

    fetch('contents/bio.md')
        .then(response => response.text())
        .then(text => {
            document.getElementById('bio-md').innerHTML = marked.parse(text);
        });

    fetch('contents/home.md')
        .then(response => response.text())
        .then(text => {
            document.getElementById('home-md').innerHTML = marked.parse(text);
        });

    fetch('contents/news.md')
        .then(response => response.text())
        .then(text => {
            document.getElementById('news-md').innerHTML = marked.parse(text);
        });

    fetch('contents/publications.md')
        .then(response => response.text())
        .then(text => {
            document.getElementById('publications-md').innerHTML = marked.parse(text);
        });

    fetch('contents/awards.md')
        .then(response => response.text())
        .then(text => {
            document.getElementById('awards-md').innerHTML = marked.parse(text);
        });

});
