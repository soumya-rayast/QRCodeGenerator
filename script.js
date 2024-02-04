const imageBox = document.getElementById("imgBox");
const QRText = document.getElementById("QRtext");
const QRimage = document.getElementById("QRimage");

function GenerateQR(){
    const inputValue = QRText.value ;
    if(inputValue.length > 0){
        const QRcodeURL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
        QRimage.src = QRcodeURL;
        imageBox.classList.add("show-img")
    }
    else{
        QRText.classList.add("error");
        setTimeout(()=>{
            QRText.classList.remove("error");
        },1000)
    }
}

