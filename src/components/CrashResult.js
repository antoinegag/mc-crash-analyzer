import React from "react";
import InfoBubble from "./InfoBubble";

function ErrorInfo({ data }) {
  return (
    <div>
      <h2>
        <i className="fas fa-bug pr-2" />
        Error information
      </h2>
      <p>{data.description}</p>

      <div className="pb-3">
        <h4>Error</h4>
        <code>{data.error}</code>
      </div>
      <div>
        <h4>Possible cause</h4>
        <p>{data.possibleCause}</p>
      </div>
      <div>
        <h4>Location</h4>
        <p>
          This is where the error happened, if you recognize a mod name, it is
          probably at fault.
        </p>
        <code>{data.stackHead}</code>
      </div>
    </div>
  );
}

function SystemDetails({ details }) {
  return (
    <div>
      <h2>
        <i className="fas fa-microchip pr-2" />
        System details
      </h2>
      <h4>Minecraft version</h4>
      <p>{details.minecraftVersion}</p>
      <h4>Java version</h4>
      <p>
        {details.javaVersion}
        <InfoBubble
          tooltip="Make sure to have a compatible Java version (typically Java 8)"
          className="pl-2"
        />
      </p>
      <h4>Operating system</h4>
      <p>{details.operatingSystem}</p>
      <h4>Memory</h4>
      <p>Used: {details.memory.used}</p>
      <p>Available: {details.memory.available}</p>
      <p>Max: {details.memory.max}</p>
    </div>
  );
}

function CrashResult(props) {
  const { data } = props;

  return (
    <div className="pt-5">
      <h1>Crash report</h1>
      <p className="lead">{data.time}</p>
      <span className="text-muted">{data.randomMessage}</span>
      <hr className="my-3" />
      <ErrorInfo data={data} />
      <hr className="my-3" />
      <SystemDetails details={data.systemDetails} />
      <hr className="my-3" />
      <h2>Full stack trace</h2>
      <p className="lead">Data for developers</p>
      <pre>
        <code>{data.fullStackTrace}</code>
      </pre>
    </div>
  );
}

export default CrashResult;
