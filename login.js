let generatedOtp = "";

// Function to generate random 6-digit OTP
function generateOtp() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

document.getElementById("getOtpBtn").addEventListener("click", function() {
    const identifier = document.getElementById("identifier").value;

    if (identifier) {
        // Generate random OTP
        generatedOtp = generateOtp();
        
        // Simulate sending OTP (You can replace this with actual API call)
        alert(`OTP sent to ${identifier}: ${generatedOtp}`);
        
        // Show OTP section after getting OTP
        document.getElementById("otpSection").style.display = "block";
    } else {
        alert("Please enter a valid Phone Number or Aadhaar ID");
    }
});

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const otp = document.getElementById("otp").value;

    // Validate entered OTP with generated OTP
    if (otp === generatedOtp) {
        alert("Login successful!");
        // Proceed with redirection or other logic
    } else {
        alert("Invalid OTP. Please try again.");
    }
});
