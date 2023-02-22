import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "../lib";
import { getContact } from "../api/contact";

const ContactPage = () => {

    const [Contact, setContact] = useState({});
    useEffect(() => {
        getContact()
        .then(Project => setContact(Project))
    }, [])

    return `
    ${Header()}
    <div class="contact">
        <div class=" ml-28 my-4">
        
            <h3>${Contact.title}</h3>
            Địa chỉ cụ thể: <a href="https://goo.gl/maps/EScG5uNZZz83d7tUA" target="_blank" class="border-2 p-1 rounded-xl no-underline hover:border-[#F26464]">${Contact.address}</a>
        
            
        </div>
        
        <div class="maps flex justify-center ">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.1372731396336!2d105.78958841473073!3d20.987133786020987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acc87d801585%3A0xf95f9afbe464ca2d!2zNjcgUC4gUGjDuW5nIEtob2FuZywgVHJ1bmcgVsSDbiwgSMOgIMSQw7RuZywgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1676734773086!5m2!1svi!2s" width="800" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class=""></iframe>
        </div>
    
    </div>
    
    ${Footer()}`;
};

export default ContactPage;