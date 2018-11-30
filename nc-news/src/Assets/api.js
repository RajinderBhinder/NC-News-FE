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

 export const getUser = async (username) => {
     const {data} = await axios.get(`${baseURL}/users/${username}`)
     return data.user;
 }

 export const addArticle = async (newArticle, topic) => {

     const {data} = await axios.post(`${baseURL}/topics/${topic}/articles`, newArticle)
     return data.article;
 }

 export const addComment = async (newComment, article_id) => {

    const {data} = await axios.post(`${baseURL}/articles/${article_id}/comments`, newComment)
    return data.comment;
 }

 export const deleteComment = async(comment_id) => {
     
    const {data} = await axios.delete(`${baseURL}/comments/${comment_id}`)
    return data;
 }

 export const vote = async(where, id, direction ) => {
     const {data} = await axios.patch(`${baseURL}/${where}/${id}?vote=${direction}`)
     
     return data[where]
 }