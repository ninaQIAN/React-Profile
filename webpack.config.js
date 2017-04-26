module.exports = {
entry: "./src/index.jsx",
 output: {
   filename: "public/bundle.js"
 },
 module: {

   loaders: [
     {
       test: [/\.js$/, /\.es6$/, /\.jsx$/],
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
         presets: ['react', 'es2015']
       }
     }
   ]
 },
 resolve: {
   extensions: ['', '.js', '.es6',]
 }
}