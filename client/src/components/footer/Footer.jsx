import './footer.scss';
import WhatsAppChatLink from './WhatsApp';
import Instagram from './Instagram';
function Footer() {
  return (
    <div className="footer">
      <ul>
        <li><a href="#"> <Instagram/> </a></li>
        <li><a href="#"><WhatsAppChatLink/></a></li>

        <li><a href="#">Correo</a></li>
      
       </ul>
    </div>
  );
}

export default Footer ;
