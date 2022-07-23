import Logo from "../src/assets/LogoiPix.svg";
import Hero from "../src/assets/image1.svg";

export default function App() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          backgroundColor: "#121212",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "500px",
            backgroundColor: "#121212",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <header>
            <img src={Logo} style={{}} />
          </header>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <img src={Hero} style={{}} />
        </div>
        <div
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <span>Faça seu Pedido!</span>
        </div>
      </div>
    </div>
  );
}
