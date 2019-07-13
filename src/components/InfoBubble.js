import React from "react";

import { uniqueId } from "lodash";
import { UncontrolledTooltip } from "reactstrap";

function InfoBubble({ tooltip, ...props }) {
  const id = uniqueId("infobubble-");
  return (
    <span {...props}>
      <i id={id} className="fas fa-question-circle" />
      <UncontrolledTooltip placement="top" target={id}>
        {tooltip}
      </UncontrolledTooltip>
    </span>
  );
}

export default InfoBubble;
