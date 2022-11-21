
import { useState, useContext } from 'react';

import { AuthorizateContext } from '../../providers/AutorizateProvider';

function Login() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setToken } = useContext(AuthorizateContext);
    
    const getEmailWhenInputChange = function(event) {
        
        const {value} = event.target;

        setEmail(value);
    }
    
    const getPasswordWhenInputChange = function(event) {
        const {value} = event.target;

        setPassword(value);
    }
    
    const signIn = function(event) {    
        event.preventDefault();

        // Authentication Service
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">

                    <div className="card py-4">
                        <div className="card-body">
                            <h1 className="mb-4">Faça login</h1>
                            <form 
                                className="d-grid gap-2"
                                onSubmit={signIn}
                            >
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        type='email'
                                        placeholder="Digita seu e-mail"
                                        onChange={getEmailWhenInputChange}
                                        value={email}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        type='password'
                                        placeholder="Digita sua senha"
                                        onChange={getPasswordWhenInputChange}
                                    />
                                </div>
                                <div className="d-grid mt-3">
                                    <button
                                        className="btn btn-primary"
                                        type="submit"
                                        value={password}
                                    >
                                        Enviar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;