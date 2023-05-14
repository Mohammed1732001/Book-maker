var sitNameInput = document.getElementById("sitName")
var sitUrlInput = document.getElementById("sitUrl")
var sitContainer = []
if (localStorage.getItem("saits") != null) {
    sitContainer = JSON.parse(localStorage.getItem("saits"))
}
disblay(sitContainer)
function submint() {
    var sit = {
        input1: sitNameInput.value,
        input2: sitUrlInput.value,
    }
if(sitNameInput.value==0 && sitUrlInput.value==0){
document.getElementById("alert").innerHTML= `
<p class="alert alert-danger" role="alert">
    Name is required
</p>`
document.getElementById("alert1").innerHTML= `
<p class="alert alert-danger" role="alert">
    URL is required
</p>`
}else{
    sitContainer.push(sit)
    localStorage.setItem("saits", JSON.stringify(sitContainer))
    disblay()
    console.log(sitContainer);

}
    clearform()
}
function disblay() {
    var cartona = ""
    for (var i = 0; i < sitContainer.length; i++)
        cartona += `<h2 class="me-auto mb-5 d-inline-block col-7">` + sitContainer[i].input1 + `</h2>
<a  target="_blank" href="` + sitContainer[i].input2 + ` " class="btn mb-5 btn-info d-inline-block col-2 ">visit</a>
<button onclick="deleteSite(`+ i + `)"  class="btn btn-danger mb-5 d-inline-block col-2 ">Delete</button>`
    document.getElementById("saveSite").innerHTML = cartona
}
function deleteSite(index) {
    sitContainer.splice(index, 1)
    disblay()
}
function clearform() {
    sitNameInput.value = "";
    sitUrlInput.value = "";
}