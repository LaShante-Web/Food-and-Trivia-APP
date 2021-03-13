var SpoonacularApi = require('https://api.spoonacular.com/food/trivia/random?apiKey=17f3e9584fd5415b843a722b72449800&includeNutrition=true.');
 
 
var api = new SpoonacularApi.DefaultApi()
var q = 'salmon with fusilli and no nuts'; // {String} The recipe search query.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.SpoonacularApi.DefaultApi(q, callback);
 