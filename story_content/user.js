function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Z2zGXQsJVA":
        Script1();
        break;
  }
}

function Script1()
{
  var iframeElements = document.getElementsByTagName("iframe");
iframeElements[0].contentWindow.generatePDF();
}

