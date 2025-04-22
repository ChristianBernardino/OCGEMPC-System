import { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import ocgempclogo from '../../assets/images/ocgempc-round-logo.png'
import axiosInstance from '../../api/axiosInstance.js';
import useWindowWidth from '../../utils/windowWidthHook.jsx';

function Login() {
    const windowWidthHook = useWindowWidth();
    const isTabMobile = windowWidthHook <= 768;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState({value: "" , isShow : false});
    const navigate = useNavigate();
    const location = useLocation();

    const login = async (event) => {
    //     event.preventDefault();
    //     try {
    //         const response = await axiosInstance.post('/auth/login', {
    //             email,
    //             password,
    //         });

    //         const { accessToken, refreshToken, roleName } = response.data;

    //         document.cookie = `role_name=${roleName}; Path=/;`;
    //         document.cookie = `accessToken=${accessToken}; Path=/;`;
    //         document.cookie = `refreshToken=${refreshToken}; Path=/; `;


    //         localStorage.setItem('loginSuccess', 'true');
            
    //     const redirectTo =
    //     location.state?.from || localStorage.getItem('originalUrl') || '/projects';

    //     // Clear the stored URL
    //     localStorage.removeItem('originalUrl');

    //     navigate(redirectTo);
    //   } catch (error) {
    //     console.error('Login error:', error);
    //     alert('Invalid login, please try again.');
    //   }
    navigate('/encode-loan')
    };


    return (
        <div className="login-container-wrapper">
        <div className=" custom-login">
                <img src={ocgempclogo} className='header-image'/>
                <div className="d-flex login-form-body">

                    <div className="form-header d-flex justify-content-center mb-2">
                            {/* LOGO HERE */}
                    </div>
              
                <div className="">
                    <div className="card p-4 pt-0 login-form-wrap" style={{ width: '450px' }}>
                        {error.value !== "" && error.isShow && (
                            <div className="alert alert-danger">
                                {error.value}
                                <div
                                    className="close-quick-alert"
                                    onClick={() => setError({ ...error, isShow: false })}
                                ></div>
                            </div>
                        )}
                        <form onSubmit={login}>

                            <div className="d-flex justify-content-center login-header mb-3">
                                <h3>ADMIN LOGIN</h3>
                            </div>

                            <div className="form-group mb-3 floating-label-group">
                                <input
                                    type="text"
                                    id="email"
                                    className={`form-control-lg w-100 floating-input ${email ? "filled" : ""}`}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <label htmlFor="email" className="login-label">Email</label>
                            </div>

                            <div className="form-group floating-label-group">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    className={`form-control-lg w-100 floating-input ${password ? "filled" : ""}`}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <label htmlFor="password" className="login-label">Password</label>
                            </div>

                            <div className='d-flex justify-content-center mt-1'>
                                <button type="submit" className="mt-2 custom-btn">LOGIN</button>
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
