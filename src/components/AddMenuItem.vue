<template>
    <div class="add-item">
        <div class="container">
            <form @submit.prevent="addMenuItem">
                <div class="input-group mb-3">
                    <select class="form-select" id="inputGroupSelect01" @change="onChange($event)">
                        <option selected>Choose...</option>
                        <option value="getränkekarte">GETRÄNKEKARTE</option>
                        <option value="speisekarte">SPEISE KARTE</option>
                    </select>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Sub Category</span>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" v-model="subcategory">
                </div>
                <div class="input-group mb-3" v-for="(itm,index) in items" :key="index">
                    <span class="input-group-text" id="basic-addon1">Item Name</span>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" v-model="items[index].name">
                    <input type="text" class="form-control" placeholder="Description" aria-label="Username" aria-describedby="basic-addon1" v-model="items[index].description">
                    <input type="text" class="form-control" placeholder="Price" aria-label="Username" aria-describedby="basic-addon1" v-model="items[index].price">
                </div>
                <div class="input-group mb-3" >
                    <span class="input-group-text" id="basic-addon1">Item Name</span>
                    <input type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1"  @keydown.space="addItem" v-model="another.name">
                    <input type="text" class="form-control" placeholder="Description" aria-label="Description" aria-describedby="basic-addon1"  @keydown.space="addItem" v-model="another.description">
                    <input type="text" class="form-control" placeholder="Price" aria-label="Price" aria-describedby="basic-addon1"  @keydown.space="addItem" v-model="another.price">
                </div>
                <p v-if="feedback">{{ feedback}}</p>
                <button type="submit" class="btn ">Add</button>
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
            subcategory:null,
            items: [],
            another:{
                name:'',
                description: '',
                price: '',
             },
            slug: null,
            category: null,
            feedback: null
        }
    },
     methods: {
        onChange(event) {
           this.category = event.target.value
           console.log(this.category)
        },
        addMenuItem(){
                if(this.subcategory){
                this.slug = slugify(this.subcategory, {
                    replacemen: '-',
                    remove: /[$*_+~.();"!\-:@]/g,
                    lower: true
                })
                    db.collection('menu').add({
                        category: this.category,
                        subcategory: this.subcategory,
                        items: this.items,
                        slug: this.slug,
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
                this.items.push({ name: this.another.name, description: this.another.description, price:this.another.price});
                this.another.name = null;
                this.another.description = null;
                this.another.price = null;
                this.feedback = null
            }else{
                this.feedback = 'You must enter ingredients'
            }
        }

    },
}
</script>