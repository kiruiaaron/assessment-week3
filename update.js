let  url = 'https://jsonplaceholder.typicode.com/posts/1';

let updateData = {
    id:1,
    title: 'foo',
    body:'bar',
    userId: 1
  };

  async function updateJson(){
  
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json  ; charset=UTF-8",
      },
      body: JSON.stringify(updateData)
    });
  
    if (!response.ok) {
      const erroMessage = 'Request Failed: ' + response.status;
      throw new Error(erroMessage);
    }
  
    const update = await response.json();
    console.log(update);
  } catch (error) {
    console.log('Request failed: ' + err);
  }

}
updateJson();
