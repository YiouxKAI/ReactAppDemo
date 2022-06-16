var customer={};
console.log(customer);

customer={
    id:1,
    name:'艾扣扣',
    email:'money@gmail.com',
    pwd:'1234',
    tel:'123456789',
    order:['iphone','samgsong','oppo'],
    level:3,
    showinfo:function(){
        var order="";
        for(i=0;i<this.order.length;i++){
            if(i<this.order.length-1)
                order += this.order[i] + '| ';
            else
            order += this.order[i] ;
        }

        var info="編號:" + this.id + "<br>" 
                +"姓名:" + this.name + "<br>" 
                +"電郵:" + this.email + "<br>" 
                +"密碼:" + this.pwd + "<br>" 
                +"電話:" + this.tel + "<br>" 
                +"訂購項目:" + order + "<br>" 
                +"客戶等級:" + this.level + "<br>" ;

        return info;
    }
};