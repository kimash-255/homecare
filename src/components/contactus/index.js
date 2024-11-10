import Image from "next/image";
import Link from "next/link";

const Contact =() => {
    return (
<section class="contact-section-home1 pt-0 pb-0">
		<div class="auto-container">
			<div class="row">
			
				<div class="form-column col-lg-6 col-md-12 col-sm-12">
					<div class="inner-column mb-md-50">
					
						<div class="contact-form-home1 wow fadeInLeft">
							<div class="sec-title">
								<span class="sub-title">Contact Now</span>
								<h2>Get in touch with us</h2>
							</div>
							
							<form id="contact_form" name="contact_form" class="" action="includes/sendmail.php" method="post">
								<div class="row">
									<div class="col-sm-6 form-group">
										<div class="">
											<input name="form_name" class="form-control required" type="text" placeholder="Enter Name"/>
										</div>
									</div>
									<div class="col-sm-6 form-group">
										<div class="">
											<input name="form_email" class="form-control required email" type="email" placeholder="Enter Email"/>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-sm-6 form-group">
										<div class="">
											<input name="form_subject" class="form-control required" type="text" placeholder="Enter Subject"/>
										</div>
									</div>
									<div class="col-sm-6 form-group">
										<div class="">
											<input name="form_phone" class="form-control" type="text" placeholder="Enter Phone"/>
										</div>
									</div>
								</div>
								<div class=" form-group">
									<textarea name="form_message" class="form-control required" rows="7" placeholder="Enter Message"></textarea>
								</div>
								<div class="">
									<input name="form_botcheck" class="form-control" type="hidden" value="" />
									<button type="submit" class="theme-btn btn-style-one mb-2 mb-sm-0" data-loading-text="Please wait..."><span class="btn-title">Send message</span></button>
									<button type="reset" class="theme-btn btn-style-one"><span class="btn-title">Reset</span></button>
								</div>
							</form>
						</div>
					
					</div>
				</div>

			
				<div class="image-column col-lg-6 col-md-12">
					<div class="inner-column">
						<figure class="image">
							<iframe  class="map w-100"  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
						</figure>
					</div>
				</div>
			</div>
		</div>
	</section>
    );
};
export default  Contact;