// src/pages/Login.tsx

import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { Toast } from 'primereact/toast';

const Login: React.FC = () => {
    const toast = useRef<Toast | null>(null);
    const navigate = useNavigate();
    
    const handleLogin = (email: string, password: string) => {
        if (email && password) {
            localStorage.setItem('authenticated', 'true');
            navigate('/home');
        } else {
            let message = '';
            
            if (email == '')    message = 'O campo e-mail está vazio!';
            if (password == '') message = 'O campo senha está vazio!';
            
            toast.current?.show({
                severity:'error',
                summary: 'Error',
                detail: message,
                life: 3000
            });
        }
    };

    return (
        <div className="flex justify-content-center align-content-center flex-wrap loginContainer" style={{ minHeight: '700px' }}>
            <div className="flex align-items-center justify-content-center">
                <Toast ref={toast} />
                <LoginForm onLogin={handleLogin} />
            </div>
        </div>
    );
};

export default Login;
