import { PrefillEmbed, PrefillLang, useCodePenEmbed, stripIndent } from 'react-codepen-prefill-embed';
const jsonData = require('../../../server/components.json')

const CodepenEmbed = () => {
  useCodePenEmbed();
  return (
    <PrefillEmbed
      className="codepen"
      penTitle="Demo pen"
      embedHeight="400"
      themeId="37806"
      editable
      description="Renders a barebones React component"
      tags={['react', 'react-docs-demo']}
      htmlClasses={['loading', 'no-js']}
      head={
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      }
      scripts={[
        'https://unpkg.com/react@16.8.6/umd/react.development.js',
        'https://unpkg.com/react-dom@16.8.6/umd/react-dom.development.js',
      ]}
      stylesheets={['https://unpkg.com/normalize.css@8.0.1/normalize.css']}
    >
      <PrefillLang lang="html">
        {stripIndent`
          ${jsonData[0].html}
          `}
      </PrefillLang>
      <PrefillLang lang="scss">
        {stripIndent`
            
        `}
      </PrefillLang>
      <PrefillLang lang="babel">
        {stripIndent`
          
        `}
      </PrefillLang>
    </PrefillEmbed>
  );
};

export default CodepenEmbed