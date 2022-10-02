var loadFile = function(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
};

function postData(input) {
    $.ajax({
        type: "POST",
        url: "test.py",
        data: { param: input },
        success: callbackFunc
    });
}

function callbackFunc(response) {
    // do something with the response
    console.log(response);
}

postData('data to process');

function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
}

function myfunction_clickevent(){
    $.ajax({
        url: "test.py",
        context: document.body
    });
}

function myfunction_onload(){
    $.ajax({
        url: "test.py",
         context: document.body
        })
    }