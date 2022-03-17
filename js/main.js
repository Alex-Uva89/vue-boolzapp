
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
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'Ciao, certamente!',
                        isSend: false,
                    
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
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'ehi ciao ho bisogno di aiuto!',
                        isSend: true,
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: '...',
                        isSend: false,
                    
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
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'Ciao, certamente!',
                        isSend: false,
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'ehi ciao ho bisogno di aiuto!',
                        isSend: true,
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'Ciao, certamente!',
                        isSend: false,
                    
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
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'Ciao, certamente!',
                        isSend: false,
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'Ciao, certamente!',
                        isSend: false,
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'Ciao, certamente!',
                        isSend: false,
                    
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
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'ehi ciao ho bisogno di aiuto!',
                        isSend: true,
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'Ciao, certamente!',
                        isSend: false,
                    
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
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'Ciao, certamente!',
                        isSend: false,
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'Ciao, certamente!',
                        isSend: false,
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'Ciao, certamente!',
                        isSend: false,
                    
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
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'Ciao, certamente!',
                        isSend: false,
                    
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
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'Ciao, certamente!',
                        isSend: false,
                    
                    },
                ]
            },
            {
                name: 'Ginny ❤',
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
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'Ciao, certamente!',
                        isSend: false,
                    
                    },
                ]
            },
            
        ]
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
           };
           activeChat.message.push(sendMessage);
           this.users[0].newTxt = '';
           this.autoReply(this.activeChat);
        },
        autoReply(chatIndex){
            setTimeout(() => {
                const reply = {

                    date: luxon.DateTime.now().toISO().split('.')[0],
                    hour: luxon.DateTime.now().toISO().split('T')[1],
                    txt: 'messaggio di prova',
                    isSend: false,
                }; 
                this.users[chatIndex].message.push(reply);   
            }, 2000);
        },
        searchResult(){
            this.users.forEach(element => {
                if (element.name.toLowerCase().includes(this.researchTxt.toLowerCase())) {
                    element.visibility = true;
                } else {
                    element.visibility = false;
                }
            });
        }

    }
}) 
    
