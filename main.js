const { createApp } = Vue

  createApp({
    data() {
      return {
        rMail:'',
        arrayMail: [],
        counter: 0

      }
    },
    mounted() {
        console.log('ciao')
    },

    methods: {
        emailRandom() {
            this.arrayMail = [];
            for (let i = 0; i < 10; i++) {
              axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((result) => { 
                  this.arrayMail.push(result.data.response);
                })
            }
            console.log(this.arrayMail)
            console.log(this.counter)
        }
    }
  }).mount('#app')