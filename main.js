import './input.css'

/**
 * スライドイン、スライドアウト
 */
window.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".slide-left, .slide-right");
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight - 300 && rect.bottom > 0;

        if (inView) {
            el.classList.remove("opacity-0", "-translate-x-60", "translate-x-60");
        } else {
            // 元の方向に戻す
            if (el.classList.contains("slide-left")) {
                el.classList.add("opacity-0", "-translate-x-60");
            } else {
                el.classList.add("opacity-0", "translate-x-60");
            }
        }
    });
});

window.addEventListener("DOMContentLoaded", () => {
    fetch('data/qualifications.json')
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById('qualifications-data');
            data.forEach(item => {
                const divYmd = document.createElement('div');
                divYmd.innerHTML = item.ymd;
                container.appendChild(divYmd);

                const divTitle = document.createElement('div');
                divTitle.innerHTML = item.title;
                container.appendChild(divTitle);
            });
        });
});