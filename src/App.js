import './style.css'
import React from 'react';

export default function App() {
  return (
    <section>
      <div className='apresentação'>
        <h1 className='titulo'>Olá, eu sou kleberson</h1>
        <p className='texto'>Nascido em 02/05/2007, em Brasilia de Minas-MG. sou um novo estudante na ELITI, uma escola excelente de programadores. Ainda sou novato com progração, tendo recentemente completado um mês na ELITI. ainda sou meio inexperiente, tendo começado agora no react, mas estou me esforçando para melhorar. atualmente tenho 17 anos, busco me tornar um profissional em programação e conseguir atingir grandes conquistas nesta carreira. </p>
        <p className='texto'>Aqui estão alguns de meus projetos:</p>
        <section id='links'>
          <a id='1' className='button-link'>contador</a> <a id='2' className='button-link'>Lista de tarefas</a>
        </section>
      </div>
      <div className='imagem'>
        <img src='eu.JPG' rel='eu' width="450px" height="300px" />
      </div>
    </section>
  );
}

