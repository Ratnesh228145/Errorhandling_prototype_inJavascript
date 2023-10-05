class user{
    constructor(username,password){
        this.username=username;
        this.password=password;
    }
    getpassword(){
        return this.password.replace(/./g,"*");
    }

    setpassword(newpassword){
        let containsNumber=false;
        let containsUppercase=false;
        for(let i=0;i<newpassword.length;i++){
            const char=newpassword.charAt(i);
            if(!isNaN(char)){
                containsNumber=true;
            }else if(char===char.toUpperCase()){
                containsUppercase=true;
            }
        }
        if(newpassword.length>=8 && containsNumber && containsUppercase){
            this.password=newpassword;
        }else{
            console.log("Error:password must be at least 8 characters long and contain at least one number and one Uppercase letter.");
        }
    }
}

//Expected output
const User=new user("johndoe","password123");
console.log(User.getpassword());
User.setpassword("mypassword");
User.setpassword("mypassword123");
console.log(User.getpassword());