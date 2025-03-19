const wrapper = document.querySelector(".wrapper"),
  qrInput = document.getElementById("qr-input"),
  generateBtn = wrapper.querySelector(".form button"),
  qrImg = wrapper.querySelector(".qr-code img");

let preValue = "";

// Function to generate QR Code
const generateQRCode = () => {
  let qrValue = qrInput.value.trim();
  if (!qrValue || preValue === qrValue) return;
  
  preValue = qrValue;
  generateBtn.innerText = "Generating...";
  generateBtn.disabled = true;

  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrValue)}`;

  qrImg.onload = () => {
    wrapper.classList.add("active");
    generateBtn.innerText = "Generate QR Code";
    generateBtn.disabled = false;
  };

  qrImg.onerror = () => {
    alert("Failed to generate QR Code. Try again.");
    generateBtn.innerText = "Generate QR Code";
    generateBtn.disabled = false;
  };
};

// Event listener for button click
generateBtn.addEventListener("click", generateQRCode);
