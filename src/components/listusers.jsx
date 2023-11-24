import { readCookie } from "../utils/utilities";

function Listusers(props) {
    async function getListOfusers(setUserList,userList) {
        try {
            const jwt_token = await readCookie("jwt_token");
            const response = await fetch(
                "http://localhost:5001/listAllUsers",
                {
                    method: "GET",
                    headers: {
                        "Content-Type" : "application/json",
                        "Authorization" : `Bearer ${jwt_token}`
                    }
                }
            );
            const data = await response.json();
            console.log(data.users);
            setUserList(data.users);
        } catch (error) {
            console.log(error)
        }
    }


    function handleClick(event) {
        getListOfusers(props.setUserList, props.userList)
    }

    function handleOffClick(event) {
        props.setUserList([]);
            }

    return (
        <div>
            <hr></hr>
                <h2>List All Users on the Database</h2>
                <button onClick={handleClick}>Press to List Users</button>
                <button onClick={handleOffClick}>Press to close List</button>
                <p>The user list is as follows:</p>
                <br></br>
                {props.userList && props.userList.map((item,index) => {return(
                    <div>
                        <h3>{item.email}</h3>
                    </div>
                ) })}
            <hr></hr>
        </div>
        )
}

export default Listusers;