const token = 'E4mKIhK303TVZERtsOWuQ9Voqblv207K.HQqhTHBbOtlCeLW7fmCDcTpFVCRJP/TecE+EwPnWf+U';
const url = 'https://condo.d.doma.ai/admin/api';
const contact = document.getElementById('contact');

const queryQL2 = `query {{
   authenticatedUser {
     id
     name
     }
   }`

const query = `query {
  allContacts {
    id
    name
    phone
    property {
      address
    }
  }
}`


const options = {
  mode: 'same-origin',
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  }, 
  body: JSON.stringify({query}),
}

const request = async () =>{
  try {
    const res = await fetch(url, options);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}


// function printContact({id = '', name='mr.X' , phone= '' , property= {}}) {
//   const li = document.createElement('li');
//   li.className = "list-group"
//   li.innerHTML = `&nbsp; ID: ${id}| ${name} | ${phone} | ${name} | ${property.address}`
//   li.setAttribute('data-id', id) 

//   contact.prepend(li)
// }

// printContact(query).then(console.log)
request().then(console.log)