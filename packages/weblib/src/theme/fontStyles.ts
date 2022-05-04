import { createGlobalStyle } from "styled-components"
import LatoRegular from "../assets/fonts/lato/Lato-Regular.ttf"
import AntonRegular from "../assets/fonts/anton/Anton-Regular.ttf"
import PoppinsRegular from "../assets/fonts/poppins/Poppins-Regular.ttf"
import PoppinsBold from "../assets/fonts/poppins/Poppins-Bold.ttf"
import PoppinsExtraBold from "../assets/fonts/poppins/Poppins-ExtraBold.ttf"

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: "Lato";
    font-weight: 400;
    src: url(${LatoRegular}) format("truetype");
  }

  @font-face {
    font-family: "Anton";
    font-weight: 400;
    src: url(${AntonRegular}) format("truetype");
  }

  @font-face {
    font-family: "Poppins";
    font-weight: 400;
    src: url(${PoppinsRegular}) format("truetype");
  }

  @font-face {
    font-family: "Poppins";
    font-weight: 700;
    src: url(${PoppinsBold}) format("truetype");
  }

  @font-face {
    font-family: "Poppins";
    font-weight: 900;
    src: url(${PoppinsExtraBold}) format("truetype");
  }
`

export default FontStyles
