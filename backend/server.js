const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const os = require('os');
const osu = require('os-utils');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const permutations = (arr) => {
  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
  return arr.reduce(
    (acc, item, i) =>
      acc.concat(
        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
          item,
          ...val,
        ])
      ),
    []
  );
};

let reqCnt = 0
app.get("/", (req, res) => {
  reqCnt += 1;
  console.log(`resCnt ${reqCnt}`);
  console.log(os.cpus());
  console.log(os.totalmem());
  console.log(os.freemem());
  osu.cpuUsage(function(v){
    console.log( 'CPU Usage (%): ' + v );
  });
  permutations([1, 2, 3, 4, 5, 6, 7, 8]);
  // permutations([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  // permutations([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  // res.send(`<h1>API is running...<h1>  <h2>Counter: ${reqCnt}<h2>`)
  
  res.send(`
    
		<div class="preloader">
			<div class="sk-spinner sk-spinner-rotating-plane"></div>
		</div>

		<nav class="navbar navbar-default navbar-fixed-top templatemo-nav" role="navigation">
			<div class="container">
				<div class="navbar-header">
					<button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
						<span class="icon icon-bar"></span>
						<span class="icon icon-bar"></span>
						<span class="icon icon-bar"></span>
					</button>
					<a href="#" class="navbar-brand">SIMPLE</a>
				</div>
				<div class="collapse navbar-collapse">
					<ul class="nav navbar-nav navbar-right text-uppercase">
						<li><a href="#home">Home</a></li>
						<li><a href="#feature">Features</a></li>
						<li><a href="#pricing">Pricing</a></li>
						<li><a href="#download">Download</a></li>
						<li><a href="#contact">Contact</a></li>
					</ul>
				</div>
			</div>
		</nav>

    

		<section id="home">
			<div class="overlay">
				<div class="container">

        <h2>Counter: ${reqCnt}<h2>

					<div class="row">
						<div class="col-md-1"></div>
						<div class="col-md-10 wow fadeIn" data-wow-delay="0.3s">
							<h1 class="text-upper">SIMPLE Landing Page</h1>
							<p class="white">A fully Responsive, Clean Design landing Page.<br />
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
								magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
							</p>
						</div>
						<div class="col-md-1"></div>
					</div>
				</div>
			</div>
		</section>

		<section id="divider">
			<div class="container">
				<div class="row">
					<div class="col-md-4 wow fadeInUp templatemo-box" data-wow-delay="0.3s">
						<i class="fa fa-laptop"></i>
						<h3 class="text-uppercase">RESPONSIVE LAYOUT</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. </p>
					</div>
					<div class="col-md-4 wow fadeInUp templatemo-box" data-wow-delay="0.3s">
						<i class="fa fa-twitter"></i>
						<h3 class="text-uppercase">BOOTSTRAP 3.3.4</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. </p>
					</div>
					<div class="col-md-4 wow fadeInUp templatemo-box" data-wow-delay="0.3s">
						<i class="fa fa-font"></i>
						<h3 class="text-uppercase">GOOGLE FONT</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. </p>
					</div>
				</div>
			</div>
		</section>

		<section id="feature">
			<div class="container">
				<div class="row">
					<div class="col-md-6 wow fadeInLeft" data-wow-delay="0.6s">
						<h2 class="text-uppercase">Our Software Features</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua.</p>
						<p><span><i class="fa fa-mobile"></i></span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						<p><i class="fa fa-code"></i>Quis autem velis reprehenderit et quis voluptate velit esse quam.</p>
					</div>
					<div class="col-md-6 wow fadeInRight" data-wow-delay="0.6s">
						
					</div>
				</div>
			</div>
		</section>

		<section id="feature1">
			<div class="container">
				<div class="row">
					<div class="col-md-6 wow fadeInUp" data-wow-delay="0.6s">
					
					</div>
					<div class="col-md-6 wow fadeInUp" data-wow-delay="0.6s">
						<h2 class="text-uppercase">More of Your Software</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua.</p>
						<p><span><i class="fa fa-mobile"></i></span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						<p><i class="fa fa-code"></i>Quis autem velis reprehenderit et quis voluptate velit esse quam.</p>
					</div>
				</div>
			</div>
		</section>
		<!-- end feature1 -->

		<!-- start pricing -->
		<section id="pricing">
			<div class="container">
				<div class="row">
					<div class="col-md-12 wow bounceIn">
						<h2 class="text-uppercase">Our Pricing</h2>
					</div>
					<div class="col-md-4 wow fadeIn" data-wow-delay="0.6s">
						<div class="pricing text-uppercase">
							<div class="pricing-title">
								<h4>Standard</h4>
								<p>$4</p>
								<small class="text-lowercase">monthly</small>
							</div>
							<ul>
								<li>6 GB Space</li>
								<li>600 GB Bandwidth</li>
								<li>60 More Themes</li>
								<li>Lifetime Support</li>
							</ul>
							<button class="btn btn-primary text-uppercase">Sign up</button>
						</div>
					</div>
					<div class="col-md-4 wow fadeIn" data-wow-delay="0.6s">
						<div class="pricing active text-uppercase">
							<div class="pricing-title">
								<h4>Premium</h4>
								<p>$10</p>
								<small class="text-lowercase">monthly</small>
							</div>
							<ul>
								<li>15 GB space</li>
								<li>1,500 GB Bandwidth</li>
								<li>150 More Themes</li>
								<li>Lifetime Support</li>
							</ul>
							<button class="btn btn-primary text-uppercase">Sign up</button>
						</div>
					</div>
					<div class="col-md-4 wow fadeIn" data-wow-delay="0.6s">
						<div class="pricing text-uppercase">
							<div class="pricing-title">
								<h4>Professional</h4>
								<p>$80</p>
								<small class="text-lowercase">monthly</small>
							</div>
							<ul>
								<li>35 GB space</li>
								<li>3,500 GB bandwidth</li>
								<li>350 more themes</li>
								<li>Lifetime Support</li>
							</ul>
							<button class="btn btn-primary text-uppercase">Sign Up</button>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section id="download">
			<div class="container">
				<div class="row">
					<div class="col-md-6 wow fadeInLeft" data-wow-delay="0.6s">
						<h2 class="text-uppercase">Download now</h2>
					</div>
				</div>
			</div>
		</section>

		<section id="contact">
			<div class="overlay">
				<div class="container">
					<div class="row">
						<div class="col-md-6 wow fadeInUp" data-wow-delay="0.6s">
							<h2 class="text-uppercase">Contact Us</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. </p>
							<address>
								<p><i class="fa fa-map-marker"></i>123 State ST, Maine, United States</p>
								<p><i class="fa fa-phone"></i> 123-123-1234 or 123-321-3212</p>
								<p><i class="fa fa-envelope-o"></i> mail@company.com</p>
							</address>
						</div>
						<div class="col-md-6 wow fadeInUp" data-wow-delay="0.6s">
							<div class="contact-form">
								<form action="#" method="post">
									<div class="col-md-6">
										<input type="text" class="form-control" placeholder="Name">
									</div>
									<div class="col-md-6">
										<input type="email" class="form-control" placeholder="Email">
									</div>
									<div class="col-md-12">
										<input type="text" class="form-control" placeholder="Subject">
									</div>
									<div class="col-md-12">
										<textarea class="form-control" placeholder="Message" rows="4"></textarea>
									</div>
									<div class="col-md-12">
										<input type="submit" class="form-control text-uppercase" value="Send">
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<footer>
			<div class="container">
				<div class="row">
					<p>Copyright © 2084 Your Company Name</p>
				</div>
			</div>
		</footer>


  `);
})

app.post("/", (req, res) => {
  reqCnt += 1;
  console.log(`resCnt ${reqCnt}`);
  console.log(os.cpus());
  console.log(os.totalmem());
  console.log(os.freemem());
  osu.cpuUsage(function(v){
    console.log( 'CPU Usage (%): ' + v );
  });
  permutations([1, 2, 3, 4, 5, 6, 7, 8]);
  // permutations([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  // permutations([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  // res.send(`<h1>API is running...<h1>  <h2>Counter: ${reqCnt}<h2>`)
  
  res.send(`
    
		<div class="preloader">
			<div class="sk-spinner sk-spinner-rotating-plane"></div>
		</div>

		<nav class="navbar navbar-default navbar-fixed-top templatemo-nav" role="navigation">
			<div class="container">
				<div class="navbar-header">
					<button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
						<span class="icon icon-bar"></span>
						<span class="icon icon-bar"></span>
						<span class="icon icon-bar"></span>
					</button>
					<a href="#" class="navbar-brand">SIMPLE</a>
				</div>
				<div class="collapse navbar-collapse">
					<ul class="nav navbar-nav navbar-right text-uppercase">
						<li><a href="#home">Home</a></li>
						<li><a href="#feature">Features</a></li>
						<li><a href="#pricing">Pricing</a></li>
						<li><a href="#download">Download</a></li>
						<li><a href="#contact">Contact</a></li>
					</ul>
				</div>
			</div>
		</nav>

    

		<section id="home">
			<div class="overlay">
				<div class="container">

        <h2>Counter: ${reqCnt}<h2>

					<div class="row">
						<div class="col-md-1"></div>
						<div class="col-md-10 wow fadeIn" data-wow-delay="0.3s">
							<h1 class="text-upper">SIMPLE Landing Page</h1>
							<p class="white">A fully Responsive, Clean Design landing Page.<br />
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
								magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
							</p>
						</div>
						<div class="col-md-1"></div>
					</div>
				</div>
			</div>
		</section>

		<section id="divider">
			<div class="container">
				<div class="row">
					<div class="col-md-4 wow fadeInUp templatemo-box" data-wow-delay="0.3s">
						<i class="fa fa-laptop"></i>
						<h3 class="text-uppercase">RESPONSIVE LAYOUT</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. </p>
					</div>
					<div class="col-md-4 wow fadeInUp templatemo-box" data-wow-delay="0.3s">
						<i class="fa fa-twitter"></i>
						<h3 class="text-uppercase">BOOTSTRAP 3.3.4</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. </p>
					</div>
					<div class="col-md-4 wow fadeInUp templatemo-box" data-wow-delay="0.3s">
						<i class="fa fa-font"></i>
						<h3 class="text-uppercase">GOOGLE FONT</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. </p>
					</div>
				</div>
			</div>
		</section>

		<section id="feature">
			<div class="container">
				<div class="row">
					<div class="col-md-6 wow fadeInLeft" data-wow-delay="0.6s">
						<h2 class="text-uppercase">Our Software Features</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua.</p>
						<p><span><i class="fa fa-mobile"></i></span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						<p><i class="fa fa-code"></i>Quis autem velis reprehenderit et quis voluptate velit esse quam.</p>
					</div>
					<div class="col-md-6 wow fadeInRight" data-wow-delay="0.6s">
						
					</div>
				</div>
			</div>
		</section>

		<section id="feature1">
			<div class="container">
				<div class="row">
					<div class="col-md-6 wow fadeInUp" data-wow-delay="0.6s">
					
					</div>
					<div class="col-md-6 wow fadeInUp" data-wow-delay="0.6s">
						<h2 class="text-uppercase">More of Your Software</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua.</p>
						<p><span><i class="fa fa-mobile"></i></span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						<p><i class="fa fa-code"></i>Quis autem velis reprehenderit et quis voluptate velit esse quam.</p>
					</div>
				</div>
			</div>
		</section>
		<!-- end feature1 -->

		<!-- start pricing -->
		<section id="pricing">
			<div class="container">
				<div class="row">
					<div class="col-md-12 wow bounceIn">
						<h2 class="text-uppercase">Our Pricing</h2>
					</div>
					<div class="col-md-4 wow fadeIn" data-wow-delay="0.6s">
						<div class="pricing text-uppercase">
							<div class="pricing-title">
								<h4>Standard</h4>
								<p>$4</p>
								<small class="text-lowercase">monthly</small>
							</div>
							<ul>
								<li>6 GB Space</li>
								<li>600 GB Bandwidth</li>
								<li>60 More Themes</li>
								<li>Lifetime Support</li>
							</ul>
							<button class="btn btn-primary text-uppercase">Sign up</button>
						</div>
					</div>
					<div class="col-md-4 wow fadeIn" data-wow-delay="0.6s">
						<div class="pricing active text-uppercase">
							<div class="pricing-title">
								<h4>Premium</h4>
								<p>$10</p>
								<small class="text-lowercase">monthly</small>
							</div>
							<ul>
								<li>15 GB space</li>
								<li>1,500 GB Bandwidth</li>
								<li>150 More Themes</li>
								<li>Lifetime Support</li>
							</ul>
							<button class="btn btn-primary text-uppercase">Sign up</button>
						</div>
					</div>
					<div class="col-md-4 wow fadeIn" data-wow-delay="0.6s">
						<div class="pricing text-uppercase">
							<div class="pricing-title">
								<h4>Professional</h4>
								<p>$80</p>
								<small class="text-lowercase">monthly</small>
							</div>
							<ul>
								<li>35 GB space</li>
								<li>3,500 GB bandwidth</li>
								<li>350 more themes</li>
								<li>Lifetime Support</li>
							</ul>
							<button class="btn btn-primary text-uppercase">Sign Up</button>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section id="download">
			<div class="container">
				<div class="row">
					<div class="col-md-6 wow fadeInLeft" data-wow-delay="0.6s">
						<h2 class="text-uppercase">Download now</h2>
					</div>
				</div>
			</div>
		</section>

		<section id="contact">
			<div class="overlay">
				<div class="container">
					<div class="row">
						<div class="col-md-6 wow fadeInUp" data-wow-delay="0.6s">
							<h2 class="text-uppercase">Contact Us</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
								dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. </p>
							<address>
								<p><i class="fa fa-map-marker"></i>123 State ST, Maine, United States</p>
								<p><i class="fa fa-phone"></i> 123-123-1234 or 123-321-3212</p>
								<p><i class="fa fa-envelope-o"></i> mail@company.com</p>
							</address>
						</div>
						<div class="col-md-6 wow fadeInUp" data-wow-delay="0.6s">
							<div class="contact-form">
								<form action="#" method="post">
									<div class="col-md-6">
										<input type="text" class="form-control" placeholder="Name">
									</div>
									<div class="col-md-6">
										<input type="email" class="form-control" placeholder="Email">
									</div>
									<div class="col-md-12">
										<input type="text" class="form-control" placeholder="Subject">
									</div>
									<div class="col-md-12">
										<textarea class="form-control" placeholder="Message" rows="4"></textarea>
									</div>
									<div class="col-md-12">
										<input type="submit" class="form-control text-uppercase" value="Send">
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<footer>
			<div class="container">
				<div class="row">
					<p>Copyright © 2084 Your Company Name</p>
				</div>
			</div>
		</footer>


  `);
})

PORT = 5000
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})