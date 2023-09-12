//let tempature = document.getElementById('data1')

let tempature = [document.getElementById('data1'), document.getElementById('data2'), document.getElementById('data3'), document.getElementById('data4'), document.getElementById('data5')]

for (let i = 0; i < tempature.length; i++) {


    tempature[i].innerHTML = Math.floor(Math.random() * 80) + 30


}



