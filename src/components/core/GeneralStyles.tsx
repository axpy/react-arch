import { createGlobalStyle } from 'styled-components';
 
const GeneralStyles = createGlobalStyle`

html {
	box-sizing: border-box;
	height: 100%;
}

*,
*:before,
*:after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}

a, button {
  border: none;
  outline: none;
}

a, button, form, input, textarea {
  font-size: inherit;
}

html {
  font-size: 62.5% !important;
}

body {
  opacity: 0;
  font-family: NotoSans, sans-serif;
  font-size: 1.8rem;

  @include l {
    font-size: 1.6rem;
  }
}

`;
 
export default GeneralStyles;