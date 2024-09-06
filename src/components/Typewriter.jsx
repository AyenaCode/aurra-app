import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export const Typewriter = ({ texts }) => {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150); // Vitesse de frappe

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[loopNum % texts.length]; // Récupère le texte à afficher
      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause avant d'effacer
        setTypingSpeed(50); // Réduit la vitesse d'effacement
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150); // Réinitialise la vitesse de frappe
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [currentText, isDeleting, loopNum, typingSpeed, texts]);

  return (
    <div className="text-l font-bold text-center md:text-2xl">
      <span>{currentText}</span>
      <span className="blinking-cursor">|</span>
    </div>
  );
};

// Typage des props avec PropTypes
Typewriter.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string).isRequired, // Vérifie que `texts` est un tableau de chaînes
};
