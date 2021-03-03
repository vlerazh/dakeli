<template>
    <div class="speisekarte">
        <div id="speisekarte" >
        <div class="container">
          <div class="section-title text-center">
            <h2>Speise karte</h2>
          </div>
          <div class="row" v-for="(itemS,index) in showSpeisekarteItems" :key="index">
              <div class="menu-section">
                <h2 class="menu-section-title" type="button" data-toggle="collapse" :data-target="'#'+itemS.slug" aria-expanded="false" :aria-controls="itemS.slug">{{itemS.subcategory}}</h2>
                <div class="edit-div">
                  <router-link :to="{ name:'EditMenuItem' , params: { item_slug: itemS.slug}}">
                    <i class="material-icons">edit</i>
                  </router-link>
                   <a @click="deleteSubcategory(itemS.id)"><i class="material-icons">delete</i></a>
                </div>
                  <div  class="collapse" :id="itemS.slug">
                    <div class="row menu-items" v-if="hasVolume == true"> 
                        <div class="offset-md-8  col-md-4  offset-sm-8  col-sm-4">
                            <div class="col-md-9 col-sm-6 col-6 menu-item-price text-right">1/2 Port</div>
                              <div class="col-md-3 col-sm-6 col-6 menu-item-price text-right">Port</div>   
                            </div>      
                    </div>
                    <div class="row menu-item" v-for="(item,index) in itemS.items" :key="index">
                      <div class="col-md-8 col-sm-8 col-8">
                        <div class="menu-item-name">{{item.name}}</div>     
                          <div class="menu-item-description">{{item.description}}</div>      
                      </div>
                      <div class="col-md-4 col-sm-4 col-4">
                          <div class="row">
                            <div class="col-md-9 col-sm-6 col-6 menu-item-price text-right" >{{item.volume}}</div>
                            <div class="col-md-3 col-sm-6 col-6 menu-item-price text-right">{{item.price}}</div>
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
    name:'Speisekarte',
    data () {
        return{
            menuItems: [],
            volume: null,
        }
    },
    created(){
        db.collection('menu').orderBy('date','asc').get()
        .then(snapshot => {
        snapshot.forEach(doc =>{
            let menuItem = doc.data()
            menuItem.id = doc.id
            this.menuItems.push(menuItem)
          })
        })
    },
    computed:{
        showSpeisekarteItems(){
            return this.menuItems.filter(item => item.category === 'speisekarte')
        },
        hasVolume(){
          for(var i=0 ; i<this.menuItems.length;i++){
            if(this.menuItems[i].volume !== null){
              console.log("eshte true " + i)
              return true;

            }
          }
           console.log('jast if')
           return false
        }
    },
    methods:{
       deleteSubcategory(id){
            db.collection('menu').doc(id).delete()
            .then(()=>{
                this.menuItems = this.menuItems.filter(item =>{
                return item.id != id
                })
            })
        }
    }

}
</script>