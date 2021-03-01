<template>
  <div class="index">
     <div id="getränkekarte" >
        <div class="container">
          <div class="section-title text-center">
            <h2>Getränkekarte</h2>
          </div>
          <div class="row" v-for="(itemG,index) in showGetränkekarteItems" :key="index">
              <div class="menu-section">
                <h2 class="menu-section-title" type="button" data-toggle="collapse" :data-target="'#'+itemG.subcategory" aria-expanded="false" :aria-controls="itemG.subcategory">{{itemG.subcategory}}</h2>
                <div class="edit-div">
                  <router-link :to="{ name:'EditMenuItem' , params: { item_slug: itemG.slug}}">
                    <i class="material-icons">edit</i>
                  </router-link>
                </div>
                  <div :id="itemG.subcategory">
                    <div class="row menu-item" v-for="(i,index) in itemG.items" :key="index">
                      <div class="col-md-5 col-xs-5">
                        <div class="menu-item-name">{{i.name}}</div>     
                        <div class="menu-item-description">{{i.description}}</div>      
                      </div>
                      <div class="col-md-3 col-xs-3" >
                          <div class="menu-item-name" v-if="i.percentage">{{i.percentage}}%</div>
                      </div>
                      <div class="col-md-4 col-xs-4">
                        <div class="row">
                          <div class="col-md-9  col-xs-6 menu-item-price text-right">{{i.volume}}</div>
                          <div class="col-md-3  col-xs-6 menu-item-price text-right">{{i.price}}</div>
                        </div>
                        <div class="row">
                          <div class="col-md-9  col-xs-6 menu-item-price text-right">{{i.secondVolume}}</div>
                          <div class="col-md-3  col-xs-6 menu-item-price text-right">{{i.secondPrice}}</div>
                        </div>
                      </div>      
                    </div>
                  <div >
                </div>
              </div>
              </div>
          </div>
        </div>
     </div>
     <div id="speisekarte" >
        <div class="container">
          <div class="section-title text-center">
            <h2>Speisekarte</h2>
          </div>
          <div class="row" v-for="(itemS,index) in showSpeisekarteItems" :key="index">
              <div class="menu-section">
                <h2 class="menu-section-title" type="button" data-toggle="collapse" :data-target="'#'+itemS.subcategory" aria-expanded="false" :aria-controls="itemS.subcategory">{{itemS.subcategory}}</h2>
                <div class="edit-div">
                  <router-link :to="{ name:'EditMenuItem' , params: { item_slug: itemS.slug}}">
                    <i class="material-icons">edit</i>
                  </router-link>
                </div>
                  <div  :id="itemS.subcategory">
                    <div class="row menu-item" v-for="(item,index) in itemS.items" :key="index">
                      <div class="col-md-8 col-xs-8">
                        <div class="menu-item-name">{{item.name}}</div>     
                          <div class="menu-item-description">{{item.description}}</div>      
                      </div>
                      <div class="col-md-4 col-xs-4">
                        <div class="col-md-12 col-xs-12 menu-item-price text-right">{{item.price}}</div>
                      </div>      
                    </div>
                  <div >
                </div>
              </div>
              </div>
          </div>
        </div>
     </div>
  </div>
</template>

<script>
import db from '@/firebase/init'
export default {
  name: 'Index',
  data () {
    return{
      menuItems: [],
    }
  },
  created(){
    db.collection('menu').get()
    .then(snapshot => {
      snapshot.forEach(doc =>{
        let menuItem = doc.data()
        menuItem.id = doc.id
        this.menuItems.push(menuItem)
      })
    })
  },
  computed:{
    showGetränkekarteItems(){
      return this.menuItems.filter(item => item.category === 'getränkekarte')
    },
    showSpeisekarteItems(){
      return this.menuItems.filter(item => item.category === 'speisekarte')
    }
  }
}
</script>


<style >
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700');
#getränkekarte , #mese{
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
}
.menu-section-title {
	font-size: 28px;
	display: block;
	font-weight: 400;
	color: #c4742c;
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
	margin-bottom: -36px;
}

.menu-items .menu-item-price {
	font-size: 13px;
	color: #cc7d2c;
}
.edit-div{
  height: 50px;
}
.edit-div i{
  margin-left: 80%;
}
</style>
