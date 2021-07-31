import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as AccountActions from "redux/actions/AccountActions";
import * as NavigationActions from "redux/actions/NavigationActions";
import { Strings } from "resources";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ClientItem from "components/Clients/ClientItem";
import Button from "components/UI/Button";
import { generateFakeData } from "utils";
import AddClient from "modals/Client/AddClient";
import EditClient from "modals/Client/EditClient";
import "./Clients.scss";

export default function Clients(props) {
  const dispatch = useDispatch();
  const navigationData = useSelector((state) => state.navigationData);
  const [clients, setClients] = useState(generateFakeData(10));
  
  const onAddNewClient = () => {
    dispatch(NavigationActions.setCreateNewClientModalStatus(true));
  }

  const onClickClient = async (item) => {
    await dispatch(AccountActions.setSelectedUserDetails(item)).then((response) => {
      dispatch(NavigationActions.setEditClientModalStatus(true));
    });
  }

  const renderClientItem = (clientItem, index) => {
    return <ClientItem key={`client-${index}`} item={clientItem} index={index} 
    onClientClicked={(selectedItem) => onClickClient(selectedItem)} />
  }

  return (
    <Fragment>
      <div className="pageContent">

        <div className="pageTitle">
          <h1>{Strings.contactsTitle}</h1>
          <Button icon={faPlus} title={Strings.createNew} onBtnClicked={() => onAddNewClient()} />
        </div>

          {clients?.length > 0 && <ul className="clientList">
            {clients.map((field, index) => renderClientItem(field, index))}
          </ul>}
          {clients?.length === 0 && <h3>No Clients found</h3>}

      </div>
      {navigationData.showCreateNewClientModal ? <AddClient /> : null}
      {navigationData.showEditClientModal ? <EditClient /> : null}
    </Fragment>
  );
}
