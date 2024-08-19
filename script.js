const details = document.querySelector('.details');
const btn = document.getElementById("track");
const numberinput = document.getElementById("phone-number")
const countryCodeInput = document.getElementById("country-code")


const API_KEY = `2adf8bfff51a6c6820ac83682a3f022d`


async function getdata() {



    const number = numberinput.value;
    const countryCode = countryCodeInput.value
    
    if(numberinput.value === '' || countryCodeInput.value === ''){
      alert('Please enter a valid phone number and country code');
      return;
    } 




   const url = `https://apilayer.net/api/validate?access_key=${API_KEY}&number=${number}&country_code=${countryCode}`;
   const options = {
      method: 'GET'
      
   };

   try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);


      
      const newDiv = document.createElement("div")
      newDiv.classList.add("phoneDetails")

      newDiv.innerHTML = `
      <p>Carrier:${result.carrier}</p>
      <p>Country code:${result.country_code}</p>
      <p>Country name:${result.country_name}</p>
      <p>Location:${result.location}</p>
      <p>Valid:${result.valid}</p>
      <p>Line Type:${result.line_type}</p>
      <p>International Format:${result.intl_format}</p>
      <p>Country Format:${result.country_format}</p>
      <p>Location Format:${result.location_format}</p>
      <p>Country prefix:${result.country_prefix}</p>
      <p>Number:${result.number}</p>   
      `

      // details.innerHTML='';
      details.appendChild(newDiv)

      
      
       

     
   } catch (error) {
      console.error("failed to load Api:",error);
      newDiv.innerHTML='Failed to load API';
   }
    

    
}


// getdata()



btn.addEventListener('click',getdata)
