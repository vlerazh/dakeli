<template>
  <div id="app">
    <Nav />
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
export default {
  name: 'App',
  components:{
    Nav,
  }
}
</script>

<style>
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
	color: #b3742c;
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
a {
	text-decoration: none;
	color: #8eb640;
}
a:hover, a:focus {
	text-decoration: none;
	color: #222;
}
ul, ol {
	list-style: none;
}
ul, ol {
	padding: 0;
	-webkit-padding: 0;
	-moz-padding: 0;
}
</style>
