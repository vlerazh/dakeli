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
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" v-model="items[index]">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Item Name</span>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"  @keydown.space="addItem" v-model="another">
                </div>
                <button type="button" class="btn btn-outline-primary">Primary</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name:'AddMenuItem',
    data(){
        return{
            subcategory:null,
            items: [],
            another:null,
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
                this.slug = slugify(this.name, {
                    replacemen: '-',
                    remove: /[$*_+~.();"!\-:@]/g,
                    lower: true
                })
                db.collection(this.category).add({
                    subcategory: this.name,
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
            if(this.another){
                this.ingredients.push(this.another);
                this.another = null;
                this.feedback = null
            }else{
                this.feedback = 'You must enter ingredients'
            }
        }
    }
}
</script>