async function getData () {
fetch('http://localhost:3000/')
.then(response => response.json())
.then(json => showData(json)
     );
}

async function saveData (data) {
  // console.log("checking..");
  const rawResponse = await fetch('http://localhost:3000/saveData', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  const content = await rawResponse.json();
  // console.log(content);
  return true;
}

async function getOptions() {
  let responseData = await fetch('http://localhost:3000/')
  const DataReponse = await responseData.json()
  var names = await DataReponse.map(function(item) {
    return item['city'];
  });
  // console.log('names',names)
  return names
}

async function loginData(data) {
  let email = data.email
  let password = data.password
  let responseData = await fetch('http://localhost:3000/')
  const DataReponse = await responseData.json()
  var foundValue = DataReponse.filter(obj=>obj.name===email && obj.email === password);
  // console.log('data',DataReponse,foundValue)
  return foundValue;
}
async function showData (responseData) {
    // console.log('responseData',responseData)
    let testArray = [{
        "image": `F:/wastefoodmanagement/PROJECTS(WEB DEVELOPMENT)/FoodManagement System/wastefood.jpg`
      }]
      let html = ""
    for (let j = 0; j < responseData.length; j++) {
        html += `<div class = "row">${`<div class="w3-third w3-container w3-margin-bottom"> <img src="${testArray[0].image}" alt="Norway" style="width:100%" class="w3-hover-opacity"> 
        <div class="w3-container w3-white"> 
        <p><b style="color:black;font-size:15px;">Ngo Name:${responseData[j].name}</b></p> 
        <p><b style="color:black;font-size:15px">Email:${responseData[j].email}</b></p>
        <p><b style="color:black;font-size:15px">Phone No:${responseData[j].phno}</b></p>
        <p><b style="color:black;font-size:15px">City:${responseData[j].city}</p>
        <p><b style="color:black;font-size:15px">State:${responseData[j].state}</p>
        <p><b style="color:black;font-size:15px">Strength:${responseData[j].strength}</p>
        <p><b style="color:black;font-size:15px">Ngo Address:${responseData[j].address}</p>
        
        <button type='submit' value='Submit' id='btClickMe${j}' style="background-color:#4CAF50;"
              onclick='save(${j}); this.disabled = true;'>Donate</button>
      </p>
      </div></div>`}`
      }
      // console.log(html)
      document.getElementById("container").innerHTML =html
}











{/* <button class="button" id="${j}" onclick="donate(this.id); this.disabled = true;" class="btn btn-primary">donate</button> */    //   document.getElementById("container").innerHTML = `<div class = "row">${html}</div>`
}
