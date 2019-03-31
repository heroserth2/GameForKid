var nowQuestion = 0;
var life = 3;
var score = 0;
var end = false;
var numQuestion = [0,1,2,3,4,5,6,7,8,9]
var question = [
    { imgstutus: { address: null }, question: "จงเลือกจำนวนที่มีค่าตรงกับ ห้าสิบแปดล้านสี่แสนแปดหมื่นเก้าพันหกสิบสอง", choice: { choice1: "58,489,062", choice2: "58,841,972", choice3: "54,564,852", choice4: "56,452,062", check: "choice1" } },
    { imgstutus: { address: null }, question: "ห้าสิบแปดล้านสี่แสนแปดหมื่นเก้าพันหกสิบสอง บวก สี่หมื่นสองพันหนึ่งร้อยห้าสิบ เท่ากับเท่าไร", choice: { choice1: "57,564,852", choice2: "58,841,972", choice3: "58,531,212", choice4: "56,452,062", check: "choice1" } },
    { imgstutus: { address: null }, question: "มีข้าวสารอยู่ 750 กิโลกรัม แบ่งใส่ถุง ถุงละ 15 กิโลกรัม ขายไปถุงละ 280 บาท จะได้เงินกี่บาท ", choice: { choice1: "4200", choice2: "8900", choice3: "1400", choice4: "2500", check: "choice3" } },
    { imgstutus: { address: null }, question: "ฟาร์มแห่งหนึ่งมีวัว 458 ตัว มีหมา 5 ตัว มีหมู 350 ตัว ฟาร์มแห่งนี้มีหางสัคว์ทั้งหมดกี่หาง", choice: { choice1: "795", choice2: "813", choice3: "845", choice4: "851", check: "choice2" } },
    { imgstutus: { address: null }, question: "ถ้าโยนลูกเต๋า 1 ลูก 1 ครั้ง ความน่าจะเป็นที่จะได้แต้ม 1 เป็นอย่างไร", choice: { choice1: "อาจเกิดขึ้นหรือไม่เกิดขึ้น", choice2: "เกิดขึ้นแน่นอน", choice3: "เป็นไปไม่ได้", choice4: "เป็นไปได้มาก", check: "choice1" } },
    { imgstutus: { address: null }, question: "ในกล่องใบหนึ่งมีบัตรตัวอักษร A 2 ใบ บัตรตัวอักษร B 5 ใบ บัตรตัวอักษร C 3 ใบ และบัตรตัวอักษร D 7 ใบ หากต้องการหยิบบัตรตัวอักษรขึ้นมา 1 ใบเหตุการณ์ที่มีโอกาสเกิดขึ้นแน่นอนคือข้อใด", choice: { choice1: "หยิบได้บัตรตัวอักษร A", choice2: "หยิบได้บัตรตัวอักษร B", choice3: "หยิบได้บัตรตัวอักษร C", choice4: "หยิบได้บัตรตัวอักษร", check: "choice4" } },
    { imgstutus: { address: null }, question: "ถ้าโยนลูกเต่า 2 ลูก 1 ครั้ง โอกาศที่ผลบวกหน้าลูกเต๋าที่หงายขึ้นเป็น 13 มีโอกาสเป็นเท่าไร", choice: { choice1: "เกิดขึ้นน้อยมาก", choice2: "เกิดขึ้นแน่นอน", choice3: "เป็นไปไม่ได้", choice4: "อาจเกิดขึ้นหรือไม่เกิดขึ้น", check: "choice3" } },
    { imgstutus: { address: null }, question: "ในถุงกระดาษใบหนึ่งมีขนมปังไส้สับปะรด 2 ชิ้น ไส้สังขยา 5 ชิ้น ไส้ถั่วดำ 4 ชิ้น และไส้หมูหยอง 3 ชิ้นจากข้อมูล หากต้องการหยิบขนมปังออกมา 1 ชิ้น โดยไม่ดู โอกาสที่จะหยิบได้ขนมปังไส้ใดน้อยที่สุด", choice: { choice1: "ขนมปังไส้สับปะรด", choice2: "ขนมปังไส้สังขยา", choice3: "ขนมปังไส้ถั่วดำ", choice4: "ขนมปังไส้หมูหยอง", check: "choice1" } },
    { imgstutus: { address: "./resource/04.PNG" }, question: "พนักงานบริษัทนี้ลาออกแล้วกี่คน", choice: { choice1: "40", choice2: "80", choice3: "160", choice4: "320", check: "choice3" } },
    { imgstutus: { address: "./resource/03.PNG" }, question: "แผนภูมิรูปภาพแสดงการชมรายการทอล็คโชว์ ของสถานีโทรทัศน์ในเดือนมกราคม ปี พ.ศ. 2538 ถ้า A,B,C,D แทนรายการเรื่องหนึ่ง ๆ  โดยผู้ชมที่ดูรายการ A มีจำนวนผู้ชมมากกว่ารายการ B จำนวนผู้ชมรายการ B มีน้อยกว่ารายการ D และจำนวนผู้ชมรายการ B และ C มีจำนวนผู้ชมเท่ากัน ถ้ารายการ D มีจำนวนผู้ชมมากที่สุด รายการ A คือรายการอะไร", choice: { choice1: "ทไวไลท์โชว์", choice2: "จันทร์กระพริบ", choice3: "สี่ทุ่มสแควร์", choice4: "เจาะใจ", check: "choice1" } }]
function endQuestion() {
    document.getElementById("scoreEndGame").innerHTML = "คุณได้คะแนน : " + score
}
function EndGame(value) {
    if (value === "open") {
        document.getElementById('endGame').classList.remove('deplay-none');
    } else {
        document.getElementById('endGame').classList.add('deplay-none');
    }
}
function scoreGame(value) {
    if (value === "open") {
        document.getElementById('scoreGame').classList.remove('deplay-none');
    } else {
        document.getElementById('scoreGame').classList.add('deplay-none');
    }
}
//mainGame
function mainGame(value){
    if (value === "open") {
        document.getElementById('mainGame').classList.remove('deplay-none');
    } else {
        document.getElementById('mainGame').classList.add('deplay-none');
    }
}
function playQuestion() {
    window.location.href = './Question.html';
}
function goBabyGod(){
    window.location.href = './selectGame.html';
}
function scoreBoard(){
    mainGame("close")
    EndGame("close")
    scoreGame("open")
    document.getElementById("scoreScoreGame").innerHTML = "คุณได้คะแนน : " + score
}
function endGame() {
    endQuestion()
    EndGame("open")
    mainGame("close")
}
function startTime() {

    var timeOut = 0;
    var timer = 60 * 5, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById("timeGame").innerHTML = minutes + ":" + seconds;
        if (timer === timeOut) {
            endGame()
        }
        if (--timer < 0) {
            timer = 60 * 5;
        }
    }, 1000);
}
function searchAns(value) {
    var result;
    question[numQuestion[nowQuestion]].choice.check === value ? result = true : result = false
    return result
}
function showImg() {
    document.getElementById('imgGame').classList.remove('deplay-none');
}
function hideImg() {
    document.getElementById('imgGame').classList.add('deplay-none');
}
function nextQuestion(nowQuestion) {
    if (nowQuestion !== 9) {
        if (question[numQuestion[nowQuestion + 1]].imgstutus.address !== null) {
            showImg()
            document.getElementById("imgGame").src = question[numQuestion[nowQuestion + 1]].imgstutus.address
        } else {
            hideImg()
        }
        document.getElementById("GameScore").innerHTML = score
        document.getElementById("GameHeart").innerHTML = life
        document.getElementById("proposition").innerHTML = question[numQuestion[nowQuestion + 1]].question
        document.getElementById("choice1").innerHTML = question[numQuestion[nowQuestion + 1]].choice.choice1
        document.getElementById("choice2").innerHTML = question[numQuestion[nowQuestion + 1]].choice.choice2
        document.getElementById("choice3").innerHTML = question[numQuestion[nowQuestion + 1]].choice.choice3
        document.getElementById("choice4").innerHTML = question[numQuestion[nowQuestion + 1]].choice.choice4
        plus()
        nextLevel(nowQuestion+2)
    } else {
        scoreBoard()
    }
}
function addScore(checkScore) {
    if (checkScore) {
        if (nowQuestion === 0) {
            score = 20;
        } else {
            score = score + 10;
        }
    } else {
        if (life !== 0) {
            life = life - 1
        } else {
            endGame()
        }
    }
}
function plus() {
    nowQuestion = nowQuestion + 1
}
function selectAns(value) {
    var checkAns = searchAns(value)
    console.log(checkAns)
    console.log(nowQuestion)
    console.log("-------------")
    if (checkAns) {
        addScore(true)
        nextQuestion(nowQuestion)
    } else {
        addScore(false)
        if (end) {
            endGame()
        } else {
            nextQuestion(nowQuestion)
        }
    }
}
function rendomArray(array) {
    var tmp, current, top = array.length;
    if(top) while(--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
    return array;
  }
  
function start() {
    rendomArray(numQuestion)
    if (question[numQuestion[nowQuestion]].imgstutus.address !== null) {
        showImg()
        document.getElementById("imgGame").src = question[numQuestion[nowQuestion]].imgstutus.address
    } else {
        hideImg()
    }
    document.getElementById('proposition').innerHTML = question[numQuestion[nowQuestion]].question;
    document.getElementById("choice1").innerHTML = question[numQuestion[nowQuestion]].choice.choice1
    document.getElementById("choice2").innerHTML = question[numQuestion[nowQuestion]].choice.choice2
    document.getElementById("choice3").innerHTML = question[numQuestion[nowQuestion]].choice.choice3
    document.getElementById("choice4").innerHTML = question[numQuestion[nowQuestion]].choice.choice4
    startTime()
}
function nextLevel(value) {
    document.getElementById("levelGame").innerHTML = "ด่านที่ "+value + " / 10"
}
start()
console.log(numQuestion)