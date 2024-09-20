import axios from 'axios';

const botToken = process.env.BOT_TOKEN;

const sendMessage = async (event) => {
    const {chatID, message} = event;
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatID}&text=${message}`;
    axios.get(url).then((response) => {
        return response.data;
    }).catch((error) => {
        return error;
    });
}

export { sendMessage };