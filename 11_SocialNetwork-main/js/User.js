/*class User{
    user_id='';
    username = '';
    email='';
    password='';
    api_url='https://62cdccbaa43bf780085f14d1.mockapi.io/';

    create(){
        let data= {
            username:this.username,
            email:this.email,
            password: this.password
        }
        console.log(data)

        data = JSON.stringify(data)

        fetch(this.api_url + '/users',{
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: data
        })
        .then(response => response.json())
        .then(data=>{
            console.log('Korisnik je kreiran')
        })
    }
}*/