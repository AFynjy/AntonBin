    import React, {useState} from "react";

const RegisterPage = () => {

    const [email, setEmail] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const formSend = (event) => {
        const data = new FormData();
        data.append("password", password);
        data.append("login", login);
        data.append("email", email);

        fetch("http://localhost:8000/api/register", {
            method: "POST",
            body: data,
        })
            .then((resp) => {
                if (resp.status === 200) {
                    console.log("Ok");
                } else {
                    alert("Ошибка");
                }
            })
            .catch((err) => {
                document.location.reload();
                console.error(err);
            });
        event.preventDefault();
    };

    return (
        <>
            <div className="container1">
                <div className="header-page">
                    <h1>Sign Up Page</h1>
                </div>
                <div className="container2">
                    <form action="/" className="form" onSubmit={formSend}>
                        <div className="form-group">
                            <label className="name">Username:</label>
                            <input
                                className="input-field"
                                id="login"
                                type="text"
                                name="login"
                                value={login}
                                onChange={(event) => {
                                    setLogin(event.target.value);
                                }}
                                placeholder="Your username"
                            />
                        </div>
                        <div className="form-group">
                            <label className="email">Email:</label>
                            <input
                                className="input-field"
                                id="email"
                                type="text"
                                name="email"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                                placeholder="Your email"
                            />
                        </div>
                        <div className="form-group">
                            <label className="password">Password:</label>
                            <input
                                className="input-field"
                                id="password"
                                type="password"
                                name="password"
                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                                placeholder="Your password"
                            />
                        </div>
                        <div className="button">
                            <button className="btn #2b2b2b white-text" type="submit">
                                Create My Account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default RegisterPage;
