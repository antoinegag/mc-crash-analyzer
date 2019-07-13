const headers = {
  CRASH_REPORT: "---- Minecraft Crash Report ----",
  SYSTEM_DETAILS: "-- System Details --"
};

// Constant index where some data is in the crashlog
const indexes = {
  RANDOM_MESSAGE: 1,
  TIME: 3,
  DESCRIPTION: 4,
  ERROR_STACK_TRACE: 6
};

const COMMENT_REGEX = /\/\/ (.*)/;

function findPossibleCause(error) {
  if (error.match("OutOfMemoryError")) {
    return "Ran out of RAM, allocate more memory to Minecraft";
  }

  return "Unknown";
}

// TODO: refactor this mess
export function parseCrashlog(crashlog) {
  const lines = crashlog.split("\n");

  if (lines.length < 1 || lines[0] !== headers.CRASH_REPORT) {
    throw new Error("Invalid crashlog");
  }

  let index = 0;
  const data = {};

  data.randomMessage = lines[indexes.RANDOM_MESSAGE].match(COMMENT_REGEX)[1];
  data.time = lines[indexes.TIME].match(/Time: (.*)/)[1];
  data.description = lines[indexes.DESCRIPTION].match(/Description: (.*)/)[1];

  // Parse error stack trace
  index = indexes.ERROR_STACK_TRACE;
  data.error = lines[index];
  data.possibleCause = findPossibleCause(data.error);
  index++;
  data.stackHead = lines[index];
  data.errorClassPath = data.stackHead.match(/at (.*?)\(/)[1];
  do {
    index++;
  } while (lines[index] !== "");

  data.fullStackTrace = lines
    .slice(indexes.ERROR_STACK_TRACE, index)
    .join("\n");

  // Move to system details
  while (lines[index] !== headers.SYSTEM_DETAILS) {
    index++;
  }
  index += 2; // Skip "Details"

  const systemDetails = {
    minecraftVersion: lines[index].match(/Minecraft Version: (.*)/)[1],
    operatingSystem: lines[index + 1].match(/Operating System: (.*)/)[1],
    javaVersion: lines[index + 2].match(/Java Version: (.*)/)[1]
  };
  index += 4;

  const memoryInfo = lines[index].match(/Memory: (.*?) \/ (.*?)up to (.*)/);
  systemDetails.memory = {
    used: memoryInfo[1],
    available: memoryInfo[2],
    max: memoryInfo[3]
  };

  data.systemDetails = systemDetails;
  return data;
}
