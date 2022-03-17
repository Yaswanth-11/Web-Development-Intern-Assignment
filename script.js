function fun(x)
		{
			document.getElementById('img').src=x;
		}

		function ddlselect()
    {
        var d=document.getElementById("ddselect");
        var displaytext=d.options[d.selectedIndex].text;
        document.getElementById("txtvalue").value="Navigation Item "+displaytext;
    }

    function increaseCount(a, b) {
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
}

function decreaseCount(a, b) {
  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
  }
}
	