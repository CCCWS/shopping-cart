import ResultBase from "./ResultBase";
import checkIcon from "../../icon/check_icon.png";

const Complete = () => {
  return <ResultBase comment="주문이 완료되었습니다." icon={checkIcon} />;
};

export default Complete;
