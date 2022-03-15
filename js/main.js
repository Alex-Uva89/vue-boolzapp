const app = new Vue({
    el:'#js-root',
    data:{
        counter: 0,
        contacts: [
            {
                name: 'Henri Kapidani',
                isVisible: false,
                proPic: '8',
                message: [
                    {
                        date: '10/01/2020', 
                        hour: '15:30:55',
                        txt: 'ehi ciao dimmi!',
                        status: 'sent',
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        txtReplay: 'Ciao, certamente!',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Gabry Spanu',
                isVisible: false, 
                proPic: '7',
                message: [
                    {
                        date: '10/01/2020 15:30:55',
                        txt: '',
                        status: 'sent',
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        txt: 'Ciao, certamente!',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Mauro Costantinescu',
                isVisible: false, 
                proPic: '6',
                message: [
                    {
                        date: '10/01/2020 15:30:55',
                        txt: '',
                        status: 'sent',
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        txt: 'Ciao, certamente!',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Paolino ❤',
                isVisible: false, 
                proPic: '5',
                message: [
                    {
                        date: '10/01/2020 15:30:55',
                        txt: '',
                        status: 'sent',
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        txt: 'Ciao, certamente!',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Chiara Passano',
                isVisible: false, 
                proPic: '2',
                message: [
                    {
                        date: '10/01/2020 15:30:55',
                        txt: '',
                        status: 'sent',
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        txt: 'Ciao, certamente!',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Luca',
                isVisible: false, 
                proPic: '3',
                message: [
                    {
                        date: '10/01/2020 15:30:55',
                        txt: '',
                        status: 'sent',
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        txt: 'Ciao, certamente!',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Angelo Lecce',
                isVisible: false, 
                proPic: '4',
                message: [
                    {
                        date: '10/01/2020 15:30:55',
                        txt: '',
                        status: 'sent',
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        txt: 'Ciao, certamente!',
                        status: 'received'
                    }
                ]
            },
            
        ]
    },
    methods: {
    }
  
})