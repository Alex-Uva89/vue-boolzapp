
const app = new Vue({
    el:'#js-root',
    data:{
        counter: 0,
        newTxt:'',
        icons: [
            {
                preFixMicrophone: 'fa-solid',
                microphone: 'fa-4',
            }
        ],
        contacts: [
            {
                name: 'Henri Kapidani',
                isVisible: false,
                proPic: '8',
                message: [
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        lastConnect: '2020/01/10T15:30:55',
                        hourReply: '15:45:47',
                        txt: 'ehi ciao ho bisogno di aiuto!',
                        txtReply: 'Ciao, certamente!',
                    
                    },
                ]
            },
            {
                name: 'Gabry Spanu',
                isVisible: false, 
                proPic: '7',
                message: [
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        lastConnect: '2020/01/10T15:30:55',
                        hourReply: '15:45:47',
                        txt: 'aiutoooooo non mi riesce nulla',
                        txtReply: 'Ajò Ale! che succede?',
                    
                    },
                ]
            },
            {
                name: 'Mauro Costantinescu',
                isVisible: false, 
                proPic: '6',
                message: [
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        lastConnect: '2020/01/10T15:30:55',
                        hourReply: '15:45:47',
                        txt: 'Ciao Mauro, sto cercando di far apparire i messaggi con il v-for forse sto sbagliando qualcosa.',
                        txtReply: '42!',
                    
                    },
                ]
            },
            {
                name: 'Paolino ❤',
                isVisible: false, 
                proPic: '5',
                message: [
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        lastConnect: '2020/01/10T15:30:55',
                        hourReply: '15:45:47',
                        txt: 'Amo, sto partendo da casa',
                        txtReply: 'ok amo.',
                    
                    },
                ]
            },
            {
                name: 'Chiara Passano',
                isVisible: false, 
                proPic: '2',
                message: [
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        lastConnect: '2020/01/10T15:30:55',
                        hourReply: '15:45:47',
                        txt: 'ciao Chiara, mi sto disperando!',
                        txtReply: 'Ciao, ale! Ricordati che non devi lavorare troppo.',
                    
                    },
                ]
            },
            {
                name: 'Luca',
                isVisible: false, 
                proPic: '3',
                message: [
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        lastConnect: '2020/01/10T15:30:55',
                        hourReply: '15:45:47',
                        txt: 'Il termosifone perde di nuovo',
                        txtReply: 'Chiudi tutto subito altrimenti ci arriva una stangata di gas',
                    
                    },
                ]
            },
            {
                name: 'Angelo Lecce',
                isVisible: false, 
                proPic: '4',
                message: [
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        lastConnect: '2020/01/10T15:30:55',
                        hourReply: '15:45:47',
                        txt: 'Tresor, sabato ci sei?',
                        txtReply: "Si tesoro, mi sono già messo d'accordo con luca",
                    
                    },
                ]
            },
            {
                name: 'Angelo Lecce',
                isVisible: false, 
                proPic: '4',
                message: [
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        lastConnect: '2020/01/10T15:30:55',
                        hourReply: '15:45:47',
                        txt: 'Tresor, sabato ci sei?',
                        txtReply: "Si tesoro, mi sono già messo d'accordo con luca",
                    
                    },
                ]
            },
            
            
        ]
    },
    methods: {
        openChat(index){
           this.counter = index; 
        },
        hourFormat(){
            let time = luxon.DateTime.add(this.lastConnect).toRelativeCalendar();
            return time
        },
        addTxt(){
            if(this.newTxt.trim() != ''){
                const h = new Date();
                const m = new Date();
                const s = new Date();
                let hr = h.getHours();
                let min = m.getMinutes();
                let sec = s.getSeconds();
                let eleContainer = document.querySelector('.widow-chat')
                let spaceReply = document.createElement('div');
                spaceReply.classList.add('my-msg');
                spaceReply.innerHTML = '<div class="text-ms">'+this.newTxt+'</div> <div class="date-ms">'+hr+'.'+min+'.'+sec+'</div>';
                eleContainer.append(spaceReply);
                newTxt = ' ';
                const auto = setTimeout(this.autoReply, 2000);
            }
        },
        autoReply(){
                const m = new Date();
                const s = new Date();
                let min = m.getMinutes();
                let sec = s.getSeconds();
                let eleContainer = document.querySelector('.widow-chat')
                let spaceReply = document.createElement('div');
                spaceReply.classList.add('reply');
                spaceReply.innerHTML = '<div class="text-ms">eh certo! cit. Pamela Prati</div> <div class="date-ms">'+min+'.'+sec+'</div>';
                eleContainer.append(spaceReply);
        }
    
    }
 
    

})
