import Image from "next/image";
import Link from "next/link";

const FunFact = () => {
    return (
<section class="fun-fact-section">
		<div class="auto-container">
			<div class="fact-counter">
				<div class="row">
				
					<div class="counter-block col-lg-3 col-sm-6 wow fadeInUp">
						<div class="inner">
							<div class="content">
								<i class="icon flaticon-oldkare-old-people"></i>
								<div class="count-box"><span class="count-text" data-speed="3000" data-stop="950">0</span>+</div>
								<h6 class="counter-title">Completed Cases</h6>
							</div>
						</div>
					</div>
				
					<div class="counter-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="200ms">
						<div class="inner">
							<div class="content">
								<i class="icon flaticon-oldkare-old-woman"></i>
								<div class="count-box"><span class="count-text" data-speed="3000" data-stop="500">0</span>+</div>
								<h6 class="counter-title">Nursing Staff</h6>
							</div>
						</div>
					</div>
				
					<div class="counter-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="300ms">
						<div class="inner">
							<div class="content">
								<i class="icon flaticon-oldkare-medication"></i>
								<div class="count-box"><span class="count-text" data-speed="3000" data-stop="200">0</span>k+</div>
								<h6 class="counter-title">Senior Doctors</h6>
							</div>
						</div>
					</div>
			
					<div class="counter-block col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="400ms">
						<div class="inner">
							<div class="content">
								<i class="icon flaticon-oldkare-love"></i>
								<div class="count-box"><span class="count-text" data-speed="3000" data-stop="900">0</span>+</div>
								<h6 class="counter-title">Happy Couples</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

);
};

export default FunFact;