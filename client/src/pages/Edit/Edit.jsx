import TopBar from "../../components/TopBar/TopBar";
import "./Edit.css";

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
                      <label htmlFor="">Username : </label>
                      <input type="text" className="editInput"/>
                      </div>
                      <div className="formElement">
                      <label htmlFor="">Name : </label>
                      <input type="text" className="editInput"/>
                      </div>
                      <div className="formElement">
                      <label htmlFor="">E-mail : </label>
                      <input type="text" className="editInput"/>
                      </div>
                      
                  
                  <div className="buttonsEdit">
                      <button className="updateButton">Update</button>
                      <button className="cancelButton">Cancel</button>
                  </div>
                  </div>
              </div>
      </div>
    </div>
  );
}

export default Edit;
