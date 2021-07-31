import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Avatar from "boring-avatars";
import "./ClientItem.scss";

export default function ClientItem(props) {
  const clientIndex = props.index;
  const clientItem = props.item;

  return (<li className="clientItem" key={`client-${clientIndex}`}>
                <div className="clientImage">
                  <div className="photo">
                    <Avatar
                      size={32}
                      name={clientItem.name}
                      variant="marble"
                      square
                    />
                  </div>
                  <span className="clientName">{clientItem.name}</span>
                </div>
                <span className="clientEmail">{clientItem.email}</span>
                <div className="clientInfo">
                  <span className={`${clientItem.isNew ? 'new': ''}`}>{clientItem.type}</span>
                </div>
                <div className="clientAction">
                  <span className="hoverAction" onClick={() => props.onClientClicked(clientItem)}><FontAwesomeIcon icon={faEdit} className="editAction"/></span>
                </div>
            </li>);
}
