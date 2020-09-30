/* Code written by Julian Dixon 29.09.2020*/
var wrapper = document.getElementById('root')

fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=mast&api_key=rnFtbhxzfXbPEgY6rQXb36xLnP4djOdyZ1O24JMX')
  .then(response => {
    return response.json()
  })
  .then(data => {
    // Work with JSON data here

    // Set the heading with the count of photos taken on that day and the date
    var h1 = document.createElement('h1');
    h1.textContent = 'Total photos taken on this sol: ' + data.photos.length + ' Earth date: ' + data.photos[0].earth_date;
    wrapper.appendChild(h1);

    // Loop through the JSON data to show the number and photo for each item
    for(var i = 0; i < 10; i++) { // Show first 10 numbered photos

        var p = document.createElement('p');
        p.textContent = 'Photo number: ' + data.photos[i].id;

        var image = document.createElement('img');
        image.setAttribute('src', data.photos[i].img_src);

        wrapper.appendChild(p);
        wrapper.appendChild(image);
    }
  })
  .catch((err) => {
    console.log('Request resulted in an error');
  })

  
