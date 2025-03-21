var userLanguage = navigator.language || navigator.userLanguage;
var detectedLanguage = userLanguage.substring(0, 2);
if (detectedLanguage === "en") {
    window.location.href = "en/";
} else if (detectedLanguage === "ru") {
    window.location.href = "ru/";
} else {
    window.location.href = "en/";
}
