<template>
  <div class="index">
     <div id="getränkekarte" >
        <div class="container">
          <div class="section-title text-center">
            <h2>Getränkekarte</h2>
          </div>
          <div class="row" v-for="(itemG,index) in showGetränkekarteItems" :key="index">
              <div class="menu-section">
                <h2 class="menu-section-title" type="button" data-toggle="collapse" :data-target="'#'+itemG.slug" aria-expanded="false" :aria-controls="itemG.slug">{{itemG.subcategory}}</h2>
                <div class="edit-div">
                  <router-link :to="{ name:'EditMenuItem' , params: { item_slug: itemG.slug}}">
                    <i class="material-icons">edit</i>
                  </router-link>
                </div>
                  <div class="collapse" :id="itemG.slug">
                    <div class="row menu-item" v-for="(i,index) in itemG.items" :key="index">
                      <div :class="i.percentage ? 'col-md-5 col-sm-5 col-6':'col-md-8 col-sm-8 col-8'">
                        <div class="menu-item-name">{{i.name}}</div>     
                        <div class="menu-item-description">{{i.description}}</div>      
                      </div>
                      <div class="col-md-3 col-sm-3 col-2"  v-if="i.percentage">
                          <div class="menu-item-name">{{i.percentage}}%</div>
                      </div>
                      <div class="col-md-4 col-sm-4 col-4">
                        <div class="row">
                          <div class="col-md-9 col-sm-6 col-6 menu-item-price text-right">{{i.volume}}</div>
                          <div class="col-md-3 col-sm-6 col-6 menu-item-price text-right">{{i.price}}</div>
                        </div>
                        <div class="row">
                          <div class="col-md-9 col-sm-6 col-6 menu-item-price text-right">{{i.secondVolume}}</div>
                          <div class="col-md-3 col-sm-6 col-6 menu-item-price text-right">{{i.secondPrice}}</div>
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
  }
}
</script>
