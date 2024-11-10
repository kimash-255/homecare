import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header class="main-header header-style-one">
	
		<div class="header-top">
			<div class="auto-container">
				<div class="inner-container">
					<div class="top-left">
						
						<ul class="list-style-one">
							<li><i class="fa fa-map-marker-alt"></i> 1901 Thornridge Cir. Shiloh, Hawaii 81063</li>
							<li><i class="far fa-clock"></i> Mon - Fri: 09.00am - 10.00 pm</li>
							<li><i class="fa fa-headset"></i>Call us : <a href="tel:12345678910">123-456-78910</a></li>
						</ul>
					</div>
					<div class="top-right">
						<ul class="social-icon-one">
							<li><a href="#"><span class="fab fa-twitter"></span></a></li>
							<li><a href="#"><span class="fab fa-facebook-square"></span></a></li>
							<li><a href="#"><span class="fab fa-pinterest-p"></span></a></li>
							<li><a href="#"><span class="fab fa-instagram"></span></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	
		  
		<div class="header-lower">
			<div class="auto-container">
			
				<div class="main-box">
					<div class="logo-box">
						<div class="logo"><a href="index.html"><img src="images/logo-2.png" alt="" title="Tronis"/></a></div>
					</div>

	
					<div class="nav-outer">    
						<nav class="nav main-menu">
							<ul class="navigation">
								<li class="current dropdown"><a href="index.html">Home</a>
									<ul>
										<li><a href="index.html">Home page 01</a></li>
										<li><a href="index-2.html">Home page 02</a></li>
									</ul>
								</li>
								<li class="dropdown"><a href="#">Pages</a>
									<ul>
										<li><a href="page-about.html">About</a></li>
										<li><a href="page-contact.html">Contact</a></li>
										<li class="dropdown"><a href="#">Team</a>
											<ul>
												<li><a href="page-team.html">Team Grid</a></li>
												<li><a href="page-team-details.html">Team Details</a></li>
											</ul>
										</li>
										<li class="dropdown"><a href="#">Shop</a>
											<ul>
												<li><a href="shop-products.html">Products</a></li>
												<li><a href="shop-products-sidebar.html">Products with Sidebar</a></li>
												<li><a href="shop-product-details.html">Product Details</a></li>
												<li><a href="shop-cart.html">Cart</a></li>
												<li><a href="shop-checkout.html">Checkout</a></li>
											</ul>
										</li>
										<li><a href="page-testimonial.html">Testimonial</a></li>
										<li><a href="page-faq.html">Faq</a></li>
										<li><a href="page-404.html">404</a></li>
									</ul>
								</li>
								<li class="dropdown"><a href="#">Services</a>
									<ul>
										<li><a href="page-services.html">Services</a></li>
										<li><a href="page-service-details.html">Services Details</a></li>
									</ul>
								</li>
								<li class="dropdown"><a href="#">Cases</a>
									<ul>
										<li><a href="page-cases.html">Case Grid</a></li>
										<li><a href="page-case-details.html">Case Details</a></li>
									</ul>
								</li>
								<li class="dropdown"><a href="#">Blog</a>
									<ul>
										<li><a href="news-grid.html">News Grid</a></li>
										<li><a href="news-details.html">News Details</a></li>
									</ul>
								</li>
							</ul>
						</nav>
						
						
						<div class="outer-box">
							<span class="divider"></span>
	
							<a href="#" class="ui-btn cart-btn">
								<i class="icon lnr lnr-icon-cart"></i>
								<span class="count">0</span>
							</a>
							
					
							<button class="ui-btn mx-0 search-btn">
								<i class="icon lnr lnr-icon-search"></i>
							</button>
							
							
							<div class="mobile-nav-toggler"><span class="icon lnr-icon-bars"></span></div>
						</div>
					</div>

				</div>
			</div>
		</div>

	
		<div class="mobile-menu">
			<div class="menu-backdrop"></div>
		
		
			<nav class="menu-box">
				<div class="upper-box">
					<div class="nav-logo"><a href="index.html"><img src="images/logo.png" alt=""/></a></div>
					<div class="close-btn"><i class="icon fa fa-times"></i></div>
				</div>
		
				<ul class="navigation clearfix">
				
				</ul>
				<ul class="contact-list-one">
					<li>
					
						<div class="contact-info-box">
							<i class="icon lnr-icon-phone-handset"></i>
							<span class="title">Call Now</span>
							<a href="tel:+92880098670">+92 (8800) - 98670</a>
						</div>
					</li>
					<li>
						
						<div class="contact-info-box">
							<span class="icon lnr-icon-envelope1"></span>
							<span class="title">Send Email</span>
							<a href="/cdn-cgi/l/email-protection#0b636e677b4b6864667b6a657225686466"><span class="__cf_email__" data-cfemail="6d0508011d2d0e02001d0c0314430e0200">[email&#160;protected]</span></a>
						</div>
					</li>
					<li>
						
						<div class="contact-info-box">
							<span class="icon lnr-icon-clock"></span>
							<span class="title">Send Email</span>
							Mon - Sat 8:00 - 6:30, Sunday - CLOSED
						</div>
					</li>
				</ul>
		
		
				<ul class="social-links">
					<li><a href="#"><i class="fab fa-twitter"></i></a></li>
					<li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
					<li><a href="#"><i class="fab fa-pinterest"></i></a></li>
					<li><a href="#"><i class="fab fa-instagram"></i></a></li>
				</ul>
			</nav>
		</div>

		<div class="search-popup">
			<span class="search-back-drop"></span>
			<button class="close-search"><span class="fa fa-times"></span></button>
		
			<div class="search-inner">
				<form method="post" action="index.html">
					<div class="form-group">
						<input type="search" name="search-field" value="" placeholder="Search..." required=""/>
						<button type="submit"><i class="fa fa-search"></i></button>
					</div>
				</form>
			</div>
		</div>


		
		<div class="sticky-header">
			<div class="auto-container">
				<div class="inner-container">
				
					<div class="logo">
						<a href="index.html"><img src="images/logo-2.png" alt=""/></a>
					</div>
		
					
					<div class="nav-outer">
					
						<nav class="main-menu">
							<div class="navbar-collapse show collapse clearfix">
								<ul class="navigation clearfix">
									
								</ul>
							</div>
						</nav>
		
						
						<div class="mobile-nav-toggler"><span class="icon lnr-icon-bars"></span></div>
					</div>
				</div>
			</div>
		</div>
	</header>
  );
};

export default Header;
