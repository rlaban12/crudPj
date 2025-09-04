// 요소 선택
const $openBtn = document.querySelector(".open-login-btn");
const $modalOverlay = document.getElementById("modalOverlay");
const $closeBtn = document.getElementById("closeBtn");

const $openSignupBtn = document.querySelector(".signup-btn");
const $signupModal = document.querySelector(".signup-modal-overlay");
const $signupCloseBtn = document.querySelector(".signup-close-btn");

// 로그인 모달 열기
$openBtn.addEventListener("click", () => {
    $modalOverlay.style.display = "flex";
});

// 로그인 모달 닫기
$closeBtn.addEventListener("click", () => {
    $modalOverlay.style.display = "none";
});

// 회원가입 모달 열기
$openSignupBtn.addEventListener("click", () => {
    $signupModal.style.display = "flex";
});


// 회원가입 모달 닫기
$signupCloseBtn.addEventListener("click", () => {
    $signupModal.style.display = "none";
});
