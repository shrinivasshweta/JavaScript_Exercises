<html>
    <body>
        <p>Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).</p>
    <script>  

var recipe = {
    title: 'cake',
    servings: 2,
    ingredients: ['flour', 'butter','milk','sugar', 'cocoa']
};

console.log(recipe.title);
console.log('Servings: ' + recipe.servings);
console.log('Ingredients:');
for (var i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i]);
}

</script>
    </body>

</html>