const { createApp } = Vue

createApp({
    data() {
      return {
        parola :"",
        banner: false,
        newMes : "",
        arrayPosition : 0,
        show : 0,
        risposte: ["ok","no","forse", "daje!","anche no","bell'idea!","lascia perde","più tardi"],
        hidden: -1,
        texting : false,
        rispostePalla: ["Per quanto posso vedere, sì",
            "È certo",
            "Rifai la domanda più tardi",
            "È decisamente così",
            "Meglio non risponderti adesso",
            "Molto probabilmente",
            "Le prospettive non sono buone",
            "I segni indicano di sì",
            "Sì",
            "sì, senza dubbio",
            "La mia risposta è no",
            "Ci puoi contare",
            "Molto incerto",
            "È difficile rispondere, prova di nuovo",
            "Non posso predirlo ora",
            "Concentrati e rifai la domanda",
            "Non ci contare",
            "Senza alcun dubbio",
            "Le mie fonti dicono di no",
            "Le prospettive sono buone",
            ],
        contacts: [
            {
                name: 'Michele',
                avatar: '/img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '/img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '/img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '/img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '/img/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '/img/avatar_io.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '/img/avatar_7.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '/img/avatar_8.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ]
      }
    },
    methods: {
        contatore(numero){
            this.arrayPosition = numero
            this.show = this.arrayPosition;
        },

        InviaMessaggio(arrayPosition){
            let newOBJ;
            let newMex;
            if(this.newMes !== ""){
                newMex = this.newMes
                newOBJ = {
                    date: '10/01/2020 15:51:00',
                    message: newMex,
                    status: 'sent',
                    canDelete: true
                }
                this.contacts[arrayPosition].messages.push(newOBJ)
                this.newMes = "";
                if(this.contacts[arrayPosition].name == 'Palla Magica'){
                    this.rispostaPalla(arrayPosition)
                }else {
                    this.risposta(arrayPosition)}
                
            };   
        },
        risposta:function(arrayPosition) {
            this.contacts[arrayPosition].isTexting = true;
            let posizione = arrayPosition
            console.log(this.contacts[arrayPosition].isTexting)
            setTimeout(() =>{
                let newRes = {
                    date: '28/02/2023 11:05:00',
                    message: this.risposte[Math.floor(Math.random()*8)],
                    status: 'received',
                    canDelete: true
                }
                this.contacts[posizione].messages.push(newRes)
                this.contacts[posizione].isTexting = false;
            }, Math.floor(Math.random()*15)*1000);
        },
        rispostaPalla:function(arrayPosition) {
            this.contacts[arrayPosition].isTexting = true;
            let posizione = arrayPosition
            console.log(this.contacts[arrayPosition].isTexting)
            setTimeout(() =>{
                let newRes = {
                    date: '10/01/2020 15:53:00',
                    message: this.rispostePalla[Math.floor(Math.random()*20)],
                    status: 'received',
                    canDelete: true
                }
                this.contacts[posizione].messages.push(newRes)
                this.contacts[posizione].isTexting = false;
            }, 1000);
            setTimeout(() =>{
                let newRes = {
                    date: '10/01/2020 15:54:00',
                    message: "Fammi un'altra domanda",
                    status: 'received',
                    canDelete: true
                }
                this.contacts[posizione].messages.push(newRes)
                this.contacts[posizione].isTexting = false;
            }, 3000);
        },
        showTendina(index){
            if (this.hidden == index) {
                this.hidden = -1
            } else {
                this.hidden = index
            }
            console.log(index)
        },

        eliminaXme(arrayPosition, index){
            let numero = -1  
            this.contacts[arrayPosition].messages.splice(index,1)
            this.hidden = numero 
        },

        eliminaXtutti(arrayPosition, index){
            let numero = -1
            if (this.contacts[arrayPosition].messages[index].status == "sent"){

            this.contacts[arrayPosition].messages[index].message = "messaggio eliminato"
            this.contacts[arrayPosition].messages[index].canDelete = false
            this.hidden = numero
            } 
        },
        search(){
            return this.contacts.filter((element) =>
                element.name.toLowerCase().includes(this.parola.toLowerCase())
            );
        },
        userInfo(){
            this.contacts.forEach(element => {
                element["isTexting"] = false ;
                element.messages.forEach(message =>{
                    message["canDelete"] = true
                    
                })
            });
         console.log(this.contacts)
        },
        creaPalla(){
            let palla = {
            name: 'Palla Magica',
            avatar: '/img/avatar_palla.jpg',
            visible: true,
            isTexting: false,
            messages: [
                {
                    date: '28/04/2023 15:30:55',
                    message: 'Fammi una domanda, ho tutte le risposte!',
                    status: 'received',
                    canDelete: true
                },
            ],
            }
            this.contacts.unshift(palla)
        }

        
    },
    mounted() {
        this.userInfo()
        this.creaPalla()        
    },
}).mount('#app')