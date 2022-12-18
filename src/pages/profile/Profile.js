import './profile.css'


function Profile() {
  return (
    <div className="profile">
        <div className="profileWrapper">
            <h1 className="profileTitle">PROFILE</h1>
            <button className="profileUpdate">UPDATE PROFILE</button>
            <form className="profileForm">
                <div className="profileFormItems">
                    <label>Name</label>
                    <input type="text" className="profileFormInput" />
                </div>
                <div className="profileFormItems">
                    <label>Email</label>
                    <input type="text" className="profileFormInput" />
                </div>
                <div className="profileFormItems">
                    <label>Password</label>
                    <input type="text" className="profileFormInput" />
                </div>
                <div className="profileFormItems">
                    <label>Phone no.</label>
                    <input type="text" className="profileFormInput" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Profile