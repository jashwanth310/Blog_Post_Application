const express = require('express')
const mongoose = require('mongoose') 
const articleRouter = require('./routers/articles')
const app = express()

mongoose.connect('mongobd://localhost/blog', { useMewUrlParser: true 
,useUnifiedTopology: true })
mongoose.connect('mongobd://localhost/blog')

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)
app.use(express.urlencoded({ extended: false }))

app.get('/',(req, res) => {
   const articles =[{
      title:  'Test Articles',
      createdAt: new Date(),
      description: 'Test description'
   },
   {
   title:  'Test Articles 2',
   createdAt: new Date(),
   description: 'Test description 2'
   }]
   res.render('articles/index', { articles: articles})
})   

app.listen(5000)
