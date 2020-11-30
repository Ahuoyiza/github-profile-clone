const github_data = {
    "token" : "136b21b5a63ed5602a27ca8a1f95a0e481bc15ea",
    "username":"Ahuoyiza"
};


const headers = {
  Authorization: "bearer "+github_data["token"],
    "Content-Type": "application/json",

}

const query = `
{
    
      user(login: "Ahuoyiza"){
        repositories(last: 15, orderBy: {field: CREATED_AT, direction:ASC}){
          nodes{
            name,
            Language:primaryLanguage{name},
            updatedAt,
            stargazerCount,
          }
        }
      }
    
    
}
`
;


const baseUrl = "https://api.github.com/graphql";


const fetchRepo = async () =>  {
  const response = await fetch(baseUrl,
     {
        method: 'post',
        headers: headers,
        body: JSON.stringify({query})
   },
  );
  const json = await response.json();
  const repos = json.data.user.repositories;

  console.log(repos)
}
fetchRepo();