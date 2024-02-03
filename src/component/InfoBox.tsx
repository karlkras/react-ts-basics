import { FC, ReactNode } from "react";
import { InfoBoxMode, WarningSeverity } from "../assets/utils/enums.ts";

type HintBoxProps = {
  mode: InfoBoxMode.Hint;
  children: ReactNode
}

type WarningBoxProps = {
  mode: InfoBoxMode.Warning;
  severity: WarningSeverity
  children: ReactNode
}

type InfoboxProps = HintBoxProps | WarningBoxProps;

const InfoBox: FC<InfoboxProps> = (props) => {
  const { children, mode} = props;

  if(mode === InfoBoxMode.Hint) {
    return (
      <aside className="infobox infobox-hint">
          <p>{children}</p>
      </aside>
    )
  }

  const {severity} = props;

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  )
}
export default InfoBox;