const setBg1 = () => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("hexCol1").style.backgroundColor = "#" + randomColor;
    colorSpan1.innerHTML = "#" + randomColor;
  
  }
  
  hexBut1.addEventListener("click", setBg1);
  setBg1();
  
  const setBg2 = () => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("hexCol2").style.backgroundColor = "#" + randomColor;
    colorSpan2.innerHTML = "#" + randomColor;
    
  }
  
  hexBut2.addEventListener("click", setBg2);
  setBg2();
  
  const setBg3 = () => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("hexCol3").style.backgroundColor = "#" + randomColor;
    colorSpan3.innerHTML = "#" + randomColor;
    
  }
  
  hexBut3.addEventListener("click", setBg3);
  setBg3();
    