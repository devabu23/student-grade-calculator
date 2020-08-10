const showAll = document.getElementById('showAll');
showAll.addEventListener('click',function () {
    let eng = document.getElementById('eng').value;
    let maths = document.getElementById('maths').value;
    let comp = document.getElementById('comp').value;
    let phy = document.getElementById('phy').value;
    let totalShow = parseFloat(eng)+parseFloat(maths)+parseFloat(comp)+parseFloat(phy);
    let grades = "";
    // alert(totalShow);

    let perc = (totalShow/400)*100;
    // alert(perc);

    if (perc <=100 && perc >= 80) {
        grades = "A";
    }
    else if (perc <= 70 && perc >= 60) {
        grades = "B"
    }
    else if (perc <= 50 && perc >= 40) {
        grades = "C";
    }
    else {
        grades = "F";
    }

    if(perc >= 39.5){
        document.getElementById('showData').innerHTML = ` Out of 400 your total is  ${totalShow} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Pass. `
      }
      else{
        document.getElementById('showData').innerHTML = ` Out of 400 your total is  ${totalShow} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Fail. `
      }
})
