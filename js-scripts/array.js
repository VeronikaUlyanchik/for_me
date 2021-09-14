let item =[];
$.getJSON({
    url: 'https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json'
  }).then(function (i) {
    item=i;
  })

  