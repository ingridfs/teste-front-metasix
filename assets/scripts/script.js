const headers = new Headers();
headers.append("X-Parse-Application-Id", "br.com.metasix.poc");
const apiConnection = new Request('https://poc.metasix.solutions/parse/classes/FAQ', {headers});

fetch(apiConnection)
  .then(response => {
    return response.json()
  })
  .then(list => {
    console.log(list)
  })
