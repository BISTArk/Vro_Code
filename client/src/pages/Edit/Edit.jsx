import TopBar from "../../components/TopBar/TopBar";
import "./Edit.css";
import {NavLink as Link} from "react-router-dom"

function Edit() {
  return (
    <div>
      <TopBar />

          <div className="editBody">
              <div className="editBox">
                  <div className="topContainerEdit">
                  <h1 className="editHeading">Edit profile</h1>
                      <hr className="edit-hr" />
                  </div>
                  <div className="formEdit">
                      <div className="formElement">
                      <label htmlFor="" className="labelEdit">Username : </label>
                      <input type="text" className="editInput" placeholder="Enter new username.."/>
                      </div>
                      <div className="formElement">
                      <label htmlFor=""  className="labelEdit">Name : </label>
                      <input type="text" className="editInput" placeholder="Change the name.."/>
                      </div>
                      <div className="formElement">
                      <label htmlFor=""  className="labelEdit">Role : </label>
                      <input type="text" className="editInput" placeholder="Enter new role.."/>
                      </div>
                      <div className="formElement">
                      <label htmlFor=""  className="labelEdit">E-mail : </label>
                      <input type="text" className="editInput" placeholder="Enter new email.."/>
                      </div>
                  
                  <div className="buttonsEdit">
                          <button className="updateButton">Update</button>
                          <Link to = "/profile"> 
                          <button className="cancelButton">Cancel</button>
                          </Link>
                  </div>
                
                  </div>
              </div>
      </div>
    </div>
  );
}

export default Edit;
