const temp=document.getElementById('tempvalue')
const f=document.getElementById("F")
const c=document.getElementById("C")
const result=document.getElementById('result');
const convert=document.getElementById('Convert')

convert.addEventListener('click',function(){
        const inputValue= parseFloat(temp.value);
        if (isNaN(inputValue)){
            result.textContent=`Please enter a temperature!`;
        }
        if(f.checked){
            const celsius = (inputValue - 32) * 5/9;
            result.textContent = `${inputValue}°F = ${celsius.toFixed(1)}°C`;
        }else if(c.checked){
            const fahrenheit= (inputValue *9/5) +32;
        result.textContent = `${inputValue}°C = ${fahrenheit.toFixed(1)}°F`;
        }else{
            result.textContent=`Please enter a scale`
        }
    })
