//bmi formula = kg/(m^2)
$(document).ready(()=>{
  $('#hunit').on('click', ()=>{
    if (document.bmi.hunit.value === 'foot'){
      document.bmi.height.placeholder = 'in foot';
      $('#inch').show();
    } else {
      document.bmi.height.placeholder = 'enter your height';
      $('#inch').hide();
    }
  })
});


function calculator(){
  let weightValue = Number(document.bmi.weight.value);
  //same as: let weightValue = Number(document.getElementById('weight').value);
  let heightValue = Number(document.bmi.height.value);
  //same as: let weightValue = Number(document.getElementById('height').value);
  let winput = Number(document.bmi.weight.value);
  let hinput = Number(document.bmi.height.value)

  if (document.bmi.wunit.value === 'pound'){
    //document.bmi.weight.placeholder = 'enter in pound';
    weightValue = (winput * 0.453592) ;
  }
  if (document.bmi.hunit.value === 'foot'){
    heightValue = ( (hinput + (document.bmi.inch.value)/12)* 0.3048) ;
  };
  let bmiValue = ( weightValue / (heightValue * heightValue)).toFixed(2);
  let bmi = document.getElementById('bmi');
  bmi.innerHTML = bmiValue;

  //alert("your bmi: " + bmiValue);
  let condition = document.getElementById('condition');
  let colors = ['red', 'green', 'yellow', 'orange']
  if ( bmiValue < 18.5) {
    condition.innerHTML = 'underweight';
    $('#condition').addClass('red');
    for (i=1; i <= colors.length; i++){
      $('#condition').removeClass(colors[i]);
    }
  } else if (  bmiValue < 25 ) {
    condition.innerHTML = 'healthy';
    $('#condition').addClass('green');
    $('#condition').removeClass(colors[0]);
    $('#condition').removeClass(colors[2]);
    $('#condition').removeClass(colors[3]);
  } else if (  bmiValue < 30 ) {
    condition.innerHTML = 'overweight';
    $('#condition').addClass('yellow');
    $('#condition').removeClass(colors[0]);
    $('#condition').removeClass(colors[1]);
    $('#condition').removeClass(colors[3]);
  } else if (  bmiValue < 40 ) {
    condition.innerHTML = 'obese';
    $('#condition').addClass('orange');
    for (i=0; i < colors.length-1; i++){
      $('#condition').removeClass(colors[i]);
    }
  } else if ( bmiValue >= 40 ){
    condition.innerHTML = 'extremely obese';
    $('#condition').addClass('red');
    for (i=1; i <= colors.length; i++){
      $('#condition').removeClass(colors[i]);
    }
  }
}
