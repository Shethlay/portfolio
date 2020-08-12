<template>
    <div id="contact">
        <div class="row ">
            <div class="row row1">
            <div class="col-xs-12 col-sm-12 col-md-3 col-xl-3">Contact Me</div>
            <div class="col-md-9 col-xl-9"></div>
        </div>
            
        <div class="row">
            <div class="col-md-3 col-xl-3"></div>
            <div class="col-xs-3 col-sm-3 col-md-9 col-xl-9"><hr></div>
        </div>
            
        <div class="row showcase">
            <div class="col-xs-12 col-sm-12 col-md-3 col-xl-3">Feel Free To Get In Touch With Me</div>
            <div class="col-md-9 col-xl-9"></div>
        </div>
           <div class="row row2">

        <!--Grid column-->
        <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" @submit="onSubmit">

                <!--Grid row-->
                <div class="row row3">

                    <!--Grid column-->
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control" placeholder="Name" v-model="fname">
                        </div>
                    </div>
                    <!--Grid column-->

                    <!--Grid column-->
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control" placeholder="E-mail" v-model="femail">
                        </div>
                    </div>
                    <!--Grid column-->

                </div>
                <!--Grid row-->

                <!--Grid row-->
                <div class="row row3">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control" placeholder="Subject" v-model="fsubject">
                        </div>
                    </div>
                </div>
                <!--Grid row-->

                <!--Grid row-->
                <div class="row row3">

                    <!--Grid column-->
                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" placeholder="Message" v-model="fmessage"></textarea>
                        </div>

                    </div>
                </div>
                <!--Grid row-->

            

            <div class="text-center text-md-left button">
                <input class="btn btn-danger" type="submit" value="Send">
            </div>
        </form>
            <div class="status"></div>
        </div>
        <!--Grid column-->
    </div>
        </div>
    </div>
</template>

<script>

export default {
    name:'contact',
    data(){
        return{
                fname: null,
                femail: null, 
                fsubject: null,
                fmessage: null,
           }
    },
    methods:{
        onSubmit(e){
            e.preventDefault();

            if(!this.fname||!this.femail||!this.fsubject||!this.fmessage){
                this.$alert("You missing Something","OOPs",'error')
                return
            }
            this.axios.post('/addMessege',{
                name: this.fname,
                email: this.femail,
                subject: this.fsubject,
                messsges: this.fmessage
            })
            .then(()=>{
                this.$alert("Message Send Successfuly","Success",'success')
            })
            .catch(()=>{
                 this.$alert("Sorry something went Wrong","OOPs..",'error')
            })

        }
    }
}

</script>

<style scoped>
#contact{
    width: 100%;
}
.row{
    width: inherit;
}
.row1{
    font-size: 40px;
    font-weight: bolder;
    padding-left: 10%;
    padding-top: 40px;
}
.showcase{
    padding-left: 10%;
}
.row2{
    margin: auto auto 50px 6%;
    padding-top: 50px ;
}
.row3{
    padding: 10px;
}
.button{
    padding-left: 10px;
    padding-top: 10px;
}


</style>
