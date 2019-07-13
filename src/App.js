import React from "react";
import { Container } from "reactstrap";

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
    const parsed = parseCrashlog(data);

    this.setState({ data: parsed });
  }

  render() {
    const { data } = this.state;

    return (
      <>
        <NavBar onNew={() => this.setState({ data: null })} />
        <Container>
          {data ? (
            <CrashResult data={data} />
          ) : (
            <div className="text-center mt-5">
              <UploadCrashReport onData={this.handleCrashLogUpload} />
            </div>
          )}
        </Container>
      </>
    );
  }
}

export default App;
