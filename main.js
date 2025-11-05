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

/**
 * データの流し込み
 */
window.addEventListener("DOMContentLoaded", () => {
    // Qualification
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
    // My life
    var count = 0;
    fetch('data/mylifes.json')
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById('mylifes-data');
            data.forEach(item => {
                // 左右どちらかでテンプレートを切り替え
                var templateId = '';
                if(count % 2 == 0) {
                    templateId = 'template-mylife-left';
                } else {
                    templateId = 'template-mylife-right';
                }
                const contentTemplate = document.getElementById(templateId).cloneNode(true);

                if(count == 0) {
                    contentTemplate.classList.remove('-mt-16');
                }

                contentTemplate.querySelector('.ymd').innerHTML = item.ymd;
                contentTemplate.querySelector('.title').innerHTML = item.title;
                contentTemplate.querySelector('.caption').innerHTML = item.caption;
                container.appendChild(contentTemplate)
                count++;
            });
        });
});