import React from "react";
import { Container, UncontrolledAlert } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";

import UploadCrashReport from "./components/UploadCrashReport";
import { parseCrashlog } from "./util/parseCrashlog";
import NavBar from "./components/NavBar";
import CrashResult from "./components/CrashResult";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };

    this.handleCrashLogUpload = this.handleCrashLogUpload.bind(this);
  }

  handleCrashLogUpload(data) {
    let parsed;
    try {
      parsed = parseCrashlog(data);
    } catch (error) {
      toast.error("Something went wrong reading your crash report");
    }

    this.setState({ data: parsed });
  }

  render() {
    const { data } = this.state;

    return (
      <>
        <NavBar onNew={() => this.setState({ data: null })} />
        <UncontrolledAlert color="info">
          This is a beta version, please reports all issues{" "}
          <a
            className="alert-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/antoinegag/mc-crash-analyzer/issues"
          >
            here
          </a>
        </UncontrolledAlert>
        <Container>
          {data ? (
            <CrashResult data={data} />
          ) : (
            <div className="text-center mt-5">
              <UploadCrashReport onData={this.handleCrashLogUpload} />
            </div>
          )}
        </Container>
        <ToastContainer position={toast.POSITION.TOP_CENTER} />
      </>
    );
  }
}

export default App;
