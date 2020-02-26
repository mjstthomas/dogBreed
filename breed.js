
function getDogImage(){
  let breed = $('input[type=text]').val();;
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => {
      if (responseJson.status === "success"){
        showMeTheDoggo(responseJson)
      } else {
        alert(responseJson.message)
      }
    })
    .catch(error => alert('something went wrong'));
  }




function submitForDoggo(){
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  })
}
function showMeTheDoggo(responseJson){
	console.log(responseJson)
	$('main').empty();
	$('main').append(`<img src="${responseJson.message}" class="sizing" alt="picture of a Dog">`);
}
submitForDoggo()
