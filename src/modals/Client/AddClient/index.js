import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as NavigationActions from "redux/actions/NavigationActions";
import "./AddClient.scss";

export default function AddClient(props) {
    const dispatch = useDispatch();
    const navigationData = useSelector((state) => state.navigationData);
    
    const onCloseNewClient = () => {
        dispatch(NavigationActions.setCreateNewClientModalStatus(false));
    }

  return (<div className={`modal fade ${!navigationData.showCreateNewClientModal ? "close hide none" : "in show block"}`} id="addClientModal" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Add New Client</h4>
                        <button type="button" className="close" onClick={() => onCloseNewClient()}>&times;</button>
                    </div>
                    <div className="modal-body">
                        <p>Add Client form fields will go here</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={() => onCloseNewClient()}>Add Client</button>
                        <button type="button" className="btn btn-danger" onClick={() => onCloseNewClient()}>Close</button>
                    </div>
                </div>
            </div>
        </div>);
}
