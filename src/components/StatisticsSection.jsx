import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaProjectDiagram, FaStar, FaUsers } from "react-icons/fa";

export const StatisticsSection = () => {
  const stats = [
    { Icon: FaUsers, value: 530, label: "Clients Satisfaits" },
    { Icon: FaStar, value: 1800, label: "Votes Positifs" },
    { Icon: FaProjectDiagram, value: 260, label: "Projets Réussis" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % stats.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [stats.length]);

  const variants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const IconComponent = stats[currentIndex].Icon;

  return (
    <div className="mx-auto h-25 shadow-xl overflow-hidden">
      <div className="card mx-auto px-4">
        <h3 className="text-2xl p-2 font-bold text-center text-pink-500 ">
          Nos Chiffres
        </h3>
        <div className="relative h-40">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                y: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
              }}
              className="absolute w-full flex justify-center items-center"
            >
              <div className="text-center">
                <IconComponent className="text-5xl mb-2 mx-auto" />
                <motion.div
                  className="text-4xl font-bold"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {stats[currentIndex].value}+
                </motion.div>
                <motion.div
                  className="text-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {stats[currentIndex].label}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
