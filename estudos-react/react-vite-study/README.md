# React + Vite

Este repositório contém um conjunto de estudos e práticas sobre como configurar e trabalhar com **React** utilizando **Vite** como bundler. O objetivo é entender como configurar um projeto React do zero com Vite, explorar os principais conceitos do React (componentes, hooks, roteamento, etc.) e como estruturar o código de maneira eficiente.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:


### Pasta `components`

A pasta `components` contém todos os **componentes reutilizáveis** da aplicação. Em React, os componentes são fundamentais para criar interfaces modulares e escaláveis. Cada componente deve ser projetado para ser reutilizado em diferentes partes da aplicação, com funções bem definidas.

#### O que cada componente faz?

- **Componentes de UI:** Contêm elementos visuais, como botões, inputs, cabeçalhos, cards, etc. Esses componentes são projetados para serem reutilizáveis em diversas partes da aplicação.
  
- **Componentes de Layout:** Utilizados para estruturar a página ou a interface, como containers, grids, barras de navegação, rodapés, etc.

- **Componentes Funcionais:** Implementam lógica de funcionalidade, como modais, formulários, listas dinâmicas, etc. Esses componentes podem usar **hooks** e gerenciar estados ou interações.

### Modelos de Exportação

Os componentes dentro de `components` podem ser exportados de diferentes maneiras, dependendo do tipo e da necessidade do componente. Abaixo estão os principais modelos de exportação que você pode encontrar.

#### 1. **Exportação Padrão (Default Export)**

A exportação padrão é usada quando se quer exportar um único componente de um arquivo. Esse modelo é ideal quando o arquivo contém apenas um componente principal.

```jsx

import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick}>{label}</button>
  );
};

export default Button;

Importando:
import Button from './components/Button';

#### 2. **Exportação Nomeada (Named Export)**

A exportação nomeada é útil quando se tem múltiplos componentes dentro de um único arquivo ou quando se deseja exportar funções auxiliares, constantes, hooks, entre outros.
// components/Modal.jsx

import React from 'react';

export const ModalHeader = ({ title }) => {
  return <h2>{title}</h2>;
};

export const ModalBody = ({ children }) => {
  return <div>{children}</div>;
};

const Modal = ({ children, isOpen }) => {
  if (!isOpen) return null;
  return <div className="modal">{children}</div>;
};

export default Modal;


Importando componentes nomeados:
import Modal, { ModalHeader, ModalBody } from './components/Modal';


#### 3. **Exportações Múltiplas de um Arquivo**

Quando você precisa exportar múltiplos componentes ou funções de um arquivo, pode-se usar exportações múltiplas de forma organizada.

// components/index.js

export { default as Button } from './Button';
export { default as Modal } from './Modal';
export { ModalHeader, ModalBody } from './Modal';

Importando de um único ponto:
import { Button, Modal, ModalHeader, ModalBody } from './components';


### Como Organizar Componentes

### Componentes Funcionais vs. Componentes de Classe: 
É altamente recomendado usar componentes funcionais com hooks (como useState, useEffect, etc.) devido à sua simplicidade e clareza.

 ### Componentes de Apresentação e Contêineres: 
 Separe os componentes que lidam apenas com a interface (UI) dos que gerenciam a lógica de dados. Por exemplo:

### Componentes de apresentação (UI): Botões, inputs, cards.
### Componentes contêineres: Formulários, modais, listas dinâmicas.
Subpastas por Funcionalidade ou Página: Para projetos maiores, pode ser interessante organizar os componentes dentro de subpastas com base na funcionalidade ou página:


## Como Rodar o Projeto
npm install -> npm run dev