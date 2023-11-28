let imgbox=document.getElementById("imgBox");
let qrImg=document.getElementById("qrImg");
let qrText=document.getElementById("qrText");
function getQr(){
    if (qrText.value.length>0)
    {
    qrImg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    imgbox.classList.add("show-img")
    imgbox.style.transition="max-height 1s"
    }
    else {
        imgbox.classList.remove("show-img")
        imgbox.style.transition="none"
        qrText.classList.add("error")
        setTimeout(()=>{
            qrText.classList.remove("error");
        },1000)
    }
}