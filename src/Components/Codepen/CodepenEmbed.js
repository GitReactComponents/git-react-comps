import { PrefillEmbed, PrefillLang, useCodePenEmbed, stripIndent } from 'react-codepen-prefill-embed';
// const jsonData = require('../../../server/components.json')

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
        <div class="container">
        <a href="https://dribbble.com/shots/10683714-50-Buttons-For-Figma-Community" target="_blank">
          <div class="button">
            <span>Sun</span>
          </div>
          <div class="sun"></div>
        </a>
      </div>
          `}
      </PrefillLang>
      <PrefillLang lang="scss">
        {stripIndent`
            $body-bg: linear-gradient(180deg, #1c0138 0%, #2c0055 100%);
            $border: linear-gradient(180deg, #ffdc2a 0%, #fb2182 41.54%);
            @import url("https://fonts.googleapis.com/css2?family=Sacramento&display=swap");
            body {
              background: $body-bg;
              height: 100vh;
              .container,
              .button,
              .sun,
              .button span {
                position: absolute;
              }
              .container {
                margin: auto;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                width: 200px;
                height: 200px;
                a:hover {
                  .sun {
                    bottom: 176px;
                    transition: all 1s ease-in-out;
                    box-shadow: 0px 0px 10px #ffdc2a;
                  }
                  .button {
                    box-shadow: 0px 0px 36px #c80de0;
                    transition: all 1s ease-in-out;
                  }
                }
                .sun {
                  width: 64px;
                  height: 64px;
                  left: 55px;
                  bottom: 136px;
                  background: linear-gradient(180deg, #ffdc2a 0%, #fb2182 41.54%);
                  box-shadow: 0px 0px 36px #ffdc2a;
                  z-index: 2;
                  border-radius: 65px;
                  transition: all 1s ease-in-out;
                }
                .button {
                  width: 171px;
                  height: 65px;
                  background: #2c0055;
                  box-shadow: 0px 0px 16px #c80de0;
                  border-radius: 2px;
                  z-index: 3;
                  border: 2px solid;
                  transition: all 1s ease-in-out;
                  border-image: linear-gradient(#360154, #d442d5) 30;
                  span {
                    text-align: center;
                    font-family: "Sacramento", cursive;
                    left: 56px;
                    font-size: 35px;
                    line-height: 70px;
                    margin: 0 auto;
                    transition: all 0.3s ease-in-out;
                    background: -webkit-linear-gradient(#ffdc2a, #fb2182);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                  }
                }
              }
            }
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