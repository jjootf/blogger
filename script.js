const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

// 페이지 로드 시 테마 유지
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
});

// Disqus 댓글 시스템 로드
(function() {
    var d = document, s = d.createElement('script');
    s.src = 'https://YOUR_DISQUS_SUBDOMAIN.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();

const form = document.getElementById('guestbook-form');
const messagesList = document.getElementById('messages-list');

// 메시지 로드
document.addEventListener('DOMContentLoaded', () => {
    const savedMessages = JSON.parse(localStorage.getItem('guestbookMessages')) || [];
    savedMessages.forEach(message => addMessageToDOM(message));
});

// 폼 제출 이벤트 처리
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = event.target.message.value.trim();
    if (message) {
        addMessageToDOM(message);
        saveMessageToLocalStorage(message);
        event.target.reset();
    }
});

// 메시지를 DOM에 추가
function addMessageToDOM(message) {
    const li = document.createElement('li');
    li.textContent = message;
    messagesList.appendChild(li);
}

// 메시지를 로컬 스토리지에 저장
function saveMessageToLocalStorage(message) {
    const messages = JSON.parse(localStorage.getItem('guestbookMessages')) || [];
    messages.push(message);
    localStorage.setItem('guestbookMessages', JSON.stringify(messages));
}
