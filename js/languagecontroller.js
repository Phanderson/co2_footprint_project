function setLanguage(lang) {
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    localStorage.setItem("language", lang);
  }
  
  // Sprache beim Laden setzen
  window.onload = () => {
    const savedLang = localStorage.getItem("language") || "de";
    setLanguage(savedLang);
  };