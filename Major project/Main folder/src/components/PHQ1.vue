<template>
    <b-container class="by-rows">
        <b-row>
            <b-col sm="9" offset="2">
                    <b-jumbotron class="jumbo">
                            <template #lead>
                                <div>
                                    <h3>PHQ-9 Quessionnaire</h3>
                                    <br>
                                    <b-form @submit= "Onsubmit">
                                    <b-form-group label="Little interest or pleasure in doing things?" v-slot="{ ariaDescribedby }">
                                        <b-form-radio-group
                                            id="btn-radios-1"
                                            v-model="ans1"
                                            :options="opt"
                                            :aria-describedby="ariaDescribedby"
                                            name="radio-btn-stacked"
                                            buttons
                                            stacked
                                            required
                                        ></b-form-radio-group>
                                    </b-form-group>

                                    <b-form-group label="Feeling down, depressed, or hopeless?" v-slot="{ ariaDescribedby }">
                                        <b-form-radio-group
                                            id="btn-radios-2"
                                            v-model="ans2"
                                            :options="opt"
                                            :aria-describedby="ariaDescribedby"
                                            name="radio-btn-stacked"
                                            buttons
                                            stacked
                                        ></b-form-radio-group>
                                    </b-form-group> 

                                    <b-form-group label="Trouble falling or staying asleep, or sleeping too much?" v-slot="{ ariaDescribedby }">
                                        <b-form-radio-group
                                            id="btn-radios-3"
                                            v-model="ans3"
                                            :options="opt"
                                            :aria-describedby="ariaDescribedby"
                                            name="radio-btn-stacked"
                                            buttons
                                            stacked
                                        ></b-form-radio-group>
                                    </b-form-group>

                                    <b-form-group label="Feeling tired or having little energy?" v-slot="{ ariaDescribedby }">
                                        <b-form-radio-group
                                            id="btn-radios-4"
                                            v-model="ans4"
                                            :options="opt"
                                            :aria-describedby="ariaDescribedby"
                                            name="radio-btn-stacked"
                                            buttons
                                            stacked
                                        ></b-form-radio-group>
                                    </b-form-group>

                                    <b-form-group label="Poor appetite or overeating?" v-slot="{ ariaDescribedby }">
                                        <b-form-radio-group
                                            id="btn-radios-5"
                                            v-model="ans5"
                                            :options="opt"
                                            :aria-describedby="ariaDescribedby"
                                            name="radio-btn-stacked"
                                            buttons
                                            stacked
                                        ></b-form-radio-group>
                                    </b-form-group>

                                    <b-form-group label="Feeling bad about yourself - or that you are a failure or have let yourself or your family down?" v-slot="{ ariaDescribedby }">
                                        <b-form-radio-group
                                            id="btn-radios-6"
                                            v-model="ans6"
                                            :options="opt"
                                            :aria-describedby="ariaDescribedby"
                                            name="radio-btn-stacked"
                                            buttons
                                            stacked
                                        ></b-form-radio-group>
                                    </b-form-group>

                                    <b-form-group label="Trouble concentrating on things, such as reading the newspaper or watching television?" v-slot="{ ariaDescribedby }">
                                        <b-form-radio-group
                                            id="btn-radios-7"
                                            v-model="ans7"
                                            :options="opt"
                                            :aria-describedby="ariaDescribedby"
                                            name="radio-btn-stacked"
                                            buttons
                                            stacked
                                        ></b-form-radio-group>
                                    </b-form-group>

                                        <b-form-group label="Moving or speaking so slowly that other people could have noticed?Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?" v-slot="{ ariaDescribedby }">
                                        <b-form-radio-group
                                            id="btn-radios-8"
                                            v-model="ans8"
                                            :options="opt"
                                            :aria-describedby="ariaDescribedby"
                                            name="radio-btn-stacked"
                                            buttons
                                            stacked
                                        ></b-form-radio-group>
                                    </b-form-group>

                                        <b-form-group label="Thoughts that you would be better off dead, or of hurting yourself in some way?" v-slot="{ ariaDescribedby }">
                                        <b-form-radio-group
                                            id="btn-radios-9"
                                            v-model="ans9"
                                            :options="opt"
                                            :aria-describedby="ariaDescribedby"
                                            name="radio-btn-stacked"
                                            buttons
                                            stacked
                                        ></b-form-radio-group>
                                    </b-form-group> 
                                    <hr class="my-4">
                                    
                                    <b-button 
                                    type="submit" 
                                    variant="primary"
                                    href="/Camera"
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

<script >
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
        opt:[
            {text: 'Not at all', value: 'radio1'},
            {text: 'Several days', value:  'radio2'},
            {text: 'More than half the days', value: 'radio3'},
            {text: 'Nearly Everyday', value: 'radio4'}
            ],
        selectedIndex:null,
        count:null
    }
    },
    methods: {
        Onsubmit(event) {
            event.preventDefault()
            alert(JSON.stringify(this.form))
        },
        calculate(count){
            if (count==='Not at all')
                this.score= this.score + 0
            else if (count==='Several days')
                this.score= this.score + 1
            else if(count=== 'More than half the days')
                this.score=this.score + 2
            else    
                this.score=this.score + 3
        }   
    }
}       
</script>
<style scoped>
.jumbo{
    background: linear-gradient(#63a1b1 , #467c8a);
    position: relative;
    color: rgb(255, 255, 255);
    align-content: center;
    margin-right: 30px;
    margin-top: 30px;
}
.btn-btn-primary{

}
.custom-select{  
}

</style>
