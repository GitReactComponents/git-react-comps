import React, { useContext, useEffect } from "react";
import {
  PrefillEmbed,
  PrefillLang,
  useCodePenEmbed,
  stripIndent,
} from "react-codepen-prefill-embed";
import { CompContext } from "../../Context/CompContext";

import "./Codepen.scss";

const CodepenEmbed = (props) => {
  useCodePenEmbed();

  const compContext = useContext(CompContext);
  const { html, scss, js } = compContext.componentToDisplay.component_info;
  return (
    <div className='cp-wrapper'>
      <PrefillEmbed
        className='codepen'
        penTitle='cp_Git-React <Comps> Demo'
        embedHeight='700'
        themeId='31205'
        editable='true'
        description='Renders a barebones React component'
        tags={["react", "react-docs-demo"]}
        htmlClasses={["loading", "no-js"]}
        head={
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        }
        scripts={[
          "https://unpkg.com/react@16.8.6/umd/react.development.js",
          "https://unpkg.com/react-dom@16.8.6/umd/react-dom.development.js",
        ]}
        stylesheets={["https://unpkg.com/normalize.css@8.0.1/normalize.css"]}
      >
        <PrefillLang lang='html'>
          {`
            ${html}
            `}
        </PrefillLang>
        <PrefillLang lang='scss'>
          {`
            ${scss}
            `}
        </PrefillLang>
        <PrefillLang lang='babel'>
          {`
            ${js}
            `}
        </PrefillLang>
      </PrefillEmbed>
    </div>
  );
};

export default CodepenEmbed;
