
function vineetafy(text)
{
  var input = text;
  if(input[input.length-1]!=".")
  {
    input= input +".";
  }
  var to_array = ["i ", "I ", "is ", "you ","are "];
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
