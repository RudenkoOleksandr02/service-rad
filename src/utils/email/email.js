import emailjs from "emailjs-com";

const SERVICE_ID = 'service_cw0wecg';
const TEMPLATE_ID = 'template_ro4e2zn';
const PUBLIC_KEY = 'JgL91W5czyFBVvczv';

export const sendEmail = (name, lastName, phoneNumber, text) => {
    const templateParams = {
        name,
        lastName,
        phoneNumber,
        text: text ? text : "Клієт хоче зв'язатися"
    };
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
}
