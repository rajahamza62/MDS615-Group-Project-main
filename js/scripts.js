document.addEventListener('DOMContentLoaded', function () {
    const homeLink = document.getElementById('home-link');
    const calendarLink = document.getElementById('calendar-link');
    const musicLink = document.getElementById('music-link');
    const todoLink = document.getElementById('todo-link');

    const homeSection = document.getElementById('home');
    const calendarSection = document.getElementById('calendar');
    const musicSection = document.getElementById('music');
    const todoSection = document.getElementById('todo');

    homeLink.addEventListener('click', function () {
        homeSection.style.display = 'block';
        calendarSection.style.display = 'none';
        musicSection.style.display = 'none';
        todoSection.style.display = 'none';
    });

    calendarLink.addEventListener('click', function () {
        homeSection.style.display = 'none';
        calendarSection.style.display = 'block';
        musicSection.style.display = 'none';
        todoSection.style.display = 'none';
    });

    musicLink.addEventListener('click', function () {
        homeSection.style.display = 'none';
        calendarSection.style.display = 'none';
        musicSection.style.display = 'block';
        todoSection.style.display = 'none';
    });

    todoLink.addEventListener('click', function () {
        homeSection.style.display = 'none';
        calendarSection.style.display = 'none';
        musicSection.style.display = 'none';
        todoSection.style.display = 'block';
    });
});
