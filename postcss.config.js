console.log('PostCSS chargé !');
module.exports = {
  plugins: [
    require('postcss-import'),  
    require('tailwindcss'),    
    require('autoprefixer'),     
  ],
};
