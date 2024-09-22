import axios from 'axios';

const botToken = process.env.BOT_TOKEN;

const sendMessage = async (event) => {
    const {chatID, message} = event;
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatID}&text=${message}`;
    try{
        const response = await axios.get(url);
        return response.data;
    }
    catch(e){
        console.error("Error: ", e);
        throw e;
    }
}

export { sendMessage };