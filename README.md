# <h1 align="center"> Módulos e Data Binding Angular </h1>

<div ><br>

# O Que São Módulos no Angular?

Um **module** é um mecanismo para agrupar **components, directives , pipes e services** relacionados, de forma a combinar com outros módulos para criar um aplicativo. Uma aplicação angular pode ser pensada como um quebra-cabeça onde cada peça (ou cada módulo) é necessária para poder ver a imagem completa.

# O Que é Data Binding e Como Utilizar Através de Intorpolação
Ligação de dados ou Data Binding é uma técnica geral que une duas fontes de dados/informações e as mantém em sincronia em um processo que estabelece uma conexão entre UI (interface de usuário) da aplicação e a lógica de negócio.

Agora que sabemos o que é data binding podemos conhecer quais são os tipos de ligação de dados que podemos trabalhar no Angular.

## Interpolação

Utilizado para exibir uma propriedade do componente(Typescript) ao seu respectivo template HTML utilizando chaves duplas. É possível exibir vários tipos de dados, como por exemplo, textos, números, data, matrizes, listas, etc.

Este tipo de binding consiste em uma ligação unidirecional (One-way binding) sempre seguindo o caminho do componente para os elementos HTML.

<div style="display: inline_block" align = "center"><br>

## 📌 Sobre o Projeto

### Exercício 1:

 Crie um projeto angular com o ng new para gestão de colaboradores.
  
### Exercício 2:

Crie um módulo para services, pipes e components compartilhados e um módulo para feature de colaboradores.

### Exercício 3:
Com o projeto do exercício anterior, crie 3 componentes, 1 header, 1 footer, 1 componente para listagem dos cadastros de colaboradores. O header e footer serão compartilhados entre a aplicação, então crie na pasta shared>components, já a listagem de colaboradores crie em features/colaboradores..

### Exercício 4:

Com o projeto do exercício anterior, estilize de forma básica o header e footer.

### Exercício 5:

No app.component.html utilize nessa ordem: header, listagem, footer.

### Exercício 6:
No app.component crei uma tag H1 e interpole um título de uma variável criada no typescript.

### Exercício 7:
No app.component crie uma div e exiba as seguintes informações do objeto do colaborador abaixo:
>{
    id: 7,
    nome: 'Nathan Carlos Exercicio',
    salario: 4500,
    cargo: 'Dev Pl'
}



## 📌 Ferramentas utilizadas:

<div><br>

  <img align="center" alt="Brenda-Angular" height="40" width="40" src="https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg" />
  <img align="center" alt="Brenda-GitHub" height="40" width="40" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
  <img align="center" alt="Brenda-HTML" height="40" width="40" src="https://cdn-icons-png.flaticon.com/512/1532/1532556.png" />
  <img align="center" alt="Brenda-CSS" height="40" width="40" src="https://cdn-icons-png.flaticon.com/512/732/732190.png" />
  <img align="center" alt="Brenda VsCode " height="40" width="40" src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png" />

  </div>
