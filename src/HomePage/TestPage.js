import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
function TestPage() {
    const [data, setData] = useState([]);
    const {test} = useParams();
    const getProduct = () => {

        axios.get('https://admin.juciparo.com/api/v1/product-cat/', test)
        .then(function (response) {
            console.log(response);
            setData(response);
        })
    }
    useEffect(() => {
        getProduct();
    },[])
  return (
    <div>

      {test}
    </div>
  )
}

export default TestPage


