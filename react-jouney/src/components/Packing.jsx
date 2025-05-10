function Item({ name, isPacked }) {



    let itemContent = " ";

    if(isPacked){

        itemContent = name + " ✅" ;
    }
    else{ 
        itemContent = name + " ❌" ;
    }

    return <li className="font-bold">
        {itemContent}
    </li>
}

// just for memory

const lang = "React-js";


const result1 = lang && "React-JS";  //left side truthy hole right side return korbe , otherwsie left side return korbe

const result2 = lang || "Next-JS" ;  //left side false hole right side return korbe  , otherwise left side return krobe


const result3 = lang ?? "TailwindCss" ;   //nullish coalescing operator : left side nullish (Null or undefined)  hole right side return korbe ,otherwise left side return krobe

console.log("result : ",result1);    //javascript

console.log("result 2 : ",result2);  //javascript

console.log("result 3 : ",result3);  //javascript
    

// we can use ternary operator this is more professional way

// return <li className="Item">{isPacked ? name + "✅"  : <del>{name}</del>}</li>


// more easy way

// return <li className="item">
//     {name} {isPacked && "✅"}
// </li>



export default function PackingList() {
  return (
    <section>
      <h1 className="font-bold text-3xl"> Packing List Below</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={0} name="Photo of Tam" />
      </ul>
    </section>
  );
}




