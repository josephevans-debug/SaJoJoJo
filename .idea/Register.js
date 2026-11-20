import React from 'react';

function RegisterPage() {
    return (
        <div className="RegisterPage">
            <form>
                <label>
                    Username:
                    <input type="text" name="username" />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <input type="submit" value="Register" />
            </form>
        </div>
    );
}

export default RegisterPage;