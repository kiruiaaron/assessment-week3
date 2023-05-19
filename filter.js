let url = 'https://jsonplaceholder.typicode.com/posts?userId=1';

async function filterJson(){
try {
    const response = await fetch(url)
  
    if (!response.ok) {
      const message = 'Request Failed ' + response.status;
      throw new Error(message);
    }
  
    const data = await response.json();
    console.log(data);

  } catch (error) {
    console.log('Error: ' + err);
  }
}

filterJson();