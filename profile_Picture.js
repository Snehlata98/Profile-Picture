document.getElementById("imageUpload").style.visibility="hidden";

const image_upload = document.querySelector("#imageUpload");
var uploaded_image="";

image_upload.addEventListener("change",function(){
    const reader = new FileReader();
    reader.addEventListener("load",()=>{
        uploaded_image = reader.result;
        document.querySelector("#displayPicture").style.backgroundImage=`url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
});