import React from 'react';

/*const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      <g id="B" transform="translate(11.000000, 5.000000)">
        <path
          d="M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z"
          fill="currentColor"
        />
      </g>
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
      />
    </g>
  </svg>
);*/

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      <g id="B" transform="translate(11.000000, 5.000000)">
        <defs>
          <image
            width="92"
            height="92"
            id="img1"
            href="data:image/png;base64,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"
          />
        </defs>
        <use href="#img1" x="-6" y="-1" />
      </g>
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
      />
    </g>
  </svg>
);

export default IconLoader;
