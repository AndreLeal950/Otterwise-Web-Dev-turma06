/* 1. Crie um projeto novo e instale a biblioteca axios. 
a. Consuma a lista de posts através do 
endpoint https://jsonplaceholder.typicode.com/posts.
b. Consulte o post com ID de valor 2.
c. Cadastre um novo post enviando um objeto com os atributos title e body 
para o endpoint https://jsonplaceholder.typicode.com/posts.
d. Faça a edição de um post enviando novos atributos title e body para o post com id 1.
e. Faça a exclusão post com ID de valor 3. */

import axios from "axios";
import fs from "fs";

// const getPosts = async () => {
// try {    
//      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
//      console.log("Segue a sua requisição: ")
//      console.log(response.data);
// }catch (error) {
//   console.log(error.message)  
//   console.log("Deu Error!!!")  
//   }
// };
//getPosts();

// const setPosts = async (info) => {
// try {    
//     const response = await axios.post("https://jsonplaceholder.typicode.com/posts/", info);
//     console.log("Segue a sua requisição: ")
//     console.log(response);
// }catch (error) {
//     console.log(error.message)  
//     console.log("Deu Error!!!")  
// }};
// const data = {
//     title: "Meu titulo",
//     body: "Meu texto",
//     userId: 21, 
// }
// setPosts(data);

// const putPosts = async (info, value) => {
//     try {    
//         const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${value}`, info);
//         // console.log("Segue a sua requisição: ")
//         console.log(response);
//     }catch (error) {
//         // console.log(error.message)  
//         // console.log("Deu Error!!!")  
//     }};
//     const data = {
//         title: "Texto Modificado",
//         userId: 1, 
//     }
//     putPosts(data, 1);

// const patchPosts = async (info, value) => {
//     try {    
//         const response = await axios.patch(`https://jsonplaceholder.typicode.com/posts/${value}`, info);
//         // console.log("Segue a sua requisição: ")
//         console.log(response.data);
//     }catch (error) {
//         // console.log(error.message)  
//         // console.log("Deu Error!!!")  
//     }};
//     const data = {
//         title: "Texto Modificado",
//         userId: 20, 
//     }
//     patchPosts(data, 1);

const deletePosts = async (info) => {
    try {    
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/1`, info);
        // console.log("Segue a sua requisição: ")
        console.log(response);
    }catch (error) {
        // console.log(error.message)  
        // console.log("Deu Error!!!")  
    }};
  deletePosts();