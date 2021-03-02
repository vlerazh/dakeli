<template>
    <div class="nav">
        <nav id="menu" class="navbar navbar-default navbar-fixed-top">
            <div class="container">    
                <ul class="nav navbar-nav ">
                    <li class="getra active">
                        <router-link :to="{ name: 'Index'}">
                            Getränkekarte
                        </router-link>
                    </li>
                     <li class="speise">
                        <router-link :to="{ name: 'Speisekarte'}"> 
                            Speise Karte
                         </router-link>
                    </li>
                    <li>
                    <router-link :to="{name : 'AddMenuItem'}">
                            Add Menu Item
                    </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name:'Nav',
    data(){
        return{

        }
    }
}
</script>

<style>
#menu {
    width: 100%;
	padding: 20px;
	transition: all 0.8s;
}
#menu.navbar-default {
	background-color:#8d6e63;
	border-color: rgba(231, 231, 231, 0);
}
#menu.navbar-default .navbar-nav{
	width: 100%;
	text-align: center;
    display: inline-block;
}

#menu.navbar-default .navbar-nav li, #menu.navbar-default .navbar-nav a  {
	text-transform: uppercase;
	color: #eee;
	font-weight: 400;
	font-size: 16px;
	padding: 5px 0;
	border: 2px solid transparent;
	letter-spacing: 0.5px;
	margin: 0 30px;
	cursor: pointer;
	float: none !important;
	display: inline-block;
}
#menu.navbar-default .navbar-nav  li:hover, #menu.navbar-default .navbar-nav a:hover {
	text-decoration: underline;
    color: #eee;
}
a:focus{
	text-decoration: underline;
}
@media only screen and (max-width: 992px){
	#menu.navbar-default .navbar-nav li, #menu.navbar-default .navbar-nav a {
		margin: 0 5px ;
	}
}
@media only screen and (max-width: 350px) {
	#menu.navbar-default .navbar-nav li, #menu.navbar-default .navbar-nav a  {
		margin: 0 3px;
	}
}
</style>