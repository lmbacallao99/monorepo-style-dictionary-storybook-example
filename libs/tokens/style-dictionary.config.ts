import * as StyleDictionary from 'style-dictionary';

const config: StyleDictionary.Config = {
  source: ['src/tokens/**/*.json'],
  format: {
    LitCSS: ({ dictionary, file, options }): string => {
      const { fileHeader, formattedVariables } = StyleDictionary.formatHelpers;
      const formatProperty =
        StyleDictionary.formatHelpers.createPropertyFormatter({
          dictionary,
          outputReferences: false,
          formatting: {
            indentation: '\t\t',
            prefix: '--abp-',
            separator: ':',
            suffix: ';',
          },
        });
      const { outputReferences } = options;
      return (
        fileHeader({ file }) +
        "import { css } from 'lit'\n" +
        'export const tokens = css`\n' +
        ':host {\n' +
        dictionary.allTokens.map(formatProperty).join('\n') +
        '\n}\n`;'
      );
    },
  },
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'css/',
      files: [
        {
          destination: 'var.css',
          format: 'css/variables',
        },
      ],
    },
    js: {
      transformGroup: 'js',
      buildPath: 'js/',
      files: [
        {
          destination: 'index.ts',
          format: 'LitCSS',
        },
      ],
    },
  },
};

export default config;
