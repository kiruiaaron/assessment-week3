let url = ('https://jsonplaceholder.typicode.com/posts');

let postData = {
    title: 'foo',
    body:'bar',
    userId: 1
  };

  async function postJson(){
 
     try {
       const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json ; charset=UTF-8",
      },
      body: JSON.stringify(postData)
    });
  
    if (!response.ok) {
      const errorMessage = 'Request Failed: ' + response.status;
      throw new Error(errorMessage);
    }
  
    const post = await response.json();
    console.log(post);
  } catch (error) {
    console.log('Error: ' + error);
  }

}
  
postJson();
