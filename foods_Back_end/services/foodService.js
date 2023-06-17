
let Food= require('../mongoose/FoodShema');
let Card= require('../mongoose/cardShema');



let save =async (req,res)=>{
        let Foods=[
            {
                
                type:"pizza",
                service:'1',
                price: 14.00,
                inCard:false,
                foodMouth:false,
                title:"spanish pizza",
                description:"Lorem epsim rellax dime socarda referrada sobre del rey xdezfolio",
                image:"../assets/pizza1.jpeg"
            },
            {
                
                type:"pizza",
                service:'1',
                price: 14.00,
        
                inCard:false,
                foodMouth:false,
                title:"spanish pizza",
                description:"Lorem epsim rellax dime socarda referrada sobre del rey xdezfolio",
                image:"../assets/pizza1.jpeg"
            },
            {
                
                type:"pizza",
                service:'1',
                price: 14.00,
               
                inCard:false,
                foodMouth:false,
                title:"spanish pizza",
                description:"Lorem epsim rellax dime socarda referrada sobre del rey xdezfolio",
                image:"../assets/pizza1.jpeg"
            },
            {
                
                type:"pizza",
                service:'1',
                price: 14.00,
            
                inCard:false,
                foodMouth:false,
                title:"spanish pizza",
                description:"Lorem epsim rellax dime socarda referrada sobre del rey xdezfolio",
                image:"../assets/pizza1.jpeg"
            },
            {
                
                type:"drinks",
                service:'1',
                price: 14.00,
              
                inCard:false,
                foodMouth:false,
                title:"coca cola",
        
                image:"../assets/cola1.png"
            },
            {
                
                type:"drinks",
                service:'1',
                price: 14.00,
            
                inCard:false,
                foodMouth:false,
                title:"fanta",
                description:"Lorem epsim rellax dime socarda referrada sobre del rey xdezfolio",
                image:"../assets/cola2.png"
            },
            {
                
                type:"drinks",
                service:'1',
                price: 14.00,
          
                inCard:false,
                foodMouth:false,
                title:"pepsi",
                description:"Lorem epsim rellax dime socarda referrada sobre del rey xdezfolio",
                image:"../assets/cola3.png"
            }, 
            {
                
                type:"drinks",
                service:'1',
                price: 14.00,
         
                inCard:false,
                foodMouth:false,
                title:"coffe ",
                description:"Lorem epsim rellax dime socarda referrada sobre del rey xdezfolio",
                image:"../assets/cola4.png"
            },
            /***                  */
        
            {
                
                type:"foods",
                service:'1',
                price: 14.00,
          
                inCard:false,
                foodMouth:false,
                title:"Lorem epsim",
                description:"Lorem epsim rellax dime socarda referrada sobre del rey xdezfolio",
                image:"../assets/f1.png"
            },
            {
                
                type:"foods",
                service:'1',
                price: 14.00,
             
                inCard:false,
                foodMouth:false,
                title:"loremm epdd",
                description:"Lorem epsim rellax dime socarda referrada sobre del rey xdezfolio",
                image:"../assets/f2.png"
            },
            {
                
                type:"foods",
                service:'1',
                price: 14.00,
                inCard:false,
                foodMouth:false,
                title:"meat somet",
                description:"Lorem epsim rellax dime socarda referrada sobre del rey xdezfolio",
                image:"../assets/f3.png"
            },
            {
                
                type:"foods",
                service:'1',
                price: 14.00,
                inCard:false,
                foodMouth:false,
                title:" lorem epsum ",
                description:"Lorem epsim rellax dime socarda referrada sobre del rey xdezfolio",
                image:"../assets/f4.png"
            },
        
            /***** */
            {
                type:"ice cream",
                 inCard:false,
                foodMouth:false,
                service:'1',
                title:"chocolate",
                price :14.00,
                description:"Lorem epsim rellax dime socarda referrada sobre del rey xdezfolio",
                image:"../assets/ice1.png",
            },
            {
                 inCard:false,
                foodMouth:false,
                type:"ice cream",
                service:'1',
                title:"vanilla",
                price :14.00,
                description:"Lorem epsim rellax dime socarda referrada sobre del rey xdezfolio",
                image:"../assets/ice2.png",
            },
            {
                 inCard:false,
                foodMouth:false,
                type:"ice cream",
                service:'1',
                title:"lorem",
                price :14.00,
                description:"Lorem epsim rellax dime socarda referrada sobre del rey xdezfolio",
                image:"../assets/ice3.png",
            }
        
        ]
        for(let food of Foods){
            console.log(food)
            let newFood=new Food(food);
            await  newFood.save()

        }
           
    console.log('save');
    res.send({message:"saved"})
}
let findAll=async(req,res)=>{

    let allFoods= await Food.find();
    res.send(allFoods);
}
let findOne=async(req,res)=>{

    let allFoods= await Food.find({_id:req.params.id});
    res.send(allFoods);
}
let findFoodOfMounth=async(req,res)=>{
    let allFoods= await Food.find({foodMouth:true});
    res.send(allFoods);
}
let forUserCard=async(req,res)=>{
    let id = req.body.id;
    let userCared= await Card.find({clientId:id});
    res.send(userCared);

}
module.exports={save,findAll,forUserCard,findFoodOfMounth,findOne}

