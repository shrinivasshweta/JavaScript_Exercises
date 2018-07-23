<!DOCTYPE html>
<html>
<body>
<p>Create objects using the object constructor and prototypes</p>
<p id="demo">Display the result here.</p>

<script>
   
  function employee() {
  this.idnum = "0000F7";
}
employee.prototype.idnum = function() {
  return this.idnum;
}
 
var newObject = new employee();

document.getElementById("demo").innerHTML = newObject.idnum + " works in IBM";
  
    
</script>

</body>
</html>
