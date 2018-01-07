import React from "react";
import Head from "next/head";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

export default class extends React.Component {
  static async getInitialProps({ req }) {
    const user = req ? "server" : "client";
    const res = await fetch("https://api.github.com/repos/zeit/next.js");
    const json = await res.json();

    return { stars: json.stargazers_count, user };
  }

  render() {
    return (
      <div>
        <Head>
          <title>My about page title</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
        </Head>
        <p>
          This page is rendered from <b>{this.props.user}</b>
        </p>
        <p>
          <Link href="/">
            <a>home</a>
          </Link>
        </p>
      </div>
    );
  }
}
