var employee={};
console.log(employee);

employee = {
    Name:'ALOHA',
    Gender:"Male",
    Age:25,
    Skill:['MIS','DBA'],
    Dept:"IT",
    Info:function(){
        alert('Name:'+this.Name+'\n'
        +'Gender:'+this.Gender+'\n'
        +'Age:'+this.Age+'\n'
        +'Dept:'+this.Dept+'\n'
        +'Skill:'+this.Skill[0]+','+this.Skill[1]+'\n');
    },
    Intro:function(){
        return "ALOHA World!";
    }
}