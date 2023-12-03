interface Color {
  HoneydewContrast: string;
  BlackMain: string;
  WhiteMain: string;
  GrayMain: string;
  BlackBackground: string;
}

export const COLORS: Color = {
  HoneydewContrast: '#E4FFE6',
  BlackMain: '#1F1E2E',
  WhiteMain: '#FFFFFF',
  GrayMain: '#494646',
  BlackBackground: '#383745',
};

interface FontFamily {
  is_tok_web_bold: string;
  is_tok_web_regular: string;
}

export const FONT_FAMILY: FontFamily = {
  is_tok_web_bold: 'istokWeb-Bold.ttf',
  is_tok_web_regular: 'IstokWeb-Regular',
};
