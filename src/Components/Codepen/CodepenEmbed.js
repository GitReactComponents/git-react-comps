import { PrefillEmbed, PrefillLang, useCodePenEmbed, stripIndent } from 'react-codepen-prefill-embed';

const CodepenEmbed = (props) => {
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
            ${props.html}
          `}
      </PrefillLang>
      <PrefillLang lang="scss">
        {stripIndent`
          ${props.scss}
        `}
      </PrefillLang>
      <PrefillLang lang="babel">
        {stripIndent`
          ${props.js}
        `}
      </PrefillLang>
    </PrefillEmbed>
  );
};

export default CodepenEmbed