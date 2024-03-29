import { motion } from "framer-motion";
import { PlanDiv } from "./styles";

export function Plan({
  planos,
  pag,
  setPag,
  onOpen,
  myPlan,
  setMyPlan,
  city,
  setCity,
}) {
  const Incluso = ({ plano }) => {
    console.log(plano);
    if (plano.apps === 1) {
      return (
        <span>
          Incluso: <qualifica>Qualifica</qualifica>
        </span>
      );
    } else
      return (
        <span>
          Incluso: <qualifica>Qualifica</qualifica> + <deezer>Deezer</deezer>
        </span>
      );
  };

  return (
    <PlanDiv>
      {planos
        .filter((plano) => plano.cidade === city)
        .map((plano, index) => (
          <motion.div
            exitBeforeEnter
            initial={{ scale: 0.9, top: 100, opacity: 0 }}
            animate={{
              scale: 1,
              top: 0,
              opacity: 1,
              transition: { duration: 0.3, delay: 0.1 + index / 15 },
            }}
            //exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className="plano"
            key={index + plano.cidade}
          >
            <div className="box1">
              <p>Nossanet {plano.tipo}</p>
              <h1>{plano.plano} Mega</h1>
              {/* {plano.tipo === "fibra" && (
                <span>+{plano.plano <= 30 ? "20" : "100"} mega bônus</span>
              )} */}
            </div>
            <div className="box2">
              {plano.qualifica && <Incluso plano={plano} />}
              <ul>
                <li>
                  {plano.tipo === "fibra"
                    ? "Fibra Óptica"
                    : "Internet via rádio"}
                </li>
                <li>Instalação Grátis</li>
                <li>Suporte Técnico 24h</li>
                <li>Wi-Fi Grátis</li>
                <li>Download: {plano.plano} Mbps</li>
                <li>Upload: {plano.plano} Mbps</li>
              </ul>
            </div>
            <div className="box3">
              <div className="preco">
                <span>R$</span>
                <span>{plano.valor}</span>
                <span>,90</span>
                <span>por mês</span>
              </div>
              <button
                onClick={() => {
                  setMyPlan(plano.plano);
                  setPag(4);
                  onOpen();
                }}
                type="button"
              >
                Quero esse
              </button>
            </div>
          </motion.div>
        ))}
    </PlanDiv>
  );
}
