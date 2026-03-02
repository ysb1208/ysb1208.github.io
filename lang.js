(function () {
    const DEFAULT_LANG = "ko";
    let currentLang = localStorage.getItem("lang") || DEFAULT_LANG;

    function applyLanguage() {
        document.querySelectorAll("[data-ko]").forEach(el => {
            el.textContent = el.dataset[currentLang];
        });

        document.documentElement.lang = currentLang;

        const btn = document.getElementById("langToggle");
        if (btn) {
            btn.innerText =
                currentLang === "en" ? "한국어로 보기" : "View in English";
        }
    }

    document.addEventListener("DOMContentLoaded", () => {
        const btn = document.getElementById("langToggle");

        if (btn) {
            btn.addEventListener("click", () => {
                currentLang = currentLang === "en" ? "ko" : "en";
                localStorage.setItem("lang", currentLang);
                applyLanguage();
            });
        }

        applyLanguage();
    });
})();
