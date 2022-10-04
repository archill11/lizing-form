import axios from "axios"


export const fetchData = async (body) => {
  try {
    await axios.post('https://eoj3r7f3r4ef6v4.m.pipedream.net', {
      headers: {
      'Content-Type': 'application/json',
      },
      withCredentials: true,
    })
    alert('данные успешно отправленны ');
  } catch (err) {
    alert('ошибка отпраывки данных')
    console.log(err);
  }
}