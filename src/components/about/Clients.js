import Image from "next/image";
import Link from "next/link";

const Clients = () => {
   return  (
	<section class="clients-section">
		<div class="auto-container"> 
		
		  <div class="sponsors-outer"> 
		
		    <ul class="clients-carousel owl-carousel owl-theme disable-navs">
		      <li class="client-block"> <a href="#" class="image"> <img src="/images/clients/1.png" alt="Image"/> <img src="images/clients/1.png" alt="Image"/> </a> </li>
		      <li class="client-block"> <a href="#" class="image"> <img src="/images/clients/2.png" alt="Image"/> <img src="images/clients/2.png" alt="Image"/> </a> </li>
		      <li class="client-block"> <a href="#" class="image"> <img src="/images/clients/3.png" alt="Image"/> <img src="images/clients/3.png" alt="Image"/> </a> </li>
		      <li class="client-block"> <a href="#" class="image"> <img src="/images/clients/4.png" alt="Image"/> <img src="images/clients/4.png" alt="Image"/> </a> </li>
		      <li class="client-block"> <a href="#" class="image"> <img src="/images/clients/5.png" alt="Image"/> <img src="images/clients/5.png" alt="Image"/> </a> </li>
		    </ul>
		  </div>
		</div>
	</section>
   );
};
export default  Clients;