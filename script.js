let imgBox = document.getElementById("imgBox");
let QRtext = document.getElementById("QRtext");
let QRimage = document.getElementById("QRimage");

function GenerateQR(){
    QRimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + QRtext.ariaValueMax;
    imgBox.classList.add("show-img")
}