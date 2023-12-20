import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import React, {  useState } from "react";
import { Add } from "./Add";
import Search from "./Search";
// import apireqest from "./Apitreq";

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("todo_list")) || []
  );

  // const API_URL=" http://localhost:3500/items"

  const [Newitem, SetNewitem] = useState("");
  const [search, setSearch] = useState("");
  // const [error, seterror] = useState(null);
  // const [loading, setloading] = useState(false);
  const error=null
  const loading= false

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     try {
  //       const response = await fetch(API_URL);
  //       if (!response.ok){
  //         throw Error("data not found")
  //       }
  //       const data = await response.json();
  //       setItems(data);
  //       seterror(null)
  //     } catch (err) {
  //       seterror(err.message)
  //     }finally {
  //      setloading(false)
  //     }
  //   };
  
  //   setTimeout(() => {
  //     fetchItems(); 
  //   }, 4000);// Call the async function directly
  
  // }, []);
  

  const addo = async(text) => {
    let id = items.length ? items[items.length - 1].id + 1 : 1;
    const nearr = { id, text, completed: false };
    const newitem = [...items, nearr];
    setItems(newitem);
   localStorage.setItem("todo_list", JSON.stringify(newitem));
  //  const postoption={
  //   method:'POST',
  //   headers: {
  //    "Content-Type":"application/json"},
  //   body:JSON.stringify(nearr)
  //  }
  //  const rest = await apireqest(API_URL,postoption)
  //  if(rest) seterror(rest)

    
  };

  const changeupdate = async (id) => {
    let newitem = items.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setItems(newitem);
    localStorage.setItem("todo_list", JSON.stringify(newitem));
    // const myitem=newitem.filter((item) =>
    // item.id === id )
    // const patchoption={
    //   method:'PATCH',
    //   headers: {
    //    "Content-Type":"application/json"},
    //   body:JSON.stringify({completed:myitem[0].completed})
    //  }
    //  const requrl=`${API_URL}/${id}`
    //  const rest = await apireqest(requrl,patchoption)
    //  if(rest) seterror(rest)
  
      
    

  };



  const deletefn = async(id) => {
    let newitem = items.filter((item) => item.id !== id);
    setItems(newitem);
    localStorage.setItem("todo_list", JSON.stringify(newitem));

    // const deloption={method:"DELETE"}

    // const requrl=`${API_URL}/${id}`
    //  const rest = await apireqest(requrl,deloption)
    //  if(rest) seterror(rest)
  };

  const adding = (x) => {
    x.preventDefault();

    console.log("submitted");

    addo(Newitem);
    SetNewitem(" ");
  };

  return (
    <div>
      <Header />
      <Add Newitem={Newitem} SetNewitem={SetNewitem} adding={adding} />
      <Search search={search} setSearch={setSearch} />
      <main>
        {loading && <p>loading...</p> }
        {/* {error && <p>{`error:${error} `}</p>} */}
                
        {!loading && !error && <Content
        items={items.filter((item) =>
          item.text.toLowerCase().includes(search.toLowerCase())
        )}
        setItem={setItems}
        changeupdate={changeupdate}
        deletefn={deletefn}
        />}
       </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
