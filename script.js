//let tempature = document.getElementById('data1')

let tempature = [document.getElementById('data1'), document.getElementById('data2'), document.getElementById('data3'), document.getElementById('data4'), document.getElementById('data5')]

for (let i = 0; i < tempature.length; i++) {


    tempature[i].innerHTML = Math.floor(Math.random() * 80) + 30


}


let articleTitle = [document.getElementById('article-link-1'), document.getElementById('article-link-2'), document.getElementById('article-link-3'), document.getElementById('article-link-4'), document.getElementById('article-link-5')]



articleTitle[0].textContent = 'A Cute Cat'

articleTitle[1].textContent = 'Same Cat'

articleTitle[2].textContent = 'CAN I GET A NEW CAT'

articleTitle[3].textContent = 'Thank You'

