import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';  
import { InputText } from 'primereact/inputtext';

const Home: React.FC = () => {
    const [value, setValue] = useState('');

  return (
    <div>
    <h1>Home Page</h1>
    <p>Bem-vindo à página inicial!</p>
    <IconField iconPosition="left">
    <InputIcon className="pi pi-search"> </InputIcon>
    <InputText v-model="value1" placeholder="Search" />
    </IconField>
    <Button label="Clique aqui" icon="pi pi-check" />
    <Password value={value} onChange={(e) => setValue(e.target.value)}
    promptLabel="Choose a password" weakLabel="Too simple" mediumLabel="Average complexity" strongLabel="Complex password"/>
  </div>
  );
};

export default Home;
