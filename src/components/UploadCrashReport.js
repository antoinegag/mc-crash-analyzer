import React from "react";

class UploadCrashReport extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      file: null
    };

    this.fileReader = new FileReader();

    this.handleFileChosen = this.handleFileChosen.bind(this);
    this.handleFileRead = this.handleFileRead.bind(this);
  }

  handleFileRead(e) {
    const { onData } = this.props;
    if (onData) {
      onData(e.currentTarget.result);
    }
  }

  handleFileChosen(file) {
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.onloadend = this.handleFileRead;
    fileReader.readAsText(file);
  }

  render() {
    return (
      <div>
        <h1>Upload crash report</h1>
        <br />
        <input
          type="file"
          id="crashlog-input"
          className="input-file"
          onChange={e => this.handleFileChosen(e.target.files[0])}
        />
      </div>
    );
  }
}

export default UploadCrashReport;
