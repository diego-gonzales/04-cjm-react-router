import { useParams } from "react-router-dom";

const Profile = () => {
  let { username } = useParams();

  return (
    <div>
      <h3>User Profile</h3>
      <p>
        Username <b>{username}</b>
      </p>
    </div>
  );
};

export default Profile;
