import React from "react";

function Home() {
    let [users, setUsers] = React.useState([])

    React.useEffect(() => {
        let isSubscribed = true

        fetch(`https://masai-api-mocker.herokuapp.com//user`)
        .then((res) => res.json())
        .then((res) => isSubscribed && setUsers(res))
        .catch((err) => console.log(err))

        return () => {
            isSubscribed = false
        }
    }, [])

    return(
        <div>
            <h1>Welcome to home page</h1>
        </div>
    )
}

export { Home }