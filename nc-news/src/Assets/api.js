import axios from 'axios';


const baseURL = 'https://rajinder-presenting-nc-news.herokuapp.com/api'

export const getTopics = async () => {
    const {data} = await axios.get(`${baseURL}/topics`)
    return data.topics;
 }


 export const getData = async (id) => {
     
    return  axios.get(`${baseURL}/articles/${id}`)
    .then(({data: {article}}) => {

        console.log(article)
        return Promise.all([article, axios.get(`${baseURL}/articles/${id}/comments`)])
    })
    .then(([article, {data:{comments}}]) => {
        console.log('comments', comments)
         return Promise.all([article, comments])
    })
 }

 export const getArticles = async (topic) => {
     const url = topic? `${baseURL}/topics/${topic}/articles` : `${baseURL}/articles`;
     const {data} = await axios.get(url)
      return data.articles;  
 }

 export const getArticleById = async (id) => {
     const {data} = await axios.get(`${baseURL}/articles/${id}`)
     
     return data.article;
 }

 export const getComments = async (id) => {
     const {data} = await axios.get(`${baseURL}/articles/${id}/comments`)
     return data.comments;
 }