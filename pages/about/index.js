import Router from "next/router";
import React from "react";
import MainLayout from "../components/MainLayout";

export default function About() {
  function linkCLickHandler(url) {
    Router.push(url);
  }

  return (
    <MainLayout title="About">
      <h1>About Page</h1>
      <button onClick={linkCLickHandler.bind(this, "/posts")}>
        Move to Posts
      </button>
      <button onClick={linkCLickHandler.bind(this, "/about/me")}>
        Move to About Me
      </button>
    </MainLayout>
  );
}
