import atkinsonRegular from '../assets/fonts/atkinson-regular.woff';
import atkinsonBold from '../assets/fonts/atkinson-bold.woff';

const fontsCSS = `
@font-face {
  font-family: 'Atkinson';
  src: url('${atkinsonRegular}') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Atkinson';
  src: url('${atkinsonBold}') format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
`;

export default fontsCSS;
