import React, { Component } from "react";

class ImageUpload extends Component {
  constructor() {
    super();
    this.state = {
      file: null
    };
  }

  componentDidMount() {
    this.callServer(); //should print test12 in log
  }

  callServer = () => {
    fetch("/tester")
      .then(res => res.json())
      .then(data => console.log(data));
  };

  render() {
    return (
      <form>
        <input label="call server" type="text" />
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default ImageUpload;
