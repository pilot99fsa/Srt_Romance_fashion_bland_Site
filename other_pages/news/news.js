//各ニュースの『続きを見る』をクリックしたらモーダルウインドウを表示するJavaScript

//card-modal-1のスクリプト

//モーダルを開くボタンを取得する
const buttonOpen1 = document.getElementById("modal-open-1");

//モーダルを閉じるボタンを取得する
const buttonClose1 = document.getElementById("modal-close-1");

//モーダルウインドウ表示する要素を取得する
const modal1 = document.getElementById("card-modal-1");

//クリックで各ニュースの詳細を見れるモーダルウインドウを表示
buttonOpen1.addEventListener("click", () => {
    modal1.style.display = "flex"
})

//クリックでモーダルウインドウを閉じる
buttonClose1.addEventListener("click", () => {
    modal1.style.display = "none"
})

//モーダルウインドウの枠外をクリックしてもモーダルウインドウを閉じるようにする
document.addEventListener("click", (e) => {
    if (e.target == modal1) {
        modal1.style.display = "none";
    }
})

//以下のcard-modal2~6で同じことの繰り返し

//card-modal-2のスクリプト

const buttonOpen2 = document.getElementById("modal-open-2");

const buttonClose2 = document.getElementById("modal-close-2");

const modal2 = document.getElementById("card-modal-2");

buttonOpen2.addEventListener("click", () => {
    modal2.style.display = "flex"
}
)
buttonClose2.addEventListener("click", () => {
    modal2.style.display = "none"
})

document.addEventListener("click", (e) => {
    if (e.target == modal2) {
        modal2.style.display = "none";
    }
})

//card-modal-3のスクリプト

const buttonOpen3 = document.getElementById("modal-open-3");

const buttonClose3 = document.getElementById("modal-close-3");

const modal3 = document.getElementById("card-modal-3");

buttonOpen3.addEventListener("click", () => {
    modal3.style.display = "flex"
})

buttonClose3.addEventListener("click", () => {
    modal3.style.display = "none"
})

document.addEventListener("click", (e) => {
    if (e.target == modal3) {
        modal3.style.display = "none";
    }
})

//card-modal-4のスクリプト

const buttonOpen4 = document.getElementById("modal-open-4");

const buttonClose4 = document.getElementById("modal-close-4");

const modal4 = document.getElementById("card-modal-4");

buttonOpen4.addEventListener("click", () => {
    modal4.style.display = "flex"
})

buttonClose4.addEventListener("click", () => {
    modal4.style.display = "none"
})

document.addEventListener("click", (e) => {
    if (e.target == modal4) {
        modal4.style.display = "none";
    }
})

//card-modal-5のスクリプト

const buttonOpen5 = document.getElementById("modal-open-5");

const buttonClose5 = document.getElementById("modal-close-5");

const modal5 = document.getElementById("card-modal-5");

buttonOpen5.addEventListener("click", () => {
    modal5.style.display = "flex"
})

buttonClose5.addEventListener("click", () => {
    modal5.style.display = "none"
})

document.addEventListener("click", (e) => {
    if (e.target == modal5) {
        modal5.style.display = "none";
    }
})

//card-modal-6のスクリプト

const buttonOpen6 = document.getElementById("modal-open-6");

const buttonClose6 = document.getElementById("modal-close-6");

const modal6 = document.getElementById("card-modal-6")

buttonOpen6.addEventListener("click", () => {
    modal6.style.display = "flex"
})

buttonClose6.addEventListener("click", () => {
    modal6.style.display = "none"
})

document.addEventListener("click", (e) => {
    if (e.target == modal6) {
        modal6.style.display = "none";
    }
})
