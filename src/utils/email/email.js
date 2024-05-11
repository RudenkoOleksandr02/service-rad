import emailjs from "emailjs-com";

const SERVICE_ID = 'service_59j5bn1';
const TEMPLATE_ID = 'template_0x7iewt';
const PUBLIC_KEY = '4eLVzLPIamBBP9P3M';

export const sendEmail = (name, lastName, phoneNumber, text = '') => {
    const templateParams = {
        name,
        lastName,
        phoneNumber,
        text: text === '' || text === 'Бажаєте оформити замовлення або дізнатись більше інформації про наше обладнання та отримати консультацію?' ? "Клієт бажає зв'язатися" : text
    };
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
}
