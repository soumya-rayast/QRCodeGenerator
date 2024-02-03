let imgBox = document.getElementById("imgBox");
let QRtext = document.getElementById("QRtext");
let QRimage = document.getElementById("QRimage");

function GenerateQR(){
    if(QRtext.value.length > 0){
        QRimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + QRtext.ariaValueMax;
    imgBox.classList.add("show-img")
    }else{
        QRtext.classList.add("error")
        setTimeout(()=>{
            QRtext.classList.add("error")
        },1000)
    }
}