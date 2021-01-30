const style = `

`;
const template = `
  <style>${style}</style>
    <span id="icon"></span>
`;

const ICON_SIZE = {
  SMALL: "10px",
  MEDIUM: "18px",
  LARGE: "28px",
  XLARGE: "50px",
};

class Icon extends HTMLElement {
  static get observedAttributes() {
    return ["icon", "size"];
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    const componentTemplate = document.createElement("template");
    componentTemplate.innerHTML = template;
    this.shadowRoot.appendChild(componentTemplate.content.cloneNode(true));
    this.size = ICON_SIZE.MEDIUM;
  }

  updateSize(newSize) {
    switch (newSize) {
      case "small":
        this.size = ICON_SIZE.SMALL;
        break;
      case "medium":
        this.size = ICON_SIZE.MEDIUM;
        break;
      case "large":
        this.size = ICON_SIZE.LARGE;
        break;
      case "xlarge":
        this.size = ICON_SIZE.XLARGE;
        break;
      default:
        this.size = ICON_SIZE.MEDIUM;
        break;
    }
    const currentIcon = this.shadowRoot.querySelector("#icon > svg");
    if (currentIcon) {
      currentIcon.setAttribute("width", ICON_SIZE.SMALL);
      currentIcon.setAttribute("height", ICON_SIZE.SMALL);
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "icon") {
      switch (newValue) {
        case "open_in_new":
          this.shadowRoot.querySelector("#icon").innerHTML =
            ICONS_LIST.OPEN_IN_NEW;
          break;
        case "help":
          this.shadowRoot.querySelector("#icon").innerHTML = ICONS_LIST.HELP;
          break;
        case "arrow_upward":
          this.shadowRoot.querySelector("#icon").innerHTML =
            ICONS_LIST.ARROW_UPWARD;
          break;
        case "picture_as_pdf":
          this.shadowRoot.querySelector("#icon").innerHTML =
            ICONS_LIST.PICTURE_AS_PDF;
          break;
        case "pdf_icon":
          this.shadowRoot.querySelector("#icon").innerHTML =
            ICONS_LIST.PDF_ICON;
          break;

        default:
          this.shadowRoot.querySelector("#icon").innerHTML = ICONS_LIST.HELP;
          break;
      }
      this.shadowRoot
        .querySelector("#icon > svg")
        .setAttribute("width", this.size);
      this.shadowRoot
        .querySelector("#icon > svg")
        .setAttribute("height", this.size);
    }
    if (name === "size") {
      this.updateSize(newValue);
    }
  }
}

customElements.define("nc-icon", Icon);

const ICONS_LIST = {
  OPEN_IN_NEW: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>`,
  HELP: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>`,
  ARROW_UPWARD: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>`,
  PICTURE_AS_PDF: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"/></svg>`,
  PDF_ICON: `<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="75.320129mm"
   height="92.604164mm"
   viewBox="0 0 75.320129 92.604164"
   version="1.1"
   id="svg8"
   inkscape:version="0.92.3 (2405546, 2018-03-11)"
   sodipodi:docname="PDF file icon.svg">
  <title
     id="title2682">PDF file icon</title>
  <defs
     id="defs2">
    <clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath839">
      <rect
         style="opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:fill markers stroke"
         id="rect841"
         width="68.688263"
         height="67.886459"
         x="-74.033661"
         y="141.44913" />
    </clipPath>
  </defs>
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="0.98994949"
     inkscape:cx="122.12727"
     inkscape:cy="167.02823"
     inkscape:document-units="mm"
     inkscape:current-layer="g899"
     showgrid="false"
     inkscape:object-nodes="false"
     inkscape:window-width="1366"
     inkscape:window-height="705"
     inkscape:window-x="-8"
     inkscape:window-y="-8"
     inkscape:window-maximized="1"
     inkscape:snap-page="false"
     inkscape:snap-others="false"
     fit-margin-top="0"
     fit-margin-left="0"
     fit-margin-right="0"
     fit-margin-bottom="0" />
  <metadata
     id="metadata5">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title>PDF file icon</dc:title>
        <dc:date>08/10/2018</dc:date>
        <dc:creator>
          <cc:Agent>
            <dc:title>Adobe Systems</dc:title>
          </cc:Agent>
        </dc:creator>
        <dc:publisher>
          <cc:Agent>
            <dc:title>CMetalCore</dc:title>
          </cc:Agent>
        </dc:publisher>
        <dc:description>Fuente del texto &quot;PDF&quot;:
Franklin Gothic Medium Cond</dc:description>
        <cc:license
           rdf:resource="http://creativecommons.org/licenses/by-sa/4.0/" />
      </cc:Work>
      <cc:License
         rdf:about="http://creativecommons.org/licenses/by-sa/4.0/">
        <cc:permits
           rdf:resource="http://creativecommons.org/ns#Reproduction" />
        <cc:permits
           rdf:resource="http://creativecommons.org/ns#Distribution" />
        <cc:requires
           rdf:resource="http://creativecommons.org/ns#Notice" />
        <cc:requires
           rdf:resource="http://creativecommons.org/ns#Attribution" />
        <cc:permits
           rdf:resource="http://creativecommons.org/ns#DerivativeWorks" />
        <cc:requires
           rdf:resource="http://creativecommons.org/ns#ShareAlike" />
      </cc:License>
    </rdf:RDF>
  </metadata>
  <g
     inkscape:label="Capa 1"
     inkscape:groupmode="layer"
     id="layer1"
     transform="translate(36.076172,-93.731774)">
    <g
       id="g899"
       transform="matrix(1.4843054,0,0,1.4843054,17.471885,-90.243502)">
      <g
         id="g876">
        <path
           inkscape:connector-curvature="0"
           style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:#ff2116;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:2.11666656;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers fill stroke;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
           d="m -29.632812,123.94727 c -3.551967,0 -6.44336,2.89347 -6.44336,6.44531 v 49.49804 c 0,3.55185 2.891393,6.44532 6.44336,6.44532 H 8.2167969 c 3.5519661,0 6.4433591,-2.89335 6.4433591,-6.44532 v -40.70117 c 0,0 0.101353,-1.19181 -0.416015,-2.35156 -0.484969,-1.08711 -1.275391,-1.84375 -1.275391,-1.84375 a 1.0584391,1.0584391 0 0 0 -0.0059,-0.008 L 3.5722246,125.7752 a 1.0584391,1.0584391 0 0 0 -0.015625,-0.0156 c 0,0 -0.8017392,-0.76344 -1.9902344,-1.27344 -1.39939552,-0.6005 -2.8417968,-0.53711 -2.8417968,-0.53711 l 0.021484,-0.002 z"
           id="path890" />
        <path
           inkscape:connector-curvature="0"
           style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:#f5f5f5;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:2.11666656;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:markers fill stroke;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
           d="m -29.632812,126.06445 h 28.3789058 a 1.0584391,1.0584391 0 0 0 0.021484,0 c 0,0 1.13480448,0.011 1.96484378,0.36719 0.79889772,0.34282 1.36536982,0.86176 1.36914062,0.86524 1.25e-5,1e-5 0.00391,0.004 0.00391,0.004 l 9.3671868,9.18945 c 0,0 0.564354,0.59582 0.837891,1.20899 0.220779,0.49491 0.234375,1.40039 0.234375,1.40039 a 1.0584391,1.0584391 0 0 0 -0.002,0.0449 v 40.74609 c 0,2.41592 -1.910258,4.32813 -4.3261717,4.32813 H -29.632812 c -2.415914,0 -4.326172,-1.91209 -4.326172,-4.32813 v -49.49804 c 0,-2.41603 1.910258,-4.32813 4.326172,-4.32813 z"
           id="rect2684" />
        <path
           sodipodi:nodetypes="scccscccscccccssscacccsccccccccccccccccccccaccccccccc"
           inkscape:connector-curvature="0"
           d="m -23.40766,161.09299 c -1.45669,-1.45669 0.11934,-3.45839 4.39648,-5.58397 l 2.69124,-1.33743 1.04845,-2.29399 c 0.57665,-1.26169 1.43729,-3.32036 1.91254,-4.5748 l 0.8641,-2.28082 -0.59546,-1.68793 c -0.73217,-2.07547 -0.99326,-5.19438 -0.52872,-6.31588 0.62923,-1.51909 2.69029,-1.36323 3.50626,0.26515 0.63727,1.27176 0.57212,3.57488 -0.18329,6.47946 l -0.6193,2.38125 0.5455,0.92604 c 0.30003,0.50932 1.1764,1.71867 1.9475,2.68743 l 1.44924,1.80272 1.8033728,-0.23533 c 5.72900399,-0.74758 7.6912472,0.523 7.6912472,2.34476 0,2.29921 -4.4984914,2.48899 -8.2760865,-0.16423 -0.8499666,-0.59698 -1.4336605,-1.19001 -1.4336605,-1.19001 0,0 -2.3665326,0.48178 -3.531704,0.79583 -1.202707,0.32417 -1.80274,0.52719 -3.564509,1.12186 0,0 -0.61814,0.89767 -1.02094,1.55026 -1.49858,2.4279 -3.24833,4.43998 -4.49793,5.1723 -1.3991,0.81993 -2.86584,0.87582 -3.60433,0.13733 z m 2.28605,-0.81668 c 0.81883,-0.50607 2.47616,-2.46625 3.62341,-4.28553 l 0.46449,-0.73658 -2.11497,1.06339 c -3.26655,1.64239 -4.76093,3.19033 -3.98386,4.12664 0.43653,0.52598 0.95874,0.48237 2.01093,-0.16792 z m 21.21809,-5.95578 c 0.80089,-0.56097 0.68463,-1.69142 -0.22082,-2.1472 -0.70466,-0.35471 -1.2726074,-0.42759 -3.1031574,-0.40057 -1.1249,0.0767 -2.9337647,0.3034 -3.2403347,0.37237 0,0 0.993716,0.68678 1.434896,0.93922 0.58731,0.33544 2.0145161,0.95811 3.0565161,1.27706 1.02785,0.31461 1.6224,0.28144 2.0729,-0.0409 z m -8.53152,-3.54594 c -0.4847,-0.50952 -1.30889,-1.57296 -1.83152,-2.3632 -0.68353,-0.89643 -1.02629,-1.52887 -1.02629,-1.52887 0,0 -0.4996,1.60694 -0.90948,2.57394 l -1.27876,3.16076 -0.37075,0.71695 c 0,0 1.971043,-0.64627 2.97389,-0.90822 1.0621668,-0.27744 3.21787,-0.70134 3.21787,-0.70134 z m -2.74938,-11.02573 c 0.12363,-1.0375 0.1761,-2.07346 -0.15724,-2.59587 -0.9246,-1.01077 -2.04057,-0.16787 -1.85154,2.23517 0.0636,0.8084 0.26443,2.19033 0.53292,3.04209 l 0.48817,1.54863 0.34358,-1.16638 c 0.18897,-0.64151 0.47882,-2.02015 0.64411,-3.06364 z"
           style="fill:#ff2116;fill-opacity:1;stroke-width:0.26458335"
           id="path2697" />
        <g
           id="g858">
          <path
             inkscape:connector-curvature="0"
             id="path845"
             style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:125%;font-family:'Franklin Gothic Medium Cond';-inkscape-font-specification:'Franklin Gothic Medium Cond';letter-spacing:0px;word-spacing:4.26000023px;fill:#2c2c2c;fill-opacity:1;stroke:none;stroke-width:0.35824656px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
             d="m -20.930423,167.83862 h 2.364986 q 1.133514,0 1.840213,0.2169 0.706698,0.20991 1.189489,0.9446 0.482795,0.72769 0.482795,1.75625 0,0.94459 -0.391832,1.6233 -0.391833,0.67871 -1.056548,0.97958 -0.65772,0.30087 -2.02913,0.30087 h -0.818651 v 3.72941 h -1.581322 z m 1.581322,1.22447 v 3.33058 h 0.783664 q 1.049552,0 1.44838,-0.39184 0.405826,-0.39183 0.405826,-1.27345 0,-0.65772 -0.265887,-1.06355 -0.265884,-0.41282 -0.587747,-0.50378 -0.314866,-0.098 -1.000572,-0.098 z" />
          <path
             inkscape:connector-curvature="0"
             id="path847"
             style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:125%;font-family:'Franklin Gothic Medium Cond';-inkscape-font-specification:'Franklin Gothic Medium Cond';letter-spacing:0px;word-spacing:4.26000023px;fill:#2c2c2c;fill-opacity:1;stroke:none;stroke-width:0.35824656px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
             d="m -13.842461,167.83862 h 2.148082 q 1.560333,0 2.4909318,0.55276 0.9375993,0.55276 1.4133973,1.6443 0.482791,1.09153 0.482791,2.42096 0,1.3994 -0.4338151,2.49793 -0.4268149,1.09153 -1.3154348,1.76324 -0.8816233,0.67172 -2.5189212,0.67172 h -2.267031 z m 1.581326,1.26645 v 7.018 h 0.657715 q 1.378411,0 2.001144,-0.9516 0.6227329,-0.95858 0.6227329,-2.5539 0,-3.5125 -2.6238769,-3.5125 z" />
          <path
             inkscape:connector-curvature="0"
             id="path849"
             style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:125%;font-family:'Franklin Gothic Medium Cond';-inkscape-font-specification:'Franklin Gothic Medium Cond';letter-spacing:0px;word-spacing:4.26000023px;fill:#2c2c2c;fill-opacity:1;stroke:none;stroke-width:0.35824656px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
             d="m -5.7889096,167.83862 h 5.30372941 v 1.26645 H -4.2075842 v 2.85478 h 2.9807225 v 1.26646 h -2.9807225 v 4.16322 h -1.5813254 z" />
        </g>
      </g>
    </g>
  </g>
</svg>`,
};
