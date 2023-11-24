function Logout(props) {
    function logoutfunc(setLoggedIn, setUserList, setEmail) {
        try {
            document.cookie = "jwt_token =; path=/; expires = Thu, 01 Jan 1970 00:00:01 GMT;";
            setLoggedIn(false);
            setUserList([]);
            setEmail("");
            console.log("logged out");
        } catch (error) {
           console.log(error); 
        }
    }
    function handleClick(event) {
    logoutfunc(props.setLoggedIn, props.setUserList, props.setEmail)
};
    return (
        <div>
            <hr></hr>
            <button onClick={handleClick}>LOGOUT</button>
            <hr></hr>
        </div>
    )
}
export default Logout;