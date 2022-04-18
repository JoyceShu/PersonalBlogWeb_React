import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";

export default function Settings() {
  return (
    <div className="settings">
    <div className="settingsWrapper">
      <div className="settingsTitle">
        <span className="settingsTitleUpdate">Update Your Account</span>
        <span className="settingsTitleDelete">Delete Your Account</span>
      </div>
      <form className="settingsForm">
        <label>Profile Picture</label>
        <div className="settingsPP">
          <img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/278660811_115736457765235_8622607382048431541_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=3Ik5pUhkW_4AX8G0Oxm&_nc_ht=scontent-sjc3-1.xx&oh=00_AT-wlCuYqQF3SXuEdt_KkbopuFq1VHcwrLGP6GIXxjgexA&oe=6261661A" alt="" />
          <label htmlFor="fileInput">
          <i className="settingsPPIcon far fa-user-circle"></i>
          </label>
          <input type="file" id="fileInput" style={{display: "none"}} />
        </div>
        <label>Username</label>
        <input type="text" placeholder="JoyceShu"/>
        <label>Email</label>
        <input type="email" placeholder="jinr.shu@gmail.com"/>
        <label>Password</label>
        <input type="password" />
        <button className="settingsSubmit" type="submit">Update</button>
      </form>
      </div>
    <Sidebar />
    </div>
  );
}
