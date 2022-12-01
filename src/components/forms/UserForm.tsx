import React, { useRef, useState } from "react";
import User from "../../models/User";
import { v4 as uuid } from "uuid";
import SimpleReactValidator from "simple-react-validator";
import "../../App.css";
import UserDataService from "../../services/UserDataService";
import { useNavigate, useNavigation } from "react-router-dom";

const UserForm: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isManager, setIsManager] = useState(false);
  const [role, setRole] = useState("");
  const [notes, setNotes] = useState("");
  const [forceUpdate, setForceUpdate] = useState(false);

  const navigate = useNavigate();

  const fileRef = useRef<HTMLInputElement>(null);

  const validator = useRef(
    new SimpleReactValidator({
      className: "error",
    })
  );

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (validator.current.allValid()) {
      // logica di salvataggio dati
      const data: User = {
        id: uuid(),
        userName,
        fullName: "",
        password,
        salary: 0,
        isManager,
      };

      const svc = new UserDataService("http://localhost:3001/users");

      const result = await svc.addNewUser(data);

      navigate('/usersapi');

      // A
      const fileAPI = fileRef.current?.files!;
      let selectedFile = fileAPI[0].name;

      // B
      if (fileRef.current?.files) selectedFile = fileRef.current.files[0].name;

      alert(JSON.stringify({ ...data, role, notes, selectedFile }));
    } else {
      validator.current.showMessages();
      setForceUpdate(!forceUpdate);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">&nbsp;</div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row form-group">
          <div className="col-3">
            <label htmlFor="userName">User Name</label>
          </div>
          <div className="col-7">
            <input
              className="form-control"
              type="text"
              name="userName"
              value={userName}
              onChange={(evt) => setUserName(evt.target.value)}
            />
          </div>
          <div className="col-2">
            {validator.current.message("userName", userName, "required|alpha")}
          </div>
        </div>
        <div className="row form-group">
          <div className="col-3">
            <label htmlFor="password">Password</label>
          </div>
          <div className="col-7">
            <input
              className="form-control"
              type="password"
              name="password"
              value={password}
              onChange={(evt) => setPassword(evt.target.value)}
            />
          </div>
          <div className="col-2">
            {validator.current.message("password", password, "required")}
          </div>
        </div>
        <div className="row form-group">
          <div className="col-3">
            <label htmlFor="isManager">Manager</label>
          </div>
          <div className="col-7">
            <input
              className="form-check-control"
              type="checkbox"
              name="isManager"
              checked={isManager}
              onChange={(evt) => setIsManager(evt.target.checked)}
            />
          </div>
          <div className="col-2">&nbsp;</div>
        </div>
        <div className="row form-group">
          <div className="col-3">
            <label htmlFor="role">Role</label>
          </div>
          <div className="col-7">
            <select
              className="form-control"
              value={role}
              onChange={(evt) => setRole(evt.target.value)}
            >
              <option value="">-- Select a role--</option>
              <option value="MGR">Manager</option>
              <option value="SPV">Supervisor</option>
              <option value="CDM">Carne da Macello</option>
            </select>
          </div>
          <div className="col-2">&nbsp;</div>
        </div>
        <div className="row form-group">
          <div className="col-3">
            <label htmlFor="notes">Notes</label>
          </div>
          <div className="col-7">
            <textarea
              value={notes}
              onChange={(evt) => setNotes(evt.target.value)}
            ></textarea>
          </div>
          <div className="col-2">&nbsp;</div>
        </div>
        <div className="row form-group">
          <div className="col-3">
            <label htmlFor="cv">CV</label>
          </div>
          <div className="col-7">
            <input type="file" ref={fileRef} />
          </div>
          <div className="col-2">&nbsp;</div>
        </div>
        <div className="row">
          <div className="col-12">&nbsp;</div>
        </div>
        <div className="row form-group">
          <div className="col-12">
            <input
              className="btn btn-primary"
              type="submit"
              value="Save"
              // disabled={!validator.current.allValid()}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
