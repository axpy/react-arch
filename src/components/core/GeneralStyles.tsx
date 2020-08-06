import { createGlobalStyle } from 'styled-components';
 
const GeneralStyles = createGlobalStyle`

:root {
  --c-blue: #2772E3;
  --c-yellow: #FFC700;
  --c-white: #FFFFFF;

  --c-main: var(--c-blue);
  --c-accent: var(--c-yellow);

  --bdrs-main: .8rem;
  --line-height: 2rem;
  --font-size: 1.4rem;
  --box-shadow: 0 .4rem .8rem rgba(39, 114, 227, 0.5);
}

html {
	box-sizing: border-box;
	height: 100%;
}

.active {
  background-color: fuchsia;
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
  font-family: NotoSans, sans-serif;
  font-size: 1.8rem;

  @include l {
    font-size: 1.6rem;
  }
}

body, #root, .App {
  width: 100%;
  height: 100%;
}

`;
 
export default GeneralStyles;