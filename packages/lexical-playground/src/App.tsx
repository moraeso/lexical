/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import './index.css';

import * as React from 'react';

import Editor from './Editor';

export default function App() {
  return (
    <div className="App">
      <h1>Rich Text Example</h1>
      <p>Note: this is an experimental build of Lexical</p>
      <Editor />
      <Editor />
      <Editor />
      <Editor />
      <Editor />
      <Editor />
      <Editor />
      <Editor />
      <Editor />
      <Editor />
      <Editor />
      <Editor />
      <Editor />
      <Editor />

      <div className="other">
        <h2>Other Examples</h2>
        <ul>
          <li>
            <a
              href="https://codesandbox.io/s/lexical-plain-text-example-g932e"
              target="_blank"
              rel="noreferrer">
              Plain text example
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
