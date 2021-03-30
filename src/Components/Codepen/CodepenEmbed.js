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


-- INSERT INTO components (
  --   username,
  --   component_type,
  --   component_image,
  --   component_description,
  --   component_info
  -- )
  -- VALUES
  -- ('junior', 'Button', 'https://git-react-components.s3.amazonaws.com/4f8474a6-8787-42cf-96c5-29f859d9cc75-Gradient-text-border-background-button-with-animation.PNG', 'Gradient text border background Button With Animation', '{"html":"<link href=\"https://fonts.googleapis.com/css?family=Roboto:100\" rel=\"stylesheet\">\n<div class=\"ctn\">\n<a href=\"http://themonkey.co\" class=\"button b-green\">Green Button</a>\n<a href=\"http://themonkey.co\" class=\"button b-pink\">Pink Button</a>\n<a href=\"http://themonkey.co\" class=\"button b-red\">Red Button</a>\n<a href=\"http://themonkey.co\" class=\"button b-orange\">Orange Button</a>\n<a href=\"http://themonkey.co\" class=\"button b-blue\">Blue Button</a>\n<br/>\n<a href=\"http://themonkey.co\" class=\"button2 b-green rot-135\">Green button</a>\n<a href=\"http://themonkey.co\" class=\"button2 b-pink rot-135\">Pink button</a>\n<a href=\"http://themonkey.co\" class=\"button2 b-red rot-135\">Red button</a>\n<a href=\"http://themonkey.co\" class=\"button2 b-orange rot-135\">Orange button</a>\n<a href=\"http://themonkey.co\" class=\"button2 b-blue rot-135\">Blue button</a>\n</div>", "scss":"/* BY ESTEBAN MAUVAIS\n[--=INDEX=--]\n/BODY\n/GRADIENTS\n  /GREEN\n  /PINK\n  /RED\n  /ORANGE\n  /BLUE\n/BASE BUTTON\n/ROTATE\n[--=END INDEX=--]\n*/\n\n/*BODY*/\nbody {\n  font-family: ''Roboto'', sans-serif;\n}\nbody, .button:after {\n  background: #2c3e50;\n}\n.ctn {\n  display: block;\n  margin: auto;\n  text-align: center;\n}\nfooter {\n  position: fixed;\n  bottom: 5px;\n  right: 5px;\n  color: #FFF;\n}\nfooter a, footer a:after {\n  font-size: 1em !important;\n}\n/*END BODY*/\n\n/*GRADIENTS*/\n  /*GREEN*/\n  .b-green, .b-green:before {\n    background: rgba(73,155,234,1);\n    background: -moz-linear-gradient(45deg, rgba(73,155,234,1) 0%, rgba(26,188,156,1) 100%);\n    background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(73,155,234,1)), color-stop(100%, rgba(26,188,156,1)));\n    background: -webkit-linear-gradient(45deg, rgba(73,155,234,1) 0%, rgba(26,188,156,1) 100%);\n    background: -o-linear-gradient(45deg, rgba(73,155,234,1) 0%, rgba(26,188,156,1) 100%);\n    background: -ms-linear-gradient(45deg, rgba(73,155,234,1) 0%, rgba(26,188,156,1) 100%);\n    background: linear-gradient(45deg, rgba(73,155,234,1) 0%, rgba(26,188,156,1) 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=''#499bea'', endColorstr=''#1abc9c'', GradientType=1 );\n  }\n  /*PINK*/\n  .b-pink, .b-pink:before {\n    background: rgba(231,72,234,1);\n    background: -moz-linear-gradient(45deg, rgba(231,72,234,1) 0%, rgba(75,26,188,1) 100%);\n    background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(231,72,234,1)), color-stop(100%, rgba(75,26,188,1)));\n    background: -webkit-linear-gradient(45deg, rgba(231,72,234,1) 0%, rgba(75,26,188,1) 100%);\n    background: -o-linear-gradient(45deg, rgba(231,72,234,1) 0%, rgba(75,26,188,1) 100%);\n    background: -ms-linear-gradient(45deg, rgba(231,72,234,1) 0%, rgba(75,26,188,1) 100%);\n    background: linear-gradient(45deg, rgba(231,72,234,1) 0%, rgba(75,26,188,1) 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=''#e748ea'', endColorstr=''#4b1abc'', GradientType=1 );\n  }\n  /*RED*/\n  .b-red, .b-red:before {\n    background: rgba(234,110,72,1);\n    background: -moz-linear-gradient(45deg, rgba(234,110,72,1) 0%, rgba(188,26,99,1) 100%);\n    background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(234,110,72,1)), color-stop(100%, rgba(188,26,99,1)));\n    background: -webkit-linear-gradient(45deg, rgba(234,110,72,1) 0%, rgba(188,26,99,1) 100%);\n    background: -o-linear-gradient(45deg, rgba(234,110,72,1) 0%, rgba(188,26,99,1) 100%);\n    background: -ms-linear-gradient(45deg, rgba(234,110,72,1) 0%, rgba(188,26,99,1) 100%);\n    background: linear-gradient(45deg, rgba(234,110,72,1) 0%, rgba(188,26,99,1) 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=''#ea6e48'', endColorstr=''#bc1a63'', GradientType=1 );\n  }\n  /*ORANGE*/\n  .b-orange, .b-orange:before {\n    background: rgba(255,193,7,1);\n    background: -moz-linear-gradient(45deg, rgba(255,193,7,1) 0%, rgba(255,87,34,1) 100%);\n    background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(255,193,7,1)), color-stop(100%, rgba(255,87,34,1)));\n    background: -webkit-linear-gradient(45deg, rgba(255,193,7,1) 0%, rgba(255,87,34,1) 100%);\n    background: -o-linear-gradient(45deg, rgba(255,193,7,1) 0%, rgba(255,87,34,1) 100%);\n    background: -ms-linear-gradient(45deg, rgba(255,193,7,1) 0%, rgba(255,87,34,1) 100%);\n    background: linear-gradient(45deg, rgba(255,193,7,1) 0%, rgba(255,87,34,1) 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=''#ffc107'', endColorstr=''#ff5722'', GradientType=1 );\n  }\n  /*BLUE*/\n  .b-blue, .b-blue:before {\n    background: rgba(5,118,255,1);\n    background: -moz-linear-gradient(45deg, rgba(5,118,255,1) 0%, rgba(36,248,255,1) 100%);\n    background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(5,118,255,1)), color-stop(100%, rgba(36,248,255,1)));\n    background: -webkit-linear-gradient(45deg, rgba(5,118,255,1) 0%, rgba(36,248,255,1) 100%);\n    background: -o-linear-gradient(45deg, rgba(5,118,255,1) 0%, rgba(36,248,255,1) 100%);\n    background: -ms-linear-gradient(45deg, rgba(5,118,255,1) 0%, rgba(36,248,255,1) 100%);\n    background: linear-gradient(45deg, rgba(5,118,255,1) 0%, rgba(36,248,255,1) 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=''#0576ff'', endColorstr=''#24f8ff'', GradientType=1 );\n  }\n/*END GRADIENTS*/\n/*BASE BUTTON*/\n.button {\n  display: inline-block;\n  position: relative;\n  border-radius: 3px;\n  text-decoration: none;\n  padding: .5em;\n  margin: .5em;\n  font-size: 2em;\n  font-weight: bold;\n  transition: all .5s;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.button:hover {\n  text-shadow: 0px 0px 0px rgba(255, 255, 255, .75);\n}\n.button:hover:after {\n  left: 100%;\n  top: 100%;\n  bottom: 100%;\n  right: 100%;\n}\n.button:before {\n  content: '';\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  z-index: -1;\n  border-radius: 5px;\n  transition: all .5s;\n}\n.button:after {\n  content: '';\n  display: block;\n  position: absolute;\n  left: 2px;\n  top: 2px;\n  bottom: 2px;\n  right: 2px;\n  z-index: -1;\n  border-radius: 5px;\n  transition: all .5s;\n}\n.button2 {\n  display: inline-block;\n  font-size: 2em;\n  margin: .5em;\n  padding: .5em;\n  border-radius: 5px;\n  transition: all .5s;\n  filter: hue-rotate(0deg);\n  color: #FFF;\n  text-decoration: none;\n}\n/*END BASE BUTTON*/\n/*ROTATE*/\n.rot-360-noscoop:hover {\n  filter: hue-rotate(360deg);\n  transform: rotate(360deg);\n}\n.rot-135:hover {\n  filter: hue-rotate(135deg);\n}\n.rot-90:hover {\n  filter: hue-rotate(90deg);\n}\n/*END ROTATE*/", "js":""}');
  