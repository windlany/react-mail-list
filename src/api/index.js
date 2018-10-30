export default {
  postData: (url, obj)=> {
    fetch(url, {
      method: 'POST',

    }).then(res=> {
        return res.json();
      }).then(val=> {
        
      })
  },
  getData: (url)=> {}
}
