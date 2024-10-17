import Link from "next/link";
import React from "react";

const plans = [
  {
    name: "SEO",
    price: "30 €",
    period: "Forfait mensuel",
    features: [
      "Budget de 30 € à 530 €",
      "Construction de backlinks",
      "Recherche de mots-clés",
      "SEO technique",
    ],
  },
  {
    name: "Shopify",
    price: "130 €",
    period: "Par boutique",
    features: [
      "Budget de 130 € à 730 €",
      "Boutique Shopify ou WordPress",
      "Produits gagnants",
      "Thème premium",
    ],
  },
  {
    name: "SEM/SMM",
    price: "80 €",
    period: "Forfait mensuel",
    features: [
      "Budget de 80 € à 480 €",
      "Marketing SEM/SMM",
      "Gestion de campagnes publicitaires",
      "Recherche d'audience ciblée",
    ],
  },
];

const Pricing: React.FC = () => {
  return (
    <section className="py-20 bg-night-light">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-sky-accent mb-4 text-center">
          FORFAITS PERSONNALISABLES
        </h2>
        <h3 className="text-3xl font-bold text-center mb-12 text-white">
          Nos forfaits de services populaires
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="border border-gray-700 p-8 rounded-lg text-center transition duration-300 hover:shadow-xl bg-night"
            >
              <h3 className="text-2xl font-semibold mb-4 text-sky-accent">
                {plan.name}
              </h3>
              <div className="text-4xl font-bold mb-2 text-white">
                {plan.price}
              </div>
              <div className="text-gray-400 mb-6">{plan.period}</div>
              <ul className="mb-8 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mb-2 flex items-center text-gray-300">
                    <svg
                      className="w-4 h-4 mr-2 text-violet-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="bg-violet-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-accent transition duration-300 inline-block"
              >
                OBTENIR UN DEVIS
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
