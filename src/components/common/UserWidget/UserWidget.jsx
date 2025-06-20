import { useUser } from '../../../context/UserContext';
import './UserWidget.css';
import { capitalize} from "../../../helpers/stringFunctions.js";

const UserWidget = () => {
    const { user, loading, error } = useUser();

    if (loading) return <div className="userWidget">Loading...</div>;
    if (error) return <div className="userWidget error">{error}</div>;
    if (!user) return null;

    return (
        <div className="userWidget">
            <div className="userInfo">
                {user.avatarUrl ? (
                    <img
                        src={user.avatarUrl}
                        alt={user.name}
                        className="userAvatar"
                    />
                ) : (
                    <div className="userAvatarPlaceholder">
                        {user.name.charAt(0)}
                    </div>
                )}
                <div className="userDetails">
                    <span className="userName">{user.name}</span>
                    <span className="userRole">{capitalize(user.role)}</span>
                </div>
            </div>
        </div>
    );
};

export default UserWidget;