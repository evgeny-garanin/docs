/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';

function NotFound() {
  return (
    <Layout
      title={translate({
        id: 'theme.NotFound.title',
        message: 'Page Not Found',
      })}>
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <h1 className="hero__title">
              <Translate
                id="theme.NotFound.title"
                description="The title of the 404 page">
                Page Not Found
              </Translate>
            </h1>
            <p>
              <Translate
                id="theme.NotFound.p1"
                description="The first paragraph of the 404 page">
                It looks like that url no longer exists. 
              </Translate>
            </p>
            <p>
              <Translate
                id="theme.NotFound.p2"
                description="The 2nd paragraph of the 404 page">
                Please consult the links below to get started with finding what you are looking for:  
              </Translate>
              <p>
              - <a href="https://nymtech.net/docs/stable/overview/"> Nym Platform Overview </a>
              <br></br> 
              - <a href="https://nymtech.net/docs/stable/run-nym-nodes/pre-built-binaries"> Run a Nym Node </a>
              <br></br>
              - <a href="https://nymtech.net/docs/stable/develop-with-nym/overview"> Develop with Nym </a>
              <br></br>
              </p>
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default NotFound;
