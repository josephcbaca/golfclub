import React, { Component } from "react";
import mojs from "@mojs/core";

export default class App extends Component {
  componentDidMount() {
    const animation = new mojs.Shape({
      parent: "#test",
      shape: "circle",
      fill: { "#5cb85c": "#5cb85c" },
      radius: { 10: 20 },
      duration: 1500,
      isYoyo: true,
      isShowStart: true,
      easing: "elastic.inout",
      repeat: 999
    });
    animation.play();
  }
  render() {
    return <div id="test" />;
  }
}