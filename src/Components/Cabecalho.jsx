import React, { useEffect, useState } from 'react';

export default function Cabecalho(){
    const handleLogout = () => {
        sessionStorage.removeItem('userData');
        window.location.reload();
      };

    const [userData, setUserData] = useState(null);

    // Efeito para ler os dados do sessionStorage quando o componente for montado
    useEffect(() => {
    try {
        const storedData = sessionStorage.getItem('userData');

        if (storedData) {
        const parsedData = JSON.parse(storedData);
        setUserData(parsedData);
        }
    } catch (error) {
        console.error('Erro ao obter dados do sessionStorage:', error);
        window.location.reload(); // Recarrega a página em caso de erro
    }
    }, []);
    return(
        <>
        <header className='headerLayout'>
            <h1>Nome: {userData?.usuario}; E-Mail: {userData?.email}</h1>
            <p>Global Solution 2023 - Engenharia de Software <br/></p>
            <button onClick={handleLogout} className="logout">Logout</button>
        </header>
        </>
    )
}