<template>
    <b-container class="by-rows">
        <b-row>
            <b-col sm="9" offset="2">
                    <b-jumbotron class="jumbo">
                            <template #lead>
                                <div>
                                    <h2>PHQ-9 Questionnaire </h2>
                                    <h5>Over the last two weeks, how often have you been bothered by any of the following problems?</h5>
                                    <br>
                                    <b-form @submit="Onsubmit">
                                    <b-form-group id="input-group-1" label="Little interest or pleasure in doing things?" label-for="input-1">
                                        <b-form-select id=input-1 v-model="ans1" :options="opt" required @change="cal1(ans1)"></b-form-select>
                                    </b-form-group>
                                    <br>
                                    
                                    <b-form-group id="input-group-2" label="Feeling down, depressed, or hopeless?" label-for="input-2">
                                        <b-form-select id="input-2" v-model.number="ans2" :options="opt" required @change="cal2(ans2)"></b-form-select>
                                    </b-form-group>
                                    <br>
                                    
                                    <b-form-group id="input-group-3" label="Trouble falling or staying asleep, or sleeping too much?" label-for="input-3">
                                        <b-form-select id="input-3" v-model="ans3" :options="opt" required @change="cal3(ans3)" ></b-form-select>
                                    </b-form-group>
                                    <br>
                                    
                                    <b-form-group id="input-group-4" label="Feeling tired or having little energy?" label-for="input-4">
                                        <b-form-select id="input-4" v-model="ans4" :options="opt" required @change="cal4(ans4)"></b-form-select>
                                    </b-form-group>
                                    <br>

                                    <b-form-group id="input-group-5" label="Poor appetite or overeating?" label-for="input-5">
                                        <b-form-select id="input-5" v-model="ans5" :options="opt" required @change="cal5(ans5)"></b-form-select>
                                    </b-form-group>                     
                                    <br>

                                    <b-form-group id="input-group-6" label="Feeling bad about yourself - or that you are a failure or have let yourself or your family down?" label-for="input-6">
                                        <b-form-select id="input-6" v-model="ans6" :options="opt" required @change="cal6(ans6)"></b-form-select>
                                    </b-form-group>
                                    <br>

                                    <b-form-group id="input-group-7" label="Trouble concentrating on things, such as reading the newspaper or watching television?" label-for="input-7">
                                        <b-form-select id="input-7" v-model="ans7" :options="opt" required @change="cal7(ans7)"></b-form-select>
                                    </b-form-group>
                                    <br>

                                    <b-form-group id="input-group-8" label="Moving or speaking so slowly that other people could have noticed?Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?" label-for="input-8">
                                        <b-form-select id="input-8" v-model="ans8" :options="opt" required @change="cal8(ans8)"></b-form-select>
                                    </b-form-group>
                                    <br>

                                    <b-form-group id="input-group-9" label="Thoughts that you would be better off dead, or of hurting yourself in some way?" label-for="input-9">
                                        <b-form-select id="input-9" v-model="ans9" :options="opt" required @change="cal9(ans9)"></b-form-select>
                                    </b-form-group>
                                    <br>
                                    Total= {{score}}/27 
                                    <br>
                                    <div v-if="level==None" class="No">
                                        Depression Severity: {{level}}                    
                                    </div>
                                    <div v-if="level==Mild" class="Mi">
                                        Depression Severity: {{level}}                    
                                    </div>
                                    <div v-if="level==Moderate" class="Mo">
                                        Depression Severity: {{level}}                    
                                    </div>
                                    <div v-if="level==Severe" class="Se">
                                        Depression Severity: {{level}}                    
                                    </div>
                                    <div v-else class="Mo">
                                        Depression Severity: {{level}}                    
                                    </div>
                                    <hr class="my-4">
                                    
                                    <b-button 
                                    type="submit" 
                                    variant="primary"
                                    href="http://127.0.0.1:5000/"
                                    target="_blank"
                                    >
                                    Submit
                                    </b-button>
                                    
                                    </b-form>
                                </div>
                            </template>
                    </b-jumbotron>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    data(){
        return{
                ans1:'',
                ans2:'',
                ans3:'',
                ans4:'',
                ans5:'',
                ans6:'',
                ans7:'',
                ans8:'',
                ans9:'',
                opt:["Not at all","Several days","More than half the days","Nearly Everyday"],
                score:0,
                score1:0,
                score2:0,
                score3:0,
                score4:0,
                score5:0,
                score6:0,
                score7:0,
                score8:0,
                score9:0,
                level:''
    }
    },
    methods: {
        Onsubmit(event) {
            event.preventDefault()
            alert(JSON.stringify(this.form))
        },
        cal1(ans1){
            this.score1=''
            if (ans1==='Not at all'){
                this.score1= this.score1 + 0}
            else if (ans1==='Several days'){
                this.score1= this.score1 + 1}
            else if(ans1=== 'More than half the days'){
                this.score1=this.score1 + 2}
            else{    
                this.score1=this.score1 + 3}
                this.score= parseInt(this.score1)+ parseInt(this.score2)+ parseInt(this.score3)+ parseInt(this.score4)+ parseInt(this.score5)+ parseInt(this.score6)+ parseInt(this.score7)+ parseInt(this.score8)+ parseInt(this.score9)
                
            if  (this.score <= 4){
                this.level="None"
            }
            else if(this.score > 4 & this.score <=9){
                this.level="Mild"
            }
            else if(this.score > 9 & this.score <=14){
                this.level="Moderate"
            }
            else if(this.score > 14 & this.score <=19){
                this.level="Moderately Severe"
            }
            else{
                this.level="Severe"
            }
        },
        cal2(ans2){
            this.score2=''
            if (ans2==='Not at all'){
                this.score2= this.score2 + 0}
            else if (ans2==='Several days'){
                this.score2= this.score2 + 1}
            else if(ans2=== 'More than half the days'){
                this.score2=this.score2 + 2}
            else{    
                this.score2=this.score2 + 3}
                this.score= parseInt(this.score1)+ parseInt(this.score2)+ parseInt(this.score3)+ parseInt(this.score4)+ parseInt(this.score5)+ parseInt(this.score6)+ parseInt(this.score7)+ parseInt(this.score8)+ parseInt(this.score9)     
        
            if  (this.score <= 4){
                this.level="None"
            }
            else if(this.score > 4 & this.score <=9){
                this.level="Mild"
            }
            else if(this.score > 9 & this.score <=14){
                this.level="Moderate"
            }
            else if(this.score > 14 & this.score <=19){
                this.level="Moderately Severe"
            }
            else{
                this.level="Severe"
            }
        },
        cal3(ans3){
            this.score3=''
            if (ans3==='Not at all'){
                this.score3= this.score3 + 0}
            else if (ans3==='Several days'){
                this.score3= this.score3 + 1}
            else if(ans3=== 'More than half the days'){
                this.score3=this.score3 + 2}
            else{    
                this.score3=this.score3 + 3}
                this.score= parseInt(this.score1)+ parseInt(this.score2)+ parseInt(this.score3)+ parseInt(this.score4)+ parseInt(this.score5)+ parseInt(this.score6)+ parseInt(this.score7)+ parseInt(this.score8)+ parseInt(this.score9)

            if  (this.score <= 4){
                this.level="None"
            }
            else if(this.score > 4 & this.score <=9){
                this.level="Mild"
            }
            else if(this.score > 9 & this.score <=14){
                this.level="Moderate"
            }
            else if(this.score > 14 & this.score <=19){
                this.level="Moderately Severe"
            }
            else{
                this.level="Severe"
            }
        },
        cal4(ans4){
            this.score4=''
            if (ans4==='Not at all'){
                this.score4= this.score4 + 0}
            else if (ans4==='Several days'){
                this.score4= this.score4 + 1}
            else if(ans4=== 'More than half the days'){
                this.score4=this.score4 + 2}
            else{    
                this.score4=this.score4 + 3}
                this.score= parseInt(this.score1)+ parseInt(this.score2)+ parseInt(this.score3)+ parseInt(this.score4)+ parseInt(this.score5)+ parseInt(this.score6)+ parseInt(this.score7)+ parseInt(this.score8)+ parseInt(this.score9)      
        
            if  (this.score <= 4){
                this.level="None"
            }
            else if(this.score > 4 & this.score <=9){
                this.level="Mild"
            }
            else if(this.score > 9 & this.score <=14){
                this.level="Moderate"
            }
            else if(this.score > 14 & this.score <=19){
                this.level="Moderately Severe"
            }
            else{
                this.level="Severe"
            }
        },
        cal5(ans5){
            this.score5=''
            if (ans5==='Not at all'){
                this.score5= this.score5 + 0}
            else if (ans5==='Several days'){
                this.score5= this.score5 + 1}
            else if(ans5=== 'More than half the days'){
                this.score5=this.score5 + 2}
            else{    
                this.score5=this.score5 + 3}
                this.score= parseInt(this.score1)+ parseInt(this.score2)+ parseInt(this.score3)+ parseInt(this.score4)+ parseInt(this.score5)+ parseInt(this.score6)+ parseInt(this.score7)+ parseInt(this.score8)+ parseInt(this.score9)      
        
            if  (this.score <= 4){
                this.level="None"
            }
            else if(this.score > 4 & this.score <=9){
                this.level="Mild"
            }
            else if(this.score > 9 & this.score <=14){
                this.level="Moderate"
            }
            else if(this.score > 14 & this.score <=19){
                this.level="Moderately Severe"
            }
            else{
                this.level="Severe"
            }
        },
        cal6(ans6){
            this.score6=''
            if (ans6==='Not at all'){
                this.score6= this.score6 + 0}
            else if (ans6==='Several days'){
                this.score6= this.score6 + 1}
            else if(ans6=== 'More than half the days'){
                this.score6=this.score6 + 2}
            else{    
                this.score6=this.score6 + 3}
                this.score= parseInt(this.score1)+ parseInt(this.score2)+ parseInt(this.score3)+ parseInt(this.score4)+ parseInt(this.score5)+ parseInt(this.score6)+ parseInt(this.score7)+ parseInt(this.score8)+ parseInt(this.score9)      
        
            if  (this.score <= 4){
                this.level="None"
            }
            else if(this.score > 4 & this.score <=9){
                this.level="Mild"
            }
            else if(this.score > 9 & this.score <=14){
                this.level="Moderate"
            }
            else if(this.score > 14 & this.score <=19){
                this.level="Moderately Severe"
            }
            else{
                this.level="Severe"
            }
        },
        cal7(ans7){
            this.score7=''
            if (ans7==='Not at all'){
                this.score7= this.score7 + 0}
            else if (ans7==='Several days'){
                this.score7= this.score7 + 1}
            else if(ans7=== 'More than half the days'){
                this.score7=this.score7 + 2}
            else{    
                this.score7=this.score7 + 3}
                this.score= parseInt(this.score1)+ parseInt(this.score2)+ parseInt(this.score3)+ parseInt(this.score4)+ parseInt(this.score5)+ parseInt(this.score6)+ parseInt(this.score7)+ parseInt(this.score8)+ parseInt(this.score9)      
        
            if  (this.score <= 4){
                this.level="None"
            }
            else if(this.score > 4 & this.score <=9){
                this.level="Mild"
            }
            else if(this.score > 9 & this.score <=14){
                this.level="Moderate"
            }
            else if(this.score > 14 & this.score <=19){
                this.level="Moderately Severe"
            }
            else{
                this.level="Severe"
            }
        },
        cal8(ans8){
            this.score8=''
            if (ans8==='Not at all'){
                this.score8= this.score8 + 0}
            else if (ans8==='Several days'){
                this.score8= this.score8 + 1}
            else if(ans8=== 'More than half the days'){
                this.score8=this.score8 + 2}
            else{    
                this.score8=this.score8 + 3}
                this.score= parseInt(this.score1)+ parseInt(this.score2)+ parseInt(this.score3)+ parseInt(this.score4)+ parseInt(this.score5)+ parseInt(this.score6)+ parseInt(this.score7)+ parseInt(this.score8)+ parseInt(this.score9)      
        
            if  (this.score <= 4){
                this.level="None"
            }
            else if(this.score > 4 & this.score <=9){
                this.level="Mild"
            }
            else if(this.score > 9 & this.score <=14){
                this.level="Moderate"
            }
            else if(this.score > 14 & this.score <=19){
                this.level="Moderately Severe"
            }
            else{
                this.level="Severe"
            }
        },
        cal9(ans9){
            this.score9=''
            if (ans9==='Not at all'){
                this.score9= this.score9 + 0}
            else if (ans9==='Several days'){
                this.score9= this.score9 + 1}
            else if(ans9=== 'More than half the days'){
                this.score9=this.score9 + 2}
            else{    
                this.score9=this.score9 + 3}
                this.score= parseInt(this.score1)+ parseInt(this.score2)+ parseInt(this.score3)+ parseInt(this.score4)+ parseInt(this.score5)+ parseInt(this.score6)+ parseInt(this.score7)+ parseInt(this.score8)+ parseInt(this.score9)      
        
            if  (this.score <= 4){
                this.level="None"
            }
            else if(this.score > 4 & this.score <=9){
                this.level="Mild"
            }
            else if(this.score > 9 & this.score <=14){
                this.level="Moderate"
            }
            else if(this.score > 14 & this.score <=19){
                this.level="Moderately Severe"
            }
            else{
                this.level="Severe"
            }
        }

} 
}      
</script>
<style scoped>
.jumbo{
    background: inherit;
    position: relative;
    color: rgb(255, 255, 255);
    align-content: center;
    margin-right: 50px;
    margin-top: 30px;
    border-top: 1px solid #ffffff6e;
    border-left: 1px solid #ffffff6e;
    border-right: 1px solid #ffffff6e;
    border-bottom: 1px solid #ffffff6e;
    border-radius: 15px
    

}
.btn.btn-primary{
    background-color: darkcyan;
    text-align:center;
    padding-top:20px;
    padding-right: 20px;
    padding-left:20px;
    border-radius: 15px;
    color: white;
}
.custom-select{  
}

.lead{
    margin-right: 50px;
    margin-left: 10px;
    text-align: center;
}

.Mi{
    color:khaki;
}



</style>
