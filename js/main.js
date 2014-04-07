
function vineetafy(text)
{
  var input = text;
  var to_array = ["i ", "I ", "is ", "you "];
  //"I am ", "i am ","you are "
  var to_array_replace = [];
  for(var i=0;i<to_array.length;i++)
  {
    to_array_replace.push(to_array[i]+" to ");
  }
  input = input.replace("."," only.");
  for(var i=0;i<to_array.length;i++)
  {
    input = input.replace(to_array[i],to_array_replace[i]);
  }
  return input;
}
