import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as NavigationActions from "redux/actions/NavigationActions";
import * as AccountActions from "redux/actions/AccountActions";
import "./EditClient.scss";

export default function EditClient(props) {
    const dispatch = useDispatch();
    const navigationData = useSelector((state) => state.navigationData);
    const accountData = useSelector((state) => state.accountData);
    
    const onCloseEditClient = async () => {
        await dispatch(AccountActions.clearSelectedUserDetails()).then((response) => {
            dispatch(NavigationActions.setEditClientModalStatus(false));
          });
    }

  return (<div className={`modal fade ${!navigationData.showEditClientModal ? "close hide none" : "in show block"}`} id="addClientModal" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Edit details of {accountData?.selectedUser?.name}</h4>
                        <button type="button" className="close" onClick={() => onCloseEditClient()}>&times;</button>
                    </div>
                    <div className="modal-body">
                        <p>Edit Client form fields will go here</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={() => onCloseEditClient()}>Update Client</button>
                        <button type="button" className="btn btn-danger" onClick={() => onCloseEditClient()}>Close</button>
                    </div>
                </div>
            </div>
        </div>);
}
