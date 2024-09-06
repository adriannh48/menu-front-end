import React, { useState } from 'react';

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Password } from 'primereact/password';

import { LoginFormProps } from '../interfaces/LoginFormProps';

import logoImage from '../assets/logo_menu_digital.png';


const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
    const [email, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = () => {
        onLogin(email, password);
    };

    const header = (
        <img height="200px" style={{objectFit: 'cover'}} alt="Card" src={logoImage}/>
    );
    
    const footer = (
        <>
            <div className='flex flex-row-reverse flex-wrap'>
                <Button label="Entrar" icon="pi pi-check" onClick={handleSubmit}  style={{ marginLeft: '0.5em' }}/>
            </div>
        </>
    );

    return (
        <div className=" loginContainer flex justify-content-center align-content-center flex-wrap" style={{ minHeight: '700px' }}>
            <div className="flex align-items-center justify-content-center">
                <Card title="Entrar no Menu diginal" subTitle="Use seu e-mail e senha para acessar o site" footer={footer} header={header} className="md:w-25rem">
                    <div className="justify-content-center m-0">
                        <div>
                            <FloatLabel>
                                <InputText id="username" value={email} onChange={(e) => setUsername(e.target.value)}  style={{ width: '100%'}} />
                                <label htmlFor="username">E-mail</label>
                            </FloatLabel>
                        </div>
                        <div className='mt-5'>
                            <FloatLabel>
                                <Password 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                toggleMask
                                feedback={false}
                                />
                                <label htmlFor="password">Password</label>
                            </FloatLabel>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default LoginForm;
