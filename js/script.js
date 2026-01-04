//JS Dark/Light Mode
const mode = document.getElementById('mode-checkbox');

// Check trong local storage có lưu trữ gì về mode đang sử dụng không
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    if (mode) mode.checked = false;
}

if (mode) {
    mode.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark')
        }
    });
}

//JS Bộ đếm thành tích
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('target');
        const c = +counter.innerText;

        const increment = target / 100;

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});