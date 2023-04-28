function pay(payobject,gameinstance){

    console.log('pay');

    if(gold < payobject.gold){
        console.log('za mało złota');
        gameinstance.messagetext.setText('za mało złota'); 
        return false;
    }

    if(wood < payobject.wood){
        gameinstance.messagetext.setText('za mało drewna'); 
        return false;
    }

    if(payobject.gold){
        gold -= payobject.gold;
    }

    if(payobject.wood){
        wood -= payobject.wood;
    }
    return true;
}