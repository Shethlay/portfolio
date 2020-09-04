
<template>

<transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header row1"
          id="modalTitle"
        >
          <slot name="header">
            <div class="row">
            <div class="col-xs-6 col-sm-6 col-md-12 col-xl-12">
            {{data.title}}
            </div>
            <div class="col-xs-6 col-sm-6"></div>
            </div>
            <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal"
            >
              X
            </button>
          </slot>
        </header>
        <perfect-scrollbar>
        <section
          class="modal-body"
          id="modalDescription"
        >
          <slot name="body">
            <div class="row row3">
              <div class="col-xs-12 col-sm-12 col-md-4 col-xl-4">
                <v-lazy-image :src="`data:image/jpg;base64,${data.image}`" class="photo"></v-lazy-image>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-8 col-xl-8">
                <div class="row text-danger who">Tools and Technology:<br>{{data.tat}}</div>
                <div class="row content">Description:</div>
                <div class="row content">{{data.description}}</div>
                <hr>
                <div class="row CV">
                  <div class="col-sm-12 col-xs-12 col-md-12 col-xl-12">
                    Github Link:<a :href="data.glink">{{data.glink}}</a>
                  </div>
                </div>
              </div>
            </div>
          </slot>
        </section>
        </perfect-scrollbar>
        <footer class="modal-footer">
          <slot name="footer">
            <button type="button" class="btn-green" @click="close" aria-label="Close modal">Close me!</button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'model',
    props: ['data'],
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>




<style scoped>
v-lazy-image {
  filter: blur(5px);
  transition: filter 1.6s;
  will-change: filter;
}
.v-lazy-image-loaded {
  filter: blur(0);
}

.ps{
  height: auto;
}

.aa{
    text-decoration: none;
    color: black;
    
}
.btn{
    border-radius: 25px;
    
}
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
    
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
    
  }
  .row1{
    font-size: 40px;
    font-weight: bolder;
    padding-left: 6%;
    padding-top: 40px;
}
  .modal-footer {
    border-top: 1px solid #eeeeee;
    
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
    height: 670px;
   
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
    
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
    
  }
  .photo{
    border: 2px solid black ;
    border-radius: 5px;
    width: 430px;
    max-width: 100%; 
    height: auto;
    margin: auto; 
}

.row3{
    padding-top: 55px;
    margin-bottom: 80px;
    width: 100%;
    
}
.col-md-4{
    padding-left: 6%;
}
.who{
    padding-left: 6.47%;
    font-size: 20px;
    font-weight: 300;
    margin: 25px auto 8px auto;
}
.content{
     padding-left: 6.47%;
     line-height: 1.8;
     font-size: 18px;
     margin: auto;
     
}
.CV{
    margin-top: 50px;
    padding-left:6.47% ;
}
.row{
  width: inherit;
}
 
</style>
