import CircularProgress from "@mui/material/CircularProgress";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { db } from "../firebase/firebase";
import ItemList from "./ItemList";


export default function ItemListContainer() {
  const { idcategory } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    setLoading(true)
    const products = idcategory
      ? query(collection(db, "products"), where("idcategory", "==", idcategory))
      : collection(db, "products")
    getDocs(products)
      .then((result) => {
        const list = result.docs.map((item) => {
          return {
            id: item.id,
            ...item.data()
          }
        })
        setItems(list)
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [idcategory]);

  return (
    <div className="cargando">
      <div>
      {loading ? <CircularProgress /> : <ItemList items={items} />}
      </div>
    </div>
  );


  /* 
    useEffect(() => {
      const itemsArray = new Promise((res, rej) => {
        setTimeout(() => {
          res(products);
        }, 1000);
      });
  
      
  
      if(!idcategory){
        itemsArray
        .then((res) => {
          setItems(res);
        })
        .catch((err) => {
          console.log("No se pudo cargar");
        })
        .finally((loading) => {
          setLoading(false);
        });
      }else{
        itemsArray
        .then((res) => {
          
          setItems(res.filter((product)=>product.idcategory === idcategory));
        })
        .catch((err) => {
          console.log("No se pudo cargar");
        })
        .finally((loading) => {
          setLoading(false);
        });
      }
  
    }, [idcategory]);
  
    if (loading) {
      return <div className="center full-div"><CircularProgress /></div>;
    } else {
      return <ItemList items={items} />;
    } */
}