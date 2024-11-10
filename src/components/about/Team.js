import Image from "next/image";
import Link from "next/link";

const Team = () => {
   return  (

<section class="team-section-three">
		<div class="auto-container">
			<div class="sec-title text-center">
				<span class="sub-title">Our Expert Team</span>
				<h2>Meet our nursing staff</h2>
			</div>

			<div class="row">
			
				<div class="team-block-three col-lg-3 col-sm-6 wow fadeInUp">
					<div class="inner-box">
						<figure class="image"><a href="page-team-details.html"><img src="images/resource/team1-2.jpg" alt=""/></a></figure> 
						<h4 class="name"><a href="page-team-details.html">Wade Warren</a></h4>
						<span class="designation">Nursing Staff</span>
						<div class="social-links">
							<a href="#"><i class="fab fa-facebook-f"></i></a>
							<a href="#"><i class="fab fa-twitter"></i></a>
							<a href="#"><i class="fab fa-instagram"></i></a>
						</div>
					</div>
				</div>

			
				<div class="team-block-three col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="200ms">
					<div class="inner-box">
						<figure class="image"><a href="page-team-details.html"><img src="images/resource/team1-3.jpg" alt=""/></a></figure>
						<h4 class="name"><a href="page-team-details.html">Theresa Webb</a></h4>
						<span class="designation">Nursing Staff</span>
						<div class="social-links">
							<a href="#"><i class="fab fa-facebook-f"></i></a>
							<a href="#"><i class="fab fa-twitter"></i></a>
							<a href="#"><i class="fab fa-instagram"></i></a>
						</div>
					</div>
				</div>

				<div class="team-block-three col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
					<div class="inner-box">
						<figure class="image"><a href="page-team-details.html"><img src="images/resource/team1-4.jpg" alt=""/></a></figure>
						<h4 class="name"><a href="page-team-details.html">Robert Fox</a></h4>
						<span class="designation">Nursing Staff</span>
						<div class="social-links">
							<a href="#"><i class="fab fa-facebook-f"></i></a>
							<a href="#"><i class="fab fa-twitter"></i></a>
							<a href="#"><i class="fab fa-instagram"></i></a>
						</div>
					</div>
				</div>

				
				<div class="team-block-three col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="400ms">
					<div class="inner-box">
						<figure class="image"><a href="page-team-details.html"><img src="images/resource/team1-1.jpg" alt=""/></a></figure>
						<h4 class="name"><a href="page-team-details.html">Savannah Nguyen</a></h4>
						<span class="designation">Nursing Staff</span>
						<div class="social-links">
							<a href="#"><i class="fab fa-facebook-f"></i></a>
							<a href="#"><i class="fab fa-twitter"></i></a>
							<a href="#"><i class="fab fa-instagram"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

   );
};
export default Team;