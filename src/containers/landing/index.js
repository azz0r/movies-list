import React, { Component } from "react";
import styled from "styled-components";

import { H1, H2, Paragraph, Wrapper } from "../../styles/";

class Landing extends Component {
  render() {
    return (
      <Wrapper>
        <header>
          <H1>Movie Listings</H1>
        </header>
        <section>
          <article>
            <H2>Movie Title</H2>
            <Paragraph>
              Movie description Movie description Movie description
            </Paragraph>
          </article>
        </section>
      </Wrapper>
    );
  }
}

export default Landing;
