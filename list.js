
//LIST
let url = ('https://jsonplaceholder.typicode.com/posts');

async function listJson(){
    try {
        const response =await fetch(url)
        if(!response.ok){
            const errorMessage = 'Request failed :' + response.status;
            throw new Error(errorMessage);
        }
        const list = await response.json();
        console.log(list);

    } catch (error) {
        console.log("Request failed",error);
        
    }
}
 listJson();

 //POST

