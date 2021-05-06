import { Section7Container, Section7Content } from "./styles";
import playStoreImg from "../../../assets/playStore.png";
import previewAndroidImg from "../../../assets/previewAndroid.png";

export default function Section7() {
  return (
    <Section7Container>
      <Section7Content>
        <div className="box1">
          <h1>Já conhece o aplicativo Nossa Net?</h1>
          <p>Acompanhe o consumo de seus serviços</p>
          <p>Obtenha segunda via de sua fatura</p>
          <p>Acompanhe seus suportes ou inicie um novo</p>
          <a target="blank" href="https://play.google.com/store/apps/details?id=br.com.topsapp.topcliente.nossanet">
            <span>Faça agora o download!</span>
            <img src={playStoreImg} alt="Download NossaNet Android" />
          </a>
        </div>
        <div className="box2">
          <img src={previewAndroidImg} alt="Preview NossaNet Android" />
        </div>
      </Section7Content>
    </Section7Container>
  );
}
