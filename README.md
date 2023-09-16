<p align="center">
    <img src="./assets/icon.png" height="250px" width="250px"/>
</p>
<h1 align="center">WebMaster</h1>
<p>O webMaster é um pacote npm onde você pode usar em seus projetos para gerenciar informações no localStorage e com cookies</p>

## Instalação🚀
<p>Você pode instalar o pacote atravez dos instaladores de pacote do node.js</p>

- npm
    - ```bash 
        $ npm install webmaster
        ```
    
- yarn
    - ```bash 
        $ yarn add webmaster
        ```
- pnpm
    - ```bash 
        $ pnpm install webmaster
        ```

## Atributos e funções 📎
- **localMaster**
    - `createData(payload)` - cria a estrutura inicial do valor que será carregado para o local storage(necessario usar o `save()`)
    - `updateData(payload)` - atualiza o valor do que será carregado para o local torage(necessario usar o `save()`)
    - `save()` - salva todos os dados atualizados da classe no local storage
    - `getData()` - Retorna todos os dados atualizados no local storage
    - `stringfy(payload)` - transforma em string tudo que você passa como parametro
    - `parse(payload)` - transforma qualquer strings com códigos dentro em apenas código
    - `data` - data é o atributo da classe que contem o valor que será carregado pro local storage




## Como usar 🔩

Para instanciar você deve escolher se deseja utilizar os cookies ou o local storage, depois de escolher você deve importar uma das classes abaixo:

- localMaster para local storage

após a importação você deve instanciar a classe e passar os parametros necessários para ela, no caso do localMaster só é passado apenas a chave do do local storage

- **React.js**
    - ```jsx
        import { localMaster } from "webmaster"

        function App() {
            const myStore = new localMaster("key")
            console.log(myStore) // > localMaster {}
    
            myStore.createData({name: "FOO"})
            myStore.save()
            console.log(myStore) // localMaster { data: {name: "FOO"}}
            console.log(localStorage.getItem("key")) // '{name: "FOO"}'
    
            myStore.updateData({...myStore.getData(), age: 19})
            myStore.save()
            console.log(myStore) // localMaster { data: {name: "BAR", age: 19}}
            console.log(localStorage.getItem("key")) // '{name: "BAR", age: 19}'
    
            return <h1>{myStore.getData().name}</h1> // <h1>BAR</h1>
        }

        export default App

        ```
- **Vue.js**
    - ```html
        <script setup>
            import { localMaster } from "webmaster"
            const myStore = new localMaster("key")
            console.log(myStore) // > localMaster {}

            myStore.createData({name: "FOO"})
            myStore.save()
            console.log(myStore) // localMaster { data: {name: "FOO"}}
            console.log(localStorage.getItem("key")) // '{name: "FOO"}'

            myStore.updateData({...myStore.getData(), age: 19})
            myStore.save()
            console.log(myStore) // localMaster { data: {name: "BAR", age: 19}}
            console.log(localStorage.getItem("key")) // '{name: "FOO", age: 19}'
        </script>

        <template>
            <h1>{{ myStore.getData().age }}</h1> <!--<h1>19</h1>-->
        </template>
        ```

# Autor

| Foto de perfil      | Descrição |
| :-------------------: | :---------: |
| <img src="https://avatars.githubusercontent.com/u/89264926?v=4" alt="Sua Foto de Perfil" width="50" height="50" style="border-radius: 99px">     | Olá, eu sou [Luis Davi](https://luisdavi.vercel.app), um desenvolvedor entusiasta que criou a biblioteca **webMaster**. Estou sempre buscando maneiras de tornar a web mais incrível e funcional.

---

- 💼 Conecte-se comigo no [LinkedIn](https://www.linkedin.com/in/luisdav1)
- 🌐 Visite o meu [site pessoal](https://luisdavi.vercel.app) para saber mais sobre meus projetos
- 📸 Siga-me no [Instagram](https://instagram.com/lu1s.dev) para ver as últimas novidades

Fique à vontade para entrar em contato comigo para qualquer dúvida ou colaboração!


