// ./components/Team.jsx
// import React from "react";
// import samatImg from "../assets/team/samat.jpg"; // Update with real image paths
// import tolegenImg from "../assets/team/tolegen.jpg";

const Team = () => {
  return (
    <section id="team" className="py-12 bg-n-7 text-center">
      <h2 className="h2 mb-8 text-color-1">Руководство компании</h2>

      <div className="flex flex-col sm:flex-row justify-center gap-8 px-4 max-w-4xl mx-auto">
        {/* Samat */}
        <div className="bg-n-8 border border-n-6 p-4 rounded-2xl w-full sm:w-1/2">
          <img
            // src={samatImg}
            alt="Samat Berikbol"
            className="w-20 h-20 mx-auto mb-3 rounded-full object-cover"
          />
          <h3 className="text-base font-semibold text-n-1">Самат Берикбол</h3>
          <p className="text-sm text-n-3 mb-2">Генеральный директор</p>
          <div className="text-xs text-n-3 space-y-1">
            <p>
              📞{" "}
              <a
                href="tel:+77771234567"
                className="hover:underline text-color-1"
              >
                +7 (777) 123-4567
              </a>
            </p>
            <p>
              📧{" "}
              <a
                href="mailto:samat@example.com"
                className="hover:underline text-color-1"
              >
                samat@example.com
              </a>
            </p>
            <p>
              📸{" "}
              <a
                href="https://instagram.com/samat_berikbol"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-color-1"
              >
                @samat_berikbol
              </a>
            </p>
          </div>
        </div>

        {/* Tolegen */}
        <div className="bg-n-8 border border-n-6 p-4 rounded-2xl w-full sm:w-1/2">
          <img
            // src={tolegenImg}
            alt="Tolegen Yerzhan"
            className="w-20 h-20 mx-auto mb-3 rounded-full object-cover"
          />
          <h3 className="text-base font-semibold text-n-1">Толеген Ержан</h3>
          <p className="text-sm text-n-3 mb-2">Исполнительный директор</p>
          <div className="text-xs text-n-3 space-y-1">
            <p>
              📞{" "}
              <a
                href="tel:+77779876543"
                className="hover:underline text-color-1"
              >
                +7 (777) 987-6543
              </a>
            </p>
            <p>
              📧{" "}
              <a
                href="mailto:tolegen@example.com"
                className="hover:underline text-color-1"
              >
                tolegen@example.com
              </a>
            </p>
            <p>
              📸{" "}
              <a
                href="https://instagram.com/tolegen_yerzhan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-color-1"
              >
                @tolegen_yerzhan
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
