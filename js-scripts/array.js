let startIndex = parseInt(localStorage.getItem('startIndex')) || 0;
let url = 'https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json';

let item;

const currentloginid = async () => {
  const response = await fetch(url)

  item = await response.json()
  console.log(item)
  await getPersonForView(item)
  await createSelect()
  await disableBtn(startIndex)
    return item
}

currentloginid()
  
 
  