import './style.css'
import React from 'react';

export default function App() {
  return (
    <section id='espaço'>
      <div class='apresentação'>
        <h1 className='titulo'>Olá, eu sou Kleberson</h1>
        <p className='texto'>Nascido em 02/05/2007, em Brasilia de Minas-MG. sou um novo estudante na ELITI, uma escola excelente de programadores. Ainda sou novato com progração, tendo recentemente completado um mês na ELITI. ainda sou meio inexperiente, tendo começado agora no react, mas estou me esforçando para melhorar. atualmente tenho 17 anos, busco me tornar um profissional em programação e conseguir atingir grandes conquistas nesta carreira. </p>
        <p className='texto'>Aqui estão alguns de meus projetos:</p>
        <section id='links'>
          <a id='a1' className='button-link'>contador</a> <a id='a2' className='button-link'>Lista de tarefas</a>
        </section>
      </div>
      <div id='imagem'>
        <img src='teste.jpeg' rel='eu' width="400px" height="592px" />
      </div>
    </section>
  );
}

