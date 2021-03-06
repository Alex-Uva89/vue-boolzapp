
const app = new Vue({
    el:'#js-root',
    data:{
        activeChat: 0,
        researchTxt: '',
        mainUser: [
            {
                name: 'Alessandro Uva',
                propic: '2',
            }
        ],
        users: [
            {
                name: 'Harry Potter',
                lastConnect: '2020-01-10T15:30:55',
                proPic: '8',
                newTxt: '',
                visibility: true,
                message: [
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'ehi ciao ho bisogno di aiuto!',
                        isSend: true,
                        isVisible: false,
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'Ciao, certamente!',
                        isSend: false,
                        isVisible: false,
                    
                    },
                ]
            },
            {
                name: 'Lord Voldemort',
                lastConnect: '2020-01-10T15:30:55',
                proPic: '7',
                newTxt: '',
                visibility: true,
                message: [
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'ehi ciao ho bisogno di aiuto!',
                        isSend: true,
                        isVisible: false,
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'ehi ciao ho bisogno di aiuto!',
                        isSend: true,
                        isVisible: false,
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: '...',
                        isSend: false,
                        isVisible: false,
                    
                    },
                ]
            },
            {
                name: 'Ron',
                lastConnect: '2020-01-10T15:30:55',
                proPic: '6',
                newTxt: '',
                visibility: true,
                message: [
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'ehi ciao ho bisogno di aiuto!',
                        isSend: true,
                        isVisible: false,
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'Ciao, certamente!',
                        isSend: false,
                        isVisible: false,
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'ehi ciao ho bisogno di aiuto!',
                        isSend: true,

                        isVisible: false,
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'Ciao, certamente!',
                        isSend: false,
                        isVisible: false,
                    
                    },
                ]
            },
            {
                name: 'Hermione',
                lastConnect: '2020-01-10T15:30:55',
                proPic: '5',
                newTxt: '',
                visibility: true,
                message: [
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'ehi ciao ho bisogno di aiuto!',
                        isSend: true,
                        isVisible: false,
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'Ciao, certamente!',
                        isSend: false,
                        isVisible: false,
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'Ciao, certamente!',
                        isSend: false,
                        isVisible: false,
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'Ciao, certamente!',
                        isSend: false,
                        isVisible: false,
                    
                    },
                ]
            },
            {
                name: 'Draco Malfoy',
                lastConnect: '2020-01-10T15:30:55',
                proPic: '4',
                newTxt: '',
                visibility: true,
                message: [
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'ehi ciao ho bisogno di aiuto!',
                        isSend: true,

                        isVisible: false,
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'ehi ciao ho bisogno di aiuto!',
                        isSend: true,

                        isVisible: false,
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'Ciao, certamente!',
                        isSend: false,
                        isVisible: false,
                    
                    },
                ]
            },
            {
                name: 'Luna',
                lastConnect: '2020-01-10T15:30:55',
                proPic: '3',
                newTxt: '',
                visibility: true,
                message: [
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'ehi ciao ho bisogno di aiuto!',
                        isSend: true,

                        isVisible: false,
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'Ciao, certamente!',
                        isSend: false,
                        isVisible: false,
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'Ciao, certamente!',
                        isSend: false,
                        isVisible: false,
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'Ciao, certamente!',
                        isSend: false,
                        isVisible: false,
                    
                    },
                ]
            },
            {
                name: 'Neville Packioc',
                lastConnect: '2020-01-10T15:30:55',
                proPic: '2',
                newTxt: '',
                visibility: true,
                message: [
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'ehi ciao ho bisogno di aiuto!',
                        isSend: true,
                        isVisible: false,
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'Ciao, certamente!',
                        isSend: false,
                        isVisible: false,
                    
                    },
                ]
            },
            {
                name: 'Chou',
                lastConnect: '2020-01-10T15:30:55',
                proPic: '1',
                newTxt: '',
                visibility: true,
                message: [
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'ehi ciao ho bisogno di aiuto!',
                        isSend: true,

                        isVisible: false,
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'Ciao, certamente!',
                        isSend: false,
                        isVisible: false,
                    
                    },
                ]
            },
            {
                name: 'Ginny ???',
                lastConnect: '2020-01-10T15:30:55',
                proPic: 'io',
                newTxt: '',
                visibility: true,
                message: [
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'ehi ciao ho bisogno di aiuto!',
                        isSend: true,

                        isVisible: false,
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'Ciao, certamente!',
                        isSend: false,
                        isVisible: false,
                    
                    },
                ]
            },
            
        ],
        phrasesRandom:[
            'bellaaaaaaaaaa',
            'AvadaKedavra',
            'Si dice Leviosa non Levios??',
            'Potter! Ah no scusa vi somigliate',
            'si dimmi',
            "I particolari sulla tua incompetenza non m'interessano",
            'la risposta a tutte le domande ??... 42!',
            "che differenza c'?? tra un corvo e una scrivania?",
            'Hai paura Potter?',
            'Esiste una difficolt?? negli esseri umani, una di quelle sei tu',
            'Una volta ho mangiato un canguro',
            'HakunaMatata',
            'Chi va con lo zoppo? ... va con lo zoppo ovviamente.',
            'ti sto aspettando',
            'Ti amo',
            'Sposami',
            'Ci andiamo a prendere er succo de bolle????'
        ],

    },
    methods: {
        addPropic(){
           const img = this.mainUser[0].propic;
           return img;
        },
        openChat(index){
           this.activeChat = index; 
        },
        hourFormat(date){
        let formatHourStr = 'dd/MM/yyyy HH:mm:ss'; 
        return luxon.DateTime.fromISO(date).toFormat(formatHourStr);
        },
        addTxt(){
           const activeChat = this.users[this.activeChat];
           const sendMessage = {
               date: luxon.DateTime.now().toISO().split('.')[0],
               hour: luxon.DateTime.now().toISO().split('T')[1],
               txt: activeChat.newTxt,
               isSend: true,
               isVisible: false,
           };
           activeChat.message.push(sendMessage);
           this.autoReply(this.activeChat);
           this.users[this.activeChat].newTxt = '';
        },
        autoReply(chatIndex){
            setTimeout(() => {
                const reply = {

                    date: luxon.DateTime.now().toISO().split('.')[0],
                    hour: luxon.DateTime.now().toISO().split('T')[1],
                    txt: this.generateRandomReply(),
                    isSend: false,
                    isVisible: false,
                }; 
                this.users[chatIndex].message.push(reply);   
            }, 2000);
        },
        searchResult(){
            this.users.forEach(element => {
                if (element.name.toLowerCase().includes(this.researchTxt.toLowerCase())) {
                    element.visibility = true;
                } else  if(this.researchTxt == ''){
                    element.visibility = true;
                } else {
                    element.visibility = false;
                }
            });
        },
        deleteMessage(messageIndex) {
            this.users[this.activeChat].message.splice(messageIndex, 1);
          },
        generateRandomReply(){
            let random = this.phrasesRandom[Math.floor(Math.random()*(16 - 0))];  
            return random  
        },
        darkMode(){
            let isOn = document.getElementById('btn-mode');
            if (isOn.innerHTML == '<i class="fa-solid fa-moon"></i>') {
                isOn.innerHTML = '<i class="fa-solid fa-sun"></i>'
                const darkContainer = document.querySelector('.light');
                darkContainer.classList.remove('light');
                darkContainer.classList.add('dark');
            } else {
                isOn.innerHTML = '<i class="fa-solid fa-moon"></i>'
                const darkContainer = document.querySelector('.dark');
                darkContainer.classList.remove('dark');
                darkContainer.classList.add('light'); 
            }



        },
    },
    
}) 
    
