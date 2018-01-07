import React from "react";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import styled from "styled-components";

const Text = styled.div`
  text-align: center;
  color: blue;
`;

export default class extends React.Component {
  static async getInitialProps() {
    const res = await fetch("https://api.github.com/repos/zeit/next.js");
    const json = await res.json();
    return { stars: json.stargazers_count };
  }

  render() {
    return (
      <div>
        <Head>
          <title>My page title</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
        </Head>
        <Text>Hello World next as {this.props.stars} Starts</Text>
        <Text>
          <Link href="/about">
            <a>about page</a>
          </Link>
        </Text>
      </div>
    );
  }
}
