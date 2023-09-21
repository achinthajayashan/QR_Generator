const maindiv = document.querySelector("#mainDiv"),
    qrInput =maindiv.querySelector(".form input"),
generateBtn = maindiv.querySelector(".form button");
qrImg = maindiv.querySelector(".qrs img");


generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;

    if (!qrValue) return;
    qrImg.src=` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    maindiv.classList.add("active");


});

