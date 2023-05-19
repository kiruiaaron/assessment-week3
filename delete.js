let url = 'https://jsonplaceholder.typicode.com/posts/1';

async function deleteJson(){
try {
    const response = await fetch(url, {
      method: "DELETE"
    });
  
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

deleteJson();