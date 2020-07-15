import { post } from 'axios';

const postAxios = async ({urlEmail, email: { name, email, message }}) => {

  return await post(
    urlEmail,
    { name, email, message },
    { headers: {"Accept": "application/json"} }
  ).catch(function (error) {
    console.log(error);
  });

};

export { postAxios };
