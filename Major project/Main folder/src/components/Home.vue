<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      
      
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      fade
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        img-src="https://mllttampvua3.i.optimole.com/voBJnH4.frTF~2a8f6/w:auto/h:auto/q:90/https://www.torontoemployment.law/wp-content/uploads/2020/01/duty-to-accomodate-mental-health-illness.jpg"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://taylorinstitute.ucalgary.ca/sites/default/files/styles/ucws_hero_cta_desktop/public/2020-11/TAY-Mental-Health-Wellness-Hero-Banner.jpeg?h=59ecec5c&itok=jGbyvZNe">
        <caption class="cap">
            
        </caption>
        
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://global-uploads.webflow.com/5e2d970a86f417102b21abd2/5f574025df209dc23d305303_3.png"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide img-src="https://www.sleepyhollowanimalhospital.com/wp-content/uploads/2020/09/mental-health-and-suicide-awareness-in-the-veterinary-profession-banner-1500x600.jpg">
      </b-carousel-slide>
    </b-carousel>
          <div class="content">
            <h1 class="head1" align="center"><b>What is Depression?</b></h1>
              <div class="para">
                <p align="justify">
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Depression is classified as a mood disorder. It may be described as feelings of sadness, loss, or anger that interfere with a person’s everyday activities. Depression is becoming major mental illness faced by humans of all ages and genders. The work culture, stressful life, emotional imbalance, family disturbances and social life is leading to depression.
                    People experience depression in different ways. It may interfere with your daily work, resulting in lost time and lower productivity.
                    <br>
                        
                    <br>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; It’s important to realize that feeling down at times is a normal part of life.
                    Sad and upsetting events happen to everyone. But, if you’re feeling down or hopeless on a regular basis, you could be dealing with depression.
                    <br>
                    <br>
                </p>
              </div>
            <b-button type="Primary" class="lets" href="/PHQ">Let's Test</b-button><br> <br>
            <h2 class="head1" align="center"><b>Everything You Want to Know About Depression</b></h2>
                  <div class="gallery">
                    <a target="_blank" href="/Depression">
                    <img src="https://image.freepik.com/free-vector/man-depression-concept-sad-depressed-guy-storm-cloud-rain_198278-363.jpg" alt="Depressed person" width="350" height="200">
                    </a>
                    <div class="desc">What is Depression?</div>
                  </div>

                  <div class ="gallery">
                    <a target="_blank" href="/Symptoms">
                    <img src="http://dailydiarynews.com/wp-content/uploads/2020/06/ff.png" alt="Symptoms" width="350" height="200">
                    </a>
                    <div class="desc">Symtoms of Depression</div>
                  </div>

                  <div class ="gallery">
                    <a target="_blank" href="/Causes">
                    <img src="https://image.freepik.com/free-vector/8-common-causes-depression-infographics_115990-222.jpg" alt="Causes" width="350" height="200">
                    </a>
                    <div class="desc">Causes of Depression</div>
                  </div>
                  <br> 
                  <div class ="gallery">
                    <a target="_blank" href="/Types">
                    <img src="https://img.freepik.com/free-vector/different-mental-disorders-pack_23-2148676881.jpg?size=626&ext=jpg&ga=GA1.2.1030426669.1618444800" alt="Types" width="350" height="200">
                    </a>
                    <div class="desc">Types of Depression</div>
                  </div>
                  <div class ="gallery">
                    <a target="_blank" href="/Treatment">
                    <img src="https://media.istockphoto.com/vectors/online-medical-or-psychological-counselling-vector-id1262408577?k=6&m=1262408577&s=612x612&w=0&h=Qweq1_FEd7hXX71lbIbYuzacZtskiRGvE9GzJtvwtbY=" alt="Types" width="350" height="200">
                    </a>
                    <div class="desc">Consultation</div>
                  </div>
                  <div class ="gallery">
                    <a target="_blank" href="/Prevention">
                    <img src="https://medungle.com/wp-content/uploads/2020/10/Different-Factors-of-Depression-1-1024x614.png" alt="Types" width="350" height="200">
                    </a>
                    <div class="desc">Preventing Depression</div>
                  </div>

      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>
<style>
.carousel .carousel-item {
  image-orientation: from-image;
}

.carousel-item img {
    position:relative;
    object-fit:scale-down;
    top: 0;
    max-zoom: 0px;
    image-resolution:unset;
}
.content{
  
  padding-top: 40px;
  margin-left:inherit;
  margin-right:inherit;
  object-fit: scale-down;
  -webkit-margin-collapse: inherit;
  color:#33516e;
  text-emphasis:thistle;

  -webkit-text-size-adjust: 100%;
}
*, *:before, *:after{
  box-sizing: inherit;
}

*{
  -webkit-font-smoothing: antialiased;
}

.cap{
  color: azure;
  font-size: 30px;
}
.cap-4{
  text-align: center;
  color: azure;
  font-size: 30px;
  text-align:left;
  padding-bottom:490px;
  margin-left: 560px;
}

.para{
  font-size:21px;
  font-size-adjust:inherit;
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
}

div.gallery {
  margin: 50px;
  border: 1px solid #ccc;
  border:inherit;
  float: left;
}


div.gallery img {
  width: 400px;
  height: 250px;
}

div.desc {
  padding: 15px;
  font-size: 19px;
  text-align: center;
  color: rgb(255, 255, 255);
}

.lets{
  background: inherit;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  color: rgb(255, 255, 255);
  border: 2px solid #2a839e;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  font-size: 25px;
}

</style>

