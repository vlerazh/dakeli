<template>
  <div id="app">
    <Nav />
	<div id="banner">
		<img src="./assets/logo.png" alt="dakeli">
	</div>
    <router-view/>
	<Footer />
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components:{
    Nav,
	Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700');
@import url('https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700');
body, html {
	font-family: 'Open Sans', serif;
	text-rendering: optimizeLegibility !important;
	-webkit-font-smoothing: antialiased !important;
	color: #777;
	font-weight: 400;
	width: 100% !important;
	height: 100% !important;
}
h1, h2, h3, h4 {
	font-family: 'Raleway', sans-serif;
}
h2 {
	font-weight: 400;
	font-size: 38px;
	color: #8d6e63;
	text-transform: uppercase;
	position: relative;
	margin-top: 10px;
	margin-bottom: 15px;
	padding-bottom: 20px;
	margin-top: 3px;
}
h2::after {
	position: absolute;
	content: "";
	background: #141a32;
	height: 2px;
	width: 70px;
	bottom: 0;
	margin-left: -35px;
	left: 50%;
}
h3 {
	font-size: 24px;
	font-weight: 400;
	color: #333;
}
h4 {
	font-size: 24px;
	text-transform: uppercase;
	font-weight: 400;
	color: #333;
}
h5 {
	text-transform: uppercase;
	font-weight: 700;
	line-height: 20px;
}
p {
	font-size: 15px;
}
p.intro {
	margin: 12px 0 0;
	line-height: 24px;
}
ul, ol {
	list-style: none;
}
ul, ol {
	padding: 0;
	-webkit-padding: 0;
	-moz-padding: 0;
}
#banner{
	float: left;
	width:100%;
	display: block;
	background-image: url('./assets/dakeli_banner_bg.jpg');
	background-size: cover;
	background-repeat: no-repeat;
	height: 400px;
	background-position: center center;
}
#banner img{
	display: block;
	margin: 145px auto;
	width: 400px;
}

#getränkekarte , #speisekarte{
	padding: 50px 0 0px 0;
	display: block;
	clear: both;
}
.section-title {
	margin-bottom: 40px;
	display: block;

}
.section-title h2{
	font-weight: 600;
}
.menu-section hr {
	margin: 0 auto;
}
.menu-section {
	margin: 0 20px 5px;
  width: 100%;
  position: relative;
}
.menu-section-title {
	font-size: 28px;
	display: block;
	font-weight: 400;
	color: #7A7979;
	margin: 20px 0;
	text-align: center;
	cursor: pointer;
}
.menu-item {
	margin: 15px 0;
	font-size: 18px;
}
.menu-item-name {
	font-weight: bold;
	font-size: 16px;
	color: #444;
	margin-bottom: 10px;
}
.menu-item-description {
	font-size: 13px;
	/* width: 85%; */
}
.menu-item-price {
	float: left;
	font-weight: 400;
	color: #555;
	/* padding: 0; */
	margin: 0;
	font-size: 15px;
}
.menu-items {
	margin: 0;
	font-size: 10px;
}

.menu-items .menu-item-price {
	font-size: 13px;
	color: #cc7d2c;
}
.edit-div{
  height: 50px;
  position: absolute;
  right: 0;
  top: 15px;
}

.edit-div a{
  margin: 0 10px;
  color: #8d6e63;
}

@media only screen and (max-width: 768px) {
	#footer i.fa{
		display: block;
	}
	#banner{
		height: 250px;
	}
	#banner img{
		margin: 69px auto;
	}
	.edit-div{
		top: 60px;
		}
}
@media only screen and (max-width: 600px) {
	header .intro-text {
		padding-top: 18px;
		padding-bottom: 6px;
		text-align: center;
	}
	#footer .info{
		margin: 3% 0;
	}
	#banner img{
		width: 350px;
	}
}
@media only screen and (max-width: 450px) {
	.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,
	.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,
	.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,
	.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,
	.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,
	.col-xl-auto{
		padding-right: 5px !important;
		padding-left: 5px !important;
	}
	#banner img{
		width: 300px;
	}
	.edit-div a{
		margin: 0;
	}
	.edit-div{
		top: 30px;
	}
}

@media only screen and (max-width: 350px) {
	h2{
		font-size: 30px;
	}
	#banner{
		height: 200px;
	}
	#banner img{
		width: 250px;
	}

}
@media only screen and (max-width: 308px){
	h2{
		font-size: 28px;
	}
}
</style>
