import './input.css'
import {TabulatorFull as Tabulator } from 'https://unpkg.com/tabulator-tables@6.3.1/dist/js/tabulator_esm.min.mjs';

/**
 * スライドイン、スライドアウト
 */
window.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".slide-left, .slide-right");
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight - 300 && rect.bottom > 0;

        if (inView) {
            el.classList.remove("opacity-0", "-translate-x-60", "translate-x-60", "md:-translate-x-60");
        } else {
            // 元の方向に戻す
            if (el.classList.contains("slide-left")) {
                el.classList.add("opacity-0", "-translate-x-60", "md:-translate-x-60");
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
    // About me
    document.getElementById('age').innerHTML = getAge() + '歳';

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

                contentTemplate.id = '';
                contentTemplate.querySelector('.ymd').innerHTML = item.ymd;
                contentTemplate.querySelector('.title').innerHTML = item.title;
                contentTemplate.querySelector('.caption').innerHTML = item.caption;
                container.appendChild(contentTemplate)
                count++;
            });
        });
    
    // Skill Set
    fetch('data/skills.json')
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById('skills-data');
            data.forEach(skill => {
                appendSkillRow(container, skill,  0);
            });
            var rowCount = 0;
            container.querySelectorAll('tr').forEach((elmRow) => {
                if(rowCount++ % 2 == 0) {
                    elmRow.querySelectorAll('td').forEach((elmCell) => {
                        elmCell.classList.remove('bg-[#363636]');
                    });
                }
            });
        });
    // Production
    fetch('data/products.json')
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById('products-data');
            data.forEach(product => {
                const tempProduct = document.getElementById('template-product').cloneNode(true);
                tempProduct.id = '';
                tempProduct.querySelector('.product-name').innerHTML = product.name;
                tempProduct.querySelector('.product-overview').innerHTML = product.overview;
                tempProduct.querySelector('.product-img').src = 'product/' + product.id + '/thumbnail.png';
                container.appendChild(tempProduct);
            });
        });

    // Work history
    fetch('data/work_histories.json')
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById('workhistories-data');
            data.forEach(work => {
                const tempWorkHistory = document.getElementById('template-workhistory').cloneNode(true);
                tempWorkHistory.id = '';
                tempWorkHistory.querySelector('.work-title').innerHTML = work.title;

                work.contents.forEach(business => {
                    const tempBusiness = document.getElementById('template-business').cloneNode(true);
                    tempBusiness.id = '';
                    tempBusiness.querySelector('.business-content').innerHTML = business.content;
                    tempBusiness.querySelector('.business-achievement').innerHTML = business.achievement;
                    tempBusiness.querySelector('.business-technology').innerHTML = business.technology;
                    tempBusiness.querySelector('.business-database').innerHTML = business.database;
                    tempBusiness.querySelector('.business-os').innerHTML = business.os;

                    tempBusiness.querySelector('.business-database').innerHTML = business.database;
                    tempBusiness.querySelector('.business-title').innerHTML = business.title;
                    tempBusiness.querySelector('.business-from').innerHTML = business.from;
                    tempBusiness.querySelector('.business-to').innerHTML = business.to;

                    // 従事期間を求める
                    var [startYear, startMonth] = business.from.split('/').map(Number);
                    var [endYear, endMonth] = business.to.split('/').map(Number);
                    if(business.to == '現在') {
                        endYear = new Date().getFullYear();
                        endMonth = new Date().getMonth() + 1;
                    }

                    var years = endYear - startYear;
                    var months = endMonth - startMonth + 1;
                    if(months <0){
                        months += 12;
                        years -= 1;
                    } 
                    var strYm;
                    if(years > 0) {
                        strYm = years + '年' + months + 'ヶ月';
                    } else {
                        strYm = months + 'ヶ月';
                    }
                    tempBusiness.querySelector('.business-ym').innerHTML = strYm;

                    if(business.is_charge) {
                        tempBusiness.querySelector('.business-pm').innerHTML = business.pm ? '●' : '';
                        tempBusiness.querySelector('.business-pl').innerHTML = business.pl ? '●' : '';
                        tempBusiness.querySelector('.business-rd').innerHTML = business.rd ? '●' : '';
                        tempBusiness.querySelector('.business-bd').innerHTML = business.bd ? '●' : '';
                        tempBusiness.querySelector('.business-dd').innerHTML = business.dd ? '●' : '';
                        tempBusiness.querySelector('.business-cd').innerHTML = business.cd ? '●' : '';
                        tempBusiness.querySelector('.business-test').innerHTML = business.test ? '●' : '';
                        tempBusiness.querySelector('.business-op').innerHTML = business.op ? '●' : '';
                    } else {
                        tempBusiness.querySelector('table').remove();
                    }

                    /**
                     * アコーディオン
                     */
                    tempBusiness.querySelectorAll('.acrd-btn-history').forEach(item => {
                        item.addEventListener('click', () => {
                            const elmTriangle = item.querySelector('.triangle');
                            elmTriangle.classList.toggle('-rotate-180');
                            elmTriangle.classList.toggle('text-[#ff3c56]');
                            elmTriangle.classList.toggle('bg-[#ff3c56]');
                            elmTriangle.classList.toggle('hover:bg-[#c11b31]');
                            elmTriangle.classList.toggle('bg-white');
                            elmTriangle.classList.toggle('hover:bg-[#bbbbbb]');

                            item.classList.toggle('text-[#ff3c56]');
                            item.classList.toggle('text-white');
                            const content = item.parentElement.parentElement.querySelector('.acrd-cnt-history');
                            
                            if (content.style.maxHeight && content.style.maxHeight !== '0px') {
                                // 閉じるアニメーション
                                content.style.maxHeight = '0px';
                            } else {
                                // 開くアニメーション（scrollHeightで実際の高さを取得）
                                content.style.maxHeight = content.scrollHeight + 'px';
                                // 他に開いているアコーディオンがある場合閉じる
                                document.querySelectorAll('.acrd-btn-history').forEach(other => {
                                    if (other !== item) {
                                        const elmTriangle = other.querySelector('.triangle');
                                        elmTriangle.classList.remove('-rotate-180');
                                        elmTriangle.classList.remove('text-[#ff3c56]');
                                        elmTriangle.classList.add('bg-[#ff3c56]');
                                        elmTriangle.classList.add('hover:bg-[#c11b31]');
                                        elmTriangle.classList.remove('bg-white');
                                        elmTriangle.classList.remove('hover:bg-[#bbbbbb]');
                                        other.classList.remove('text-[#ff3c56]');
                                        other.classList.add('text-white');
                                        other.parentElement.parentElement.querySelector('.acrd-cnt-history').style.maxHeight = '0px';
                                    }
                                });
                            }
                        });
                    });

                    tempWorkHistory.querySelector('.businesses-data').appendChild(tempBusiness);
                });
                container.appendChild(tempWorkHistory);
            });
        });
});

function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.toggle('hidden');
    modal.classList.toggle('fixed');
    const overlay = document.querySelector('#modal-overlay');
    overlay.classList.toggle('hidden');
    overlay.classList.toggle('fixed');

    // スクロール無効化
    document.body.style.overflow = "hidden";
}

document.querySelectorAll('.btn-close-modal').forEach(elmBtn => {
    elmBtn.addEventListener('click', () => {
        hideModal(elmBtn);
    });
});

function hideModal(elmBtn) {
    const modal = elmBtn.closest('.modal');
    modal.classList.toggle('hidden');
    modal.classList.toggle('fixed');
    
    const overlay = document.querySelector('#modal-overlay');
    overlay.classList.toggle('hidden');
    overlay.classList.toggle('fixed');

    // スクロール有効化
    document.body.style.overflow = "";
}

document.getElementById('modal-overlay').addEventListener('click', () => {
    hideModal(document.querySelector('.btn-close-modal')); 
});

function appendSkillRow(container, skill, nested = 0) {
    const tempSkill = document.getElementById('template-skill-row').cloneNode(true);
    tempSkill.id = '';
    tempSkill.classList.remove('hidden');
    if(skill.img) {
        tempSkill.querySelector('.skill-img').src = 'img/skill_icon/' + skill.img;
    } else {
        tempSkill.querySelector('.skill-img').remove();
    }
    tempSkill.querySelector('.skill-name').innerHTML = skill.name;
    tempSkill.querySelector('.skill-level').querySelectorAll('.fa-star').forEach((item, index) => {
        if(index < skill.level) {
            item.classList.add('text-[#ff3c56]');
        }
    });
    tempSkill.querySelector('.skill-comment').innerHTML = skill.comment;
    tempSkill.querySelector('.btn-comment').addEventListener('click', (e) => {
        const elmBtn = e.currentTarget;
        const elmModal = document.getElementById('modal-skill-comment');
        elmModal.querySelector('.skill-name').innerHTML = elmBtn.closest('tr').querySelector('.skill-name').innerHTML;
        elmModal.querySelector('.skill-comment').innerHTML = elmBtn.closest('tr').querySelector('.skill-comment').innerHTML;
        showModal('modal-skill-comment');        
    });
    if(nested > 0) {
        tempSkill.querySelector('.skill-tree').style.marginLeft = nested * 16 + 'px';
        tempSkill.querySelector('.skill-tree').innerHTML = '┗';
    }
    container.appendChild(tempSkill);

    if(!skill._children) return;
    skill._children.forEach(child => {
        appendSkillRow(container, child, nested + 1);
    });
}

function getAge() {
    const b = new Date("1992/11/19");
    const today = new Date();

    let age = today.getFullYear() - b.getFullYear();

    // 誕生日がまだ来てなければ -1
    const hasBirthdayPassed =
        (today.getMonth() > b.getMonth()) ||
        (today.getMonth() === b.getMonth() && today.getDate() >= b.getDate());

    if (!hasBirthdayPassed) {
        age--;
    }

    return age;
}
