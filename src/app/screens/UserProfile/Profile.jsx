
function Profile() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const user = JSON-parse(localStorage.getItem('user'));

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleLogout = () => {
        localStorage.removeItem("accesToken");
        localStorage.removeItem("user");
        window.location.href = "/";
    }

    return (
        <div>
            
        </div>
    ) 
}

export default Profile;