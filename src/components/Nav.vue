<template>
    <div class="nav">
        <nav id="menu" class="navbar navbar-default navbar-fixed-top">
            <div class="container">    
                <ul class="nav navbar-nav ">
                    <li class="getra active">Getränkekarte</li>
                    <li class="speise">Speise Karte</li>
                    <li>
                        <router-link :to="{name : 'AddMenuItem'}">Add Menu Item</router-link>
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
	background-color:#000;
	border-color: rgba(231, 231, 231, 0);
}
#menu.navbar-default .navbar-nav{
	width: 100%;
	text-align: center;
}
#menu.navbar-default .navbar-nav > li  {
	text-transform: uppercase;
	color: #eee;
	font-weight: 400;
	font-size: 16px;
	padding: 5px 0;
	border: 2px solid transparent;
	letter-spacing: 0.5px;
	margin: 0 40px 0 40px;
	cursor: pointer;
	float: none !important;
	display: inline-block;
}
#menu.navbar-default .navbar-nav > li:hover {
	color: #ff800e;
}

.active{
	color: #c8742c !important;
}
</style>