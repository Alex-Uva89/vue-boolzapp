
const app = new Vue({
    el:'#js-root',
    data:{
        stringDate: '',
        activeChat: 0,
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
                message: [
                    {
                        date: '2020-01-10T15:30:55',
                        txt: 'ehi ciao ho bisogno di aiuto!',
                        send: true,
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'Ciao, certamente!',
                        send: false,
                    
                    },
                ]
            },
            {
                name: 'Lord Voldemort',
                lastConnect: '2020-01-10T15:30:55',
                proPic: '7',
                message: [
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'ehi ciao ho bisogno di aiuto!',
                        send: true,
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'ehi ciao ho bisogno di aiuto!',
                        send: true,
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: '...',
                        send: false,
                    
                    },
                ]
            },
            {
                name: 'Ron',
                lastConnect: '2020-01-10T15:30:55',
                proPic: '6',
                message: [
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'ehi ciao ho bisogno di aiuto!',
                        send: true,
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'Ciao, certamente!',
                        send: false,
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'ehi ciao ho bisogno di aiuto!',
                        send: true,
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'Ciao, certamente!',
                        send: false,
                    
                    },
                ]
            },
            {
                name: 'Hermione',
                lastConnect: '2020-01-10T15:30:55',
                proPic: '5',
                message: [
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'ehi ciao ho bisogno di aiuto!',
                        send: true,
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'Ciao, certamente!',
                        send: false,
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'Ciao, certamente!',
                        send: false,
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'Ciao, certamente!',
                        send: false,
                    
                    },
                ]
            },
            {
                name: 'Draco Malfoy',
                lastConnect: '2020-01-10T15:30:55',
                proPic: '4',
                message: [
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'ehi ciao ho bisogno di aiuto!',
                        send: true,
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'ehi ciao ho bisogno di aiuto!',
                        send: true,
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'Ciao, certamente!',
                        send: false,
                    
                    },
                ]
            },
            {
                name: 'Luna',
                lastConnect: '2020-01-10T15:30:55',
                proPic: '3',
                message: [
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'ehi ciao ho bisogno di aiuto!',
                        send: true,
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'Ciao, certamente!',
                        send: false,
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'Ciao, certamente!',
                        send: false,
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'Ciao, certamente!',
                        send: false,
                    
                    },
                ]
            },
            {
                name: 'Neville Packioc',
                lastConnect: '2020-01-10T15:30:55',
                proPic: '2',
                message: [
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'ehi ciao ho bisogno di aiuto!',
                        send: true,
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'Ciao, certamente!',
                        send: false,
                    
                    },
                ]
            },
            {
                name: 'Chou',
                lastConnect: '2020-01-10T15:30:55',
                proPic: '1',
                message: [
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'ehi ciao ho bisogno di aiuto!',
                        send: true,
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'Ciao, certamente!',
                        send: false,
                    
                    },
                ]
            },
            {
                name: 'Ginny ❤',
                lastConnect: '2020-01-10T15:30:55',
                proPic: 'io',
                message: [
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'ehi ciao ho bisogno di aiuto!',
                        send: true,
                    
                    },
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'Ciao, certamente!',
                        send: false,
                    
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
        // addTxt(){
           
        // },
        // autoReply(){
                
        // }
    
    }
 
    

})
