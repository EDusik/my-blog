import React from "react";

import { ProgressBarStyled } from "./styled";

const ProgressBar = ({ barWidth }) => {
	return <ProgressBarStyled width={barWidth} />;
};

export default ProgressBar;
