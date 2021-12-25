import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import "./Rent.css"
import axios from "axios";
function App() {
  const [textObj, setTextObj] = useState([]);
  const [address, setAddress] = useState("sdf") 
  const [numberOfAvailableCars, setNumberOfAvailableCars] = useState("sdf")
  const [sensorId, setSensorId] = useState("dsf")
  const [sensorType, setSensorType ]= useState("fdsf")
  const [timestamp, setTimestamp ]= useState("fdsf")
  const [informationOnFines, setInformationOnFines]= useState("fdsf")
  const [secretKey, setSecretKey]= useState("_)(*&^%")

  const fetchData = async () => {
    try {
      
      axios.get('http://www.m1rrox.fun:5000/rent').then(res => {
        const data = res.data;
        setTextObj(data);
    })
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [
    textObj
  ]);

  return (
    <>
      <div style={{ margin: "0rem 2rem" }}>
        <div className="header-secret">
          <h2 style={{ textDecoration: "no", cursor: "pointer", display: "flex", margin: "0rem 1rem 0rem 0rem", fontFamily: "'Courier New', Courier, monospace", alignItems: "center" }}>
            <p style={{ color: "black", fontFamily: "'Courier New', Courier, monospace" }}>Cloud labs(Rent aka sixt.com)  </p></h2>

        </div>

        <div style={{ display: "flex", flexDirection: "row-reverse" }}>


          <div className="create-section-secret" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ color: "black", fontFamily: "'Courier New', Courier, monospace", fontWeight: "900" }}>
            Адрес локації
            </span>
            <TextField onChange={(e) => setAddress(e.target.value)} style={{ margin: "0rem 0rem 0.5rem 0rem" }} type="text" />
            <span style={{ color: "black", fontFamily: "'Courier New', Courier, monospace", fontWeight: "900" }}>
            Інформація про штрафи за ПДР
            </span>
            <TextField onChange={(e) => setInformationOnFines(e.target.value)} multiline="true" style={{ margin: "0rem 0rem 0.5rem 0rem" }} type="text" />

            <span style={{ color: "black", fontFamily: "'Courier New', Courier, monospace", fontWeight: "900" }}>
            Дата останньої оренди
                 </span>
            <TextField onChange={(e) => setTimestamp(e.target.value)} multiline="true" style={{ margin: "0rem 0rem 0.5rem 0rem" }} type="text" />

            <span style={{ color: "black", fontFamily: "'Courier New', Courier, monospace", fontWeight: "900" }}> 
            Кількість доступних авто
             </span>
            <TextField onChange={(e) => setNumberOfAvailableCars(e.target.value)} multiline="true" style={{ margin: "0rem 0rem 0.5rem 0rem" }} type="text" />
            
            
            
            <span style={{ color: "black", fontFamily: "'Courier New', Courier, monospace", fontWeight: "900" }}> 
            Кількість орендованих авто
             </span>
            <TextField onChange={(e) => setSensorId(e.target.value)} multiline="true" style={{ margin: "0rem 0rem 0.5rem 0rem" }} type="text" />
            
            
            <span style={{ color: "black", fontFamily: "'Courier New', Courier, monospace", fontWeight: "900" }}> 
            Тип давача
             </span>
            <TextField onChange={(e) => setSensorType(e.target.value)} multiline="true" style={{ margin: "0rem 0rem 0.5rem 0rem" }} type="text" />
            
            <span style={{ color: "black", fontFamily: "'Courier New', Courier, monospace", fontWeight: "900" }}> 
            Введіть секретний ключ
             </span>
            <TextField onChange={(e) => setSecretKey(e.target.value)} multiline="true" style={{ margin: "0rem 0rem 0.5rem 0rem" }} type="text" />
            

            <p

              onClick={() => AddRent(address,numberOfAvailableCars,sensorId,sensorType,timestamp, informationOnFines, secretKey)}
              class="link-protocol-secret create_template_button_t-secret btn-background-slide row "
              style={{cursor:'pointer'}}
            >
              <p className="text_decoration" style={{ display: "flex" }}>Save</p>
            </p>
          </div>

          <div className="main-section-secret">

            {textObj.map((obj) => (<>

              <div className="element-secret" style={{ display: "flex", margin: "0.5rem", padding: "0.5rem" }}>
                <div style={{ width: "100%", display: "flex", flexDirection: "row-reverse", justifyContent: "end" }}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <img alt="where my img....?" src="https://img.icons8.com/ios/50/000000/delete-sign--v1.png" style={{ width: "50px", height: "50px", margin: "0.5rem", }} onClick={() => deleteObj(obj.id.S)} />

                  </div>
                  <div style={{ height: "auto", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                    <p style={{}}>
                    Адрес локації: {obj.address.S}
                    </p>
                    <p style={{}}>
                    Інформація про штрафи за ПДР: {obj.informationOnFines.S}
                    </p>
                    <p style={{}}>
                    Дата останньої оренди: {obj.timestamp.S}
                    </p>
                    <p style={{}}>
                    Кількість доступних авто: {obj.numberOfAvailableCars.S}
                    </p>
                    <p style={{}}>
                    Кількість орендованих авто: {obj.sensorId.S}
                    </p>
                    <p style={{}}>
                    Тип давача: {obj.sensorType.S}
                    </p>

                  </div>
                </div>

              </div>

            </>))}
          </div>


        </div>
      </div>
    </>
  )

}
async function AddRent(address,numberOfAvailableCars,sensorId,sensorType,timestamp, informationOnFines, secretKey) {
  
  const body = {
    timestamp: timestamp,
    sensorId: sensorId,
    sensorType: sensorType,
    address: address,
    numberOfAvailableCars:numberOfAvailableCars,
    informationOnFines:informationOnFines,
    SECRET_KEY:secretKey
  };
axios.post(`http://www.m1rrox.fun/api/`, {body})


}

async function deleteObj(id) {
  axios.delete(`http://www.m1rrox.fun:5000/rent/${id}`)
}


export default App