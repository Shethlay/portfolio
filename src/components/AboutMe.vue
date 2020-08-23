<template>
<div>
    <div class="about" id="about">

        <div class="row row1">
            <div class="col-xs-12 col-sm-12 col-md-3 col-xl-3">About Me</div>
            <div class="col-md-9 col-xl-9"></div>
        </div>
            
        <div class="row">
            <div class="col-md-3 col-xl-3"></div>
            <div class="col-xs-3 col-sm-3 col-md-9 col-xl-9"><hr></div>
        </div>
            
        <div class="row showcase">
            <div class="col-xs-12 col-sm-12 col-md-3 col-xl-3">Get to know about me</div>
            <div class="col-md-9 col-xl-9"></div>
        </div>

        <div class="row row3">

            <div class="col-xs-12 col-sm-12 col-md-4 col-xl-4"><img src="123.jpg"  width="430px" class="photo img-fluid"></div>
            <div class="col-xs-12 col-sm-12 col-md-8 col-xl-8 ">
                
                <div class="row text-danger who">Who am i?</div>
                <div class="row intro">I am lay sheth, IT engineering student.</div>
                <div class="row content">Currently I am pursing my B-Tech in Information Technology at Charotar University of science and Technology. I like to do coding. I want to become full stack Developer. I am seeking for a internship. </div>
                
                <hr class="hr1">

                <div class="row info">
                   
                    <div class="col-xs-12 col-sm-12 col-md-6 col-xl-6">
                        <div class="row"><b>Name:</b>lay sheth</div>
                        <div class="row"><b>Age:</b>19</div>
                    </div>
                    
                    <div class="col-xs-12 col-sm-12 col-md-6 col-xl-6">
                        <div class="row"><b>Email:</b><a href="mailto:laysheth58@gmail.com">laysheth58@gmail.com</a></div>
                        <div class="row"><b>From:</b>India,Gujarat</div>
                    </div>
                </div>
                
                <div class="row CV">
                    
                    <div class="col-xs-2 col-sm-2 col-md-2 col-xl-2">
                        <button type="button" class="btn btn-danger" @click="onClick">Resume</button>
                    </div>
                    
                    <div class="col-xs-3 col-sm-3 col-md-3 col-xl-2">
                        <a href="#project"> <button type="button" class="btn btn-light"><div class="aa">Work</div></button></a>
                    </div>
                
                </div>
            </div>
        </div>
    </div>
</div>  
</template>


<script>
export default {
    name:'AboutMe',
    data(){
        return{
            url:'http://localhost:5000/resume'
        }
    },
    methods:{
        forceFileDownload(response){
            const url = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download','layResume.pdf')
            document.body.appendChild(link)
            link.click()
        },
        onClick(){
            this.axios({
                method:'post',
                url: this.url,
                responseType: 'arraybuffer'
            })
            .then(response => {
                this.forceFileDownload(response)
            }).catch((err)=> console.log(err))
        }
    }
}
</script>

<style scoped >
.about{
    width: 100%;
    
}
.row1{
    font-size: 40px;
    font-weight: bolder;
    padding-left: 6%;
    padding-top: 40px;
}

.about_me{
    font-size: 40px;
    font-weight: bolder;
    padding-left: 6%;
}
.know_me{
    padding-left: 6%;
}


.row{
    width: inherit;
}

.row3{
    padding-top: 55px;
    margin-bottom: 80px;
    
}

.col-md-4{
    padding-left: 6%;
}

.photo{
    border: 2px solid black ;
    border-radius: 5px;
    max-width: 100%; 
    height: auto;
    margin: auto;
}
.aa{
    text-decoration: none;
    color: black;
}
.showcase{
    padding-left: 6%;
}
.who{
    padding-left: 6.47%;
    font-size: 25px;
    font-weight: 500;
    margin: 25px auto 8px auto;
}

.intro{
    padding-left: 6.47%;
    font-size: 28px;
    line-height: 1.5;
    font-weight: 700;
    margin-bottom: 15px;
    margin: auto;
}

.content{
     padding-left: 6.47%;
     line-height: 1.8;
     font-size: 18px;
     margin: auto;
     
}

.info{
     padding-left: 6.47%;
     line-height: 2.0;
     font-size: 18px;
     margin-top: 50px;
     margin: auto;

}

b{
    padding-right:10px ;
}

.hr1{
    margin-top:50px ;  
}

.btn{
    border-radius: 25px;
}

.CV{
    margin-top: 50px;
    padding-left:4.525% ;
}
</style>



