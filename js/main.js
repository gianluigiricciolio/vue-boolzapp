'use strict';

const { createApp } = Vue;

createApp({
    data(){
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
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
                    avatar: './img/avatar_2.jpg',
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
                    avatar: './img/avatar_3.jpg',
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
                    avatar: './img/avatar_4.jpg',
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
                    avatar: './img/avatar_5.jpg',
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
                    avatar: './img/avatar_6.jpg',
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
                    avatar: './img/avatar_7.jpg',
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
                    avatar: './img/avatar_8.jpg',
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
            ],
            answers: [
                'Ciao come stai?',
                'Hai visto che bella giornata?',
                'Che fai domani?',
                'Hai fatto commit and push?',
                'Lorem ipsum a caso...',
                'Hai fatto la spesa?',
                '...?',
                'Hai portato a spasso il cane?',
                'Ricordati di stendere i panni',
                'Tutto fatto!',
                'Bene grazie! Stasera ci vediamo?',
                'Va bene, stasera la sento',
                'Nessuna nuova, buona nuova',
                'OK!!',
                'Ciao, andiamo a mangiare la pizza stasera?'
            ],
            currentTextMessage: '',
            selectedContact:    0,
            searchedContact:    "",
            clickedMessage:     null,
            isTyping:           false,
            typingText:         'Sta scrivendo',
        }
    },

    methods: {

        changeSelectedContact(i){
            this.selectedContact=i;
            const sidebar = document.querySelector('.sidebar');
            sidebar.classList.remove('visible');
        },
        
        generateAnswer(messageList) {
            const random = parseInt(Math.random()*(this.answers.length -1));
            const myMsg = this.answers[random];
            console.log(myMsg,this.answers.length,random);


            messageList.push({
                date: luxon.DateTime.now().setLocale('it').toFormat('dd/MM/yyyy HH:mm:ss'),
                message: myMsg,
                status: 'received'
            });
        },

        sendMessage(){
            const msgs=this.contacts[this.selectedContact].messages
            msgs.push({
                date: luxon.DateTime.now().setLocale('it').toFormat('dd/MM/yyyy HH:mm:ss'),
                message: this.currentTextMessage,
                status: 'sent'
            });
            this.currentTextMessage='';
            this.isTyping=true;
            this.typing();
            setTimeout( () =>{
                this.generateAnswer(msgs);
                this.isTyping=false;
            }, 2000);
        },

        scrollToBottom() {
            const container = document.getElementById('chat-box');
            const lastMessage = container.lastElementChild;
            if (lastMessage)
                lastMessage.scrollIntoView();
        },
        
        // IN THIS WAY INDEXES ARE THE SAME BUT VISIBLE PROPERTY IS SET TO FALSE
        filteredContact(){
            if(!this.searchedContact) return this.contacts;
            else {
                return this.contacts.map((contact) => {
                    if(contact.name.toLowerCase().includes(this.searchedContact.toLowerCase())) {
                        return { ...contact }
                    } else return { ...contact, visible: false };
                    
                })
            }
        },

        toggleDropDownMenu(i){
            if(this.clickedMessage==i){
                this.clickedMessage=null;
                document.removeEventListener('click', this.handleClickOutside);
            } else {
                this.clickedMessage=i;
                this.handleClickOutside();
            }
            console.log(this.clickedMessage);
        },
        

        deleteMessage(i){
            this.clickedMessage=null;
            if (i >= 0 && i < this.contacts[this.selectedContact].messages.length) {
                this.contacts[this.selectedContact].messages.splice(i, 1);
            }
        },

        printDate(date){
            const myDate = luxon.DateTime.fromFormat(date, 'dd/MM/yyyy HH:mm:ss');
            return myDate.toFormat('HH:mm');
        },

        handleClickOutside(){
            document.addEventListener('click', (event)=>{
            
                if (event.target.classList.contains('toggle-menu')) {
                return;
            }
                this.clickedMessage=null;
                console.log('triggered', this.clickedMessage);
            })
        },

        openContacts(){
            const sidebar = document.querySelector('.sidebar');
            sidebar.classList.add('visible');
        },

        contactInfo(messages){
            if(!messages)
                return null;

            let lastMessageLine = 'Ultimo accesso oggi alle ';
            const date = messages[messages.length-1].date;
            lastMessageLine+= this.printDate(date);

            return lastMessageLine;
        },

        typing(){
            const intervalId = setInterval( ()=>{
                if(this.typingText.length<'Sta scrivendo...'.length)
                    this.typingText+='.';
                else
                    this.typingText='Sta scrivendo';
            },400)
            setTimeout( ()=>{
                clearInterval(intervalId);
                this.typingText='Sta scrivendo';
            },1500);
        }
    },

    mounted(){
        
    },

    updated(){
        this.scrollToBottom();
    }


}).mount('#app');