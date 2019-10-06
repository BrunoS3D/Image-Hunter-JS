# Image-Hunter-JS
 📦 NODE.JS - Simples Page-Scrapper que captura links de imagens em um site.


##### Versão em Python: https://github.com/BrunoS3D/Image-Hunter

### Instalação
1. Você precisará ter instalado o Node.js na sua máquina: https://nodejs.org/
2. Execute `npm i` para instalar as dependencias do projeto

### Rodando o script
Basta realizar os passos a seguir:
1. Clone este repositório
2. Abra o terminal no local repositório clonado em sua máquina
3. Execute o seguinte comando no terminal `node index.js`
4. Insira a URL do site alvo no campo `Insira a URL aqui:` que aparece no console

Feito isso será exibido uma lista de links contendo imagens do site

### Observações:
* O Código pode não funcionar em 100% dos sites, pois é um algoritimo relativamente simples feito por mim apenas com fins de aprendizado.
* O Código não vai funcionar em `Sites Reativos` (React, Angular, Vue...), pelo simples fato de que o scrapping não executa JavaScript e lê apenas o HTML retornado pela url inserida no terminal, ou seja, funcionará apenas em sites estáticos e SSR.

### Licença
```
MIT License

Copyright (c) 2019 Bruno Silva

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```