<template>
<div>
    <br>
    <br>
    <b-container class="by-rows" >
        <b-row>
            <b-col sm="3" >
                <div class="about">
                    <h2>Vision</h2>
                    <div align="left">
                    <ul>
                        <li>To make awareness among society about depression and its treatment</li>
                    </ul>
                    </div>
                </div>
            </b-col>
            <b-col sm="3" offset="1">
                <div class="about">
                    <h2 >Mission</h2>
                    <div align="left">
                    <ul>
                        <li>To make people understand their depression level so as to help them take actions based on it</li>
                    </ul>
                    </div>
                </div>
            </b-col>
            <b-col sm="3" offset="1">
                <div class="about">
                    <h2 >Goal</h2>
                    <div align="left">
                    <ul>
                        <li>To promote the best way to diagnose one’s depression level</li>
                    </ul>
                    </div>
                </div>
            </b-col>
        </b-row>
    </b-container>
    <br>



        <br><br>
        <h2 class="head1" align="left">How it works</h2>
        <div class="para" >   
            <p align="left" class="d">So the user has to follow the steps given below: </p>
                <ul>   
                    <li><b>Step 1:</b> Create an account using general details<br></li>
                    <li><b>Step 2:</b> Click on Lets test button present in the nav bar<br></li>
                    <li><b>Step 3:</b> Answer the following questionnaire(This questionnaire is based on past 14 days of users experience)<br></li>
                    <li><b>Step 4:</b> The user will have to read a paragraph while keeping their camera and mic on(This is done to capture the required features)<br></li>
                    <li><b>Step 5:</b> Results will be displayed <br></li>
                </ul>
        </div>
        
        <br>

        <h2 class="head1" align="left">What are we</h2>
        <div class ="para">
            <p>Depression Classifier is a non-profitable project which focuses on helping people to discover what is depression and from which depression phase they are going through so that they could work upon it based on the severity. We classify the depression into 5 categories through a test namely: none, mild, moderate, moderately severe and severe. Additionally we provide basic knowledge regarding depression which helps people understand it in a better way.</p>
        </div>

        <br>

        <h2 class="head1" align="left">Who are we</h2>
        <div class="para">
            <p>We are group of four students working together making an attempt to help people fight depression by applying our knowledge so as to contribute our bit to the society.</p>
        </div>
        <br>

    </div>    
</template>

<style scoped>
    .para{
            border: 1px;
            padding: 10px;
            width:fit-content;
            height:fit-content;
            text-align: justify;
    }
    .d{
       
    }
    .about{
        border: 4px solid #2a839e;
        padding:20px;
        border-top-right-radius: 25px;
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;
        border-bottom-right-radius: 25px;
    }
    .head1{
        padding-left:250px;
    }
</style>