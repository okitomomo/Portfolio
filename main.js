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
            var table = new Tabulator("#skill-table", {
                layout:"fitDataStretch",
                rowHeight:60,
                data:data,
                dataTree:true,
                dataTreeStartExpanded:false,
                columns:[
                    {title:"Skill", field:"name", width:200, vertAlign:"middle", formatter:function(cell, formatterParams, onRendered){
                        if(cell.getData().img) {
                            const img = document.createElement('img');
                            img.src = "img/skill_icon/" + cell.getData().img;
                            img.classList.add('w-8', 'h-8', 'mr-2');
                            return img.outerHTML + cell.getValue(); 
                        } else {
                            return cell.getValue();
                        }
                    }},
                    {title:"Level", field:"level", formatter:"star", cssClass: "star-cell", vertAlign:"middle"},
                    {title:"Comment", field:"comment", width: 400, vertAlign:"middle", cssClass: ""},
                ],
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

/**
 * アコーディオン
 */
// function loadLeaderLine() {
//     return new Promise((resolve, reject) => {
//         const script = document.createElement('script');
//         script.src = 'https://cdn.jsdelivr.net/npm/leader-line@1.0.7/leader-line.min.js';
//         script.onload = () => resolve(window.LeaderLine);
//         script.onerror = reject;
//         document.body.appendChild(script);
//     });
// }

// loadLeaderLine().then(LeaderLine => {
//     // Slill Set
//     fetch('data/skills.json')
//         .then(res => res.json())
//         .then(data => {
//             const container = document.getElementById('skills-data');
            
//             data.forEach(item => {
//                 let elmRoot = document.createElement('div');
//                 let elmRows = [];
//                 drawSkill(item, null, elmRows);
//                 elmRows.forEach(elmRow => {
//                     elmRoot.appendChild(elmRow);
//                 });
//                 container.appendChild(elmRoot);
//             });
//             document.querySelectorAll('.skill').forEach(skill => {
//                 if(skill.dataset.parent) {
//                     const line = new LeaderLine(
//                         document.getElementById(skill.dataset.parent),
//                         skill,
//                         { color: '#ff3c56', size: 2, path: 'straight', endPlug: 'disc' }
//                     );
//                     line.position();
//                 }
//             });
//         });
// });

// function drawSkill(skill, elmParentSkill, elmRows = [], cntNested = 0) {
//     const tempSkill = document.getElementById('template-skill').cloneNode(true);
//     tempSkill.id = 'skill-' + skill.name;
//     if(elmParentSkill) {
//         tempSkill.dataset.parent = elmParentSkill.id;
//     }
//     tempSkill.querySelector('.img-icon').src = 'img/skill_icon/' + skill.img;
//     tempSkill.querySelector('.skill-name').innerHTML = skill.name;

//     var elmRow;
//     if(!elmRows[cntNested]) {
//         elmRow = document.createElement('div');
//         elmRow.classList.add('flex', 'flex-row','w-full','gap-x-8', 'justify-center', 'py-8'); 
//         elmRows[cntNested] = elmRow;
//     }
//     elmRow = elmRows[cntNested];
//     elmRow.appendChild(tempSkill);
    
//     skill.children.forEach(child => {
//         drawSkill(child, tempSkill, elmRows, cntNested + 1);
//     });
// }

