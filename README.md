# Tarefa 4

## Projeto Interativo de Alteração de Cor 🎲

Este projeto é uma página web simples desenvolvida como parte de um exercício para praticar manipulação do **DOM** (Document Object Model) e eventos em **JavaScript**. A proposta é criar uma página com um elemento HTML que muda de cor aleatoriamente toda vez que um botão for clicado.

Este projeto faz parte do programa **3035Teach** da **3035 Tech**, que promove o aprendizado prático em desenvolvimento web.


Caso queira acessá-lo, clique [aqui](https://felipecardosovargas.github.io/Tarefa_4/).
---

## Descrição 📋

A página possui um layout básico e funcional, com:

- **Elemento HTML**: Um parágrafo (`<p>`) estilizado que terá sua cor alterada.  
- **Botão**: Um botão interativo que dispara o evento de mudança de cor.  

O objetivo do projeto é praticar os seguintes conceitos:

- Manipulação do DOM em **JavaScript**.  
- Uso de eventos para interatividade.  
- Geração de cores aleatórias dinamicamente.

---

## Tecnologias Utilizadas 🛠️

- **HTML**: Estrutura da página.  
- **CSS**: Estilização básica do layout.  
- **JavaScript**: Manipulação do DOM e criação da funcionalidade de mudança de cor.  

---

## Estrutura de Diretórios 📂

A estrutura do projeto segue o seguinte formato:

```
Tarefa_4/
│
├── index.html         # Página principal com o layout e funcionalidade
├── css/
│   └── styles.css     # Arquivo de estilos CSS
└── js/
    └── script.js      # Arquivo de JavaScript para a lógica da aplicação
```

---

## Como Usar 🚀

1. **Clone o Repositório**:
   Faça o clone do repositório para sua máquina local:
   ```bash
   git clone https://github.com/Felipecardosovargas/Tarefa_4.git
   ```

2. **Acesse o Diretório**:
   Navegue até o diretório do projeto clonado:
   ```bash
   cd Tarefa_4
   ```

3. **Abra o Arquivo HTML**:
   Abra o arquivo `index.html` em qualquer navegador para visualizar a página:
   ```bash
   open index.html
   ```

4. **Teste a Funcionalidade**:
   Clique no botão para alterar a cor do elemento na página.

---

## Objetivo do Projeto 🛠️

1. **Praticar Manipulação do DOM**: Adicionar interatividade à página.  
2. **Trabalhar com Eventos**: Criar um evento de clique no botão.  
3. **Geração Aleatória**: Desenvolver lógica para mudar a cor dinamicamente.  

---

## Lógica da Aplicação 💡

O projeto utiliza **JavaScript** para gerar cores aleatórias em formato hexadecimal. O evento de clique no botão dispara a seguinte lógica:

1. Gera um valor hexadecimal aleatório (ex: `#1a2b3c`).  
2. Aplica o valor gerado como cor de fundo do elemento HTML.  
3. Atualiza o layout em tempo real.

---

## Detalhes do Código 📜

### HTML (`index.html`)

- Estrutura básica com um parágrafo e um botão:
  ```html
  <p id="color-box">Clique no botão para mudar minha cor!</p>
  <button id="color-button">Mudar Cor</button>
  ```

### CSS (`css/styles.css`)

- Estilização básica para o layout e elementos visuais:
  ```css
  #color-box {
    padding: 20px;
    text-align: center;
    font-size: 18px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  ```

### JavaScript (`js/script.js`)

- Lógica de geração de cores e evento:
  ```javascript
  const colorBox = document.getElementById('color-box');
  const colorButton = document.getElementById('color-button');

  colorButton.addEventListener('click', () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    colorBox.style.backgroundColor = randomColor;
  });
  ```

---

Com este projeto, pude consolidar o uso de **JavaScript** para criar interatividade em páginas web, conectando elementos visuais com eventos de forma prática e eficiente.
