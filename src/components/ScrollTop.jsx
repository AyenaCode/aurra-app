import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Fonction pour faire défiler vers le haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Détecter si l'utilisateur a fait défiler vers le bas
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-400 hover:to-violet-500 shadow-xl"
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer",
            width: "50px",
            height: "50px",
          }}
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
