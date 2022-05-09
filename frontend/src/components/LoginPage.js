import React, {useState} from "react";

const LoginPage = () => {

    const [login, setLogin] = useState("");

    const formGet = (event) => {
        const data = new FormData();
        data.append("login", login);

        fetch("http://localhost:8000/api/login", {
            method: "POST",
            body: data,
        })
            .then((resp) => {
                if (resp.status === 200) {
                    console.log("ok")
                } else if (resp.status === 201) {
                    console.log("Логина нет")
                }
            })
            .catch((err) => {
                console.error(err);
            });
        event.preventDefault();
    };

    return (
        <>
            <div className="container1">
                <div className="header-page">
                    <h1>Login Page</h1>
                </div>
                <div className="container2">
                    <form action="/" className="form" onSubmit={formGet}>
                        <div className="form-group">
                            <label className="name">Username:</label>
                            <input
                                className="input-field"
                                id="name"
                                type="text"
                                name="name"
                                value={login}
                                onChange={(event) => {
                                    setLogin(event.target.value);
                                }}
                                placeholder="Your username"
                            />
                        </div>
                        <div className="form-group">
                            <label className="password">Password:</label>
                            <input
                                className="input-field"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Your password"
                            />
                        </div>
                        <div className="button">
                            <button className="btn #2b2b2b white-text" type="submit">
                                LOGIN
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LoginPage;