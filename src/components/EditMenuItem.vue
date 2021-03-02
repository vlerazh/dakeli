<template>
    <div class="add-item" v-if="menuItem">
        <div class="container">
               <div class="section-title text-center">
                <h2>Edit menu item </h2>
            </div>
            <form v-on:keydown.enter.prevent @submit.prevent="editMenuItem">
                <div class="input-group mb-3">
                   <input type="text" class="form-control" disabled v-model="menuItem.category">
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Sub Category" aria-label="Username" aria-describedby="basic-addon1" v-model="menuItem.subcategory">
                </div>
                <div class="input-group mb-3" v-for="(itm,index) in menuItem.items" :key="index">
                    <span class="item-index">Item {{index}}</span>
                    <input type="text" class="form-control p" placeholder="Sub Category Percentage" aria-label="Username" aria-describedby="basic-addon1" v-model="menuItem.items[index].percentage">
                    <input type="text" class="form-control" placeholder="Sub Category Item Name" aria-label="Username" aria-describedby="basic-addon1" v-model="menuItem.items[index].name">
                    <input type="text" class="form-control" placeholder="Sub Category Item Description" aria-label="Username" aria-describedby="basic-addon1" v-model="menuItem.items[index].description">
                    <input type="text" class="form-control" placeholder="Sub Category Item Volume" aria-label="Username" aria-describedby="basic-addon1" v-model="menuItem.items[index].volume">
                    <input type="text" class="form-control" placeholder="Sub Category Item Price" aria-label="Username" aria-describedby="basic-addon1" v-model="menuItem.items[index].price">
                    <input type="text" class="form-control" placeholder="Item Second Volume" aria-label="Username" aria-describedby="basic-addon1" v-model="menuItem.items[index].secondVolume">
                    <input type="text" class="form-control" placeholder="Item Second Price" aria-label="Username" aria-describedby="basic-addon1" v-model="menuItem.items[index].secondPrice">
                    <i class="material-icons delete" @click="deleteIng(itm)">delete</i>
                </div>
                <div class="input-group mb-3" >
                    <input type="text" class="form-control p" placeholder="Sub Category Percentage" aria-label="Username" aria-describedby="basic-addon1" @keydown.enter="addItem" v-model="another.percentage">
                    <input type="text" class="form-control" placeholder="Sub Category Item Name" aria-label="Name" aria-describedby="basic-addon1"  @keydown.enter="addItem" v-model="another.name">
                    <input type="text" class="form-control" placeholder="Sub Category Item Description" aria-label="Description" aria-describedby="basic-addon1"  @keydown.enter="addItem" v-model="another.description">
                    <input type="text" class="form-control" placeholder="Sub Category Item Volume" aria-label="Price" aria-describedby="basic-addon1"  @keydown.enter="addItem" v-model="another.volume">
                    <input type="text" class="form-control" placeholder="Sub Category Item Price" aria-label="Price" aria-describedby="basic-addon1"  @keydown.enter="addItem" v-model="another.price">
                    <input type="text" class="form-control" placeholder="Item Second Volume" aria-label="Price" aria-describedby="basic-addon1"  @keydown.enter="addItem" v-model="another.secondVolume">
                    <input type="text" class="form-control" placeholder="Item Second Price" aria-label="Price" aria-describedby="basic-addon1"  @keydown.enter="addItem" v-model="another.secondPrice">
                </div>
                <p v-if="feedback">{{ feedback}}</p>
                <button type="submit" class="btn button">Edit</button>
            </form>
        </div>
    </div>
</template>

<script>
import db from '@/firebase/init'

import slugify from 'slugify'
export default {
    name:'AddMenuItem',
    data(){
        return{
            menuItem: null,
            another:{
                name:'',
                description: '',
                price: '',
                volume: '',
                secondPrice: '',
                secondVolume: '',
             },
            feedback: null
        }
    },
    created(){
        let ref= db.collection('menu').where('slug','==',this.$route.params.item_slug)
        ref.get().then(snapshot => {
            snapshot.forEach(doc => {
                this.menuItem = doc.data()
                this.menuItem.id = doc.id
            })
        }).catch(err =>{
            console.log(err)
        })
    },
     methods: {
        editMenuItem(){
            if(this.menuItem.subcategory){
                     db.collection('menu').doc(this.menuItem.id).update({
                        subcategory: this.menuItem.subcategory,
                        items: this.menuItem.items,
                        slug: this.menuItem.slug
                    }).then(() =>{
                        this.$router.push({name: 'Index' })
                    }).catch(err =>{
                        console.log(err)
                    })
                this.feedback = null
                
            }else{
                this.feedback = 'You must enter all data'
            }
        },
        addItem(){
            if(this.another.name){
                this.menuItem.items.push({ name: this.another.name, description: this.another.description, price:this.another.price,volume:this.another.volume, secondPrice:this.another.secondPrice, secondVolume:this.another.secondVolume});
                this.another.name = null;
                this.another.description = null;
                this.another.price = null;
                this.feedback = null
            }else{
                this.feedback = 'You must enter ingredients'
            }
        },
         deleteIng(itm){
            this.items = this.items.filter(item =>{
                return item != itm
            })
        },

    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700');
.add-item{
    margin: 3% 0;
}
form{
    text-align: center;
    margin: 5% 0;
}
.button{
    border: 1px solid #8d6e63;
    background: #8d6e63;
    color: white;
    font-weight: 600;
    font-size:20px ;
    text-transform: uppercase;
    width: 150px;
    margin-bottom: 5%;
}
.delete{
    cursor: pointer;
}
.form-control{
    width: 40% !important;
    margin-bottom: 1%;
}
.item-index{
    width: 100%;
    font-size: 25px;
    margin-bottom: 2%;
    color: #8d6e63;
}
</style>