document.addEventListener('DOMContentLoaded', function () {
    const calendarDates = document.getElementById('calendar-dates');
    const currentMonth = document.getElementById('current-month');
    let date = new Date();

    function renderCalendar() {
        calendarDates.innerHTML = '';
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();

        currentMonth.innerText = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

        // Create empty cells for days of the previous month
        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement('div');
            calendarDates.appendChild(emptyCell);
        }

        // Create cells for each day of the current month
        for (let day = 1; day <= lastDate; day++) {
            const dateCell = document.createElement('div');
            dateCell.innerText = day;
            dateCell.classList.add('date-cell');
            dateCell.addEventListener('click', () => alert(`Selected Date: ${day} ${currentMonth.innerText}`));
            calendarDates.appendChild(dateCell);
        }
    }

    document.getElementById('prev-month').addEventListener('click', function () {
        date.setMonth(date.getMonth() - 1);
        renderCalendar();
    });

    document.getElementById('next-month').addEventListener('click', function () {
        date.setMonth(date.getMonth() + 1);
        renderCalendar();
    });

    renderCalendar();
});
