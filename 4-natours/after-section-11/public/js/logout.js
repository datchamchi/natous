/* eslint-disable */
document
  .querySelector('.nav__el--logout')
  .addEventListener('click', async function(e) {
    try {
      console.log('hello');
      const res = await axios({
        method: 'POST',
        url: 'http://localhost:3000/api/v1/users/logout'
      });
      console.log(res.data);
      if (res.data.status === 'success') {
        window.setTimeout(() => {
          location.assign('/');
        }, 1500);
      }
    } catch (err) {
      alert(err.response.data.message);
    }
  });
