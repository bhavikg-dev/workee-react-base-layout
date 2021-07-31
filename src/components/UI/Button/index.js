import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Button.scss";

export default function Button(props) {
  const btnIcon = props.icon;
  const btnTitle = props.title;

  return (<span className="Btn" onClick={props.onBtnClicked}>
            {btnIcon && <FontAwesomeIcon icon={btnIcon} className="Icon"/>}
            {btnTitle}
        </span>);
}
