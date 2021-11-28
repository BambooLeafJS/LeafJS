import AbstractView from "../../.leafjs/static/js/AbstractView.js";

export default class Featured extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Featured");
  }

  async getHTML() {
    return (
      <>
        <h1>NEW SONGS:</h1>
        <p>Phoenix</p>
        <p>Like This</p>
      </>
    );
  }
}
