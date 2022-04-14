import { useState } from 'react';
import '../css/style.css'
import birds from '../birdNumber'


/* function Input() {
    const [number, setNumber] = useState(birds);
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
        let res = await fetch("https://httpbin.org/post", {
                method: "POST",
                body: JSON.stringify({
                number: number
            }),
        });
        let resJson = await res.json();
            
            if (res.status === 200) {
                setNumber("");
                setMessage("Got your number");
                console.log(number)
            } else {
                setMessage("Some error occured");
            }
        } catch (err) {
            console.log(err);
        }
        
    };

    return(
        <div className='page'>
            <h2>Birds on lake</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-label">
                    <input 
                        type="number" 
                        value={number}
                        className="birds-number" 
                        name="number" 
                        placeholder="&nbsp;" 
                        onChange={(e) => setNumber(e.target.value)}
                        required></input>
                    <label className='placeholder-label'>Birds</label>
                </div>
                <button type='submit' className='send'>send</button>

                <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
        </div>
    )
} */

function Input() {
    const [formFields, setFormFields] = useState(birds)
      const handleFormChange = (event, index) => {
        let data = [...formFields];
        data[index][event.target.name] = event.target.value;
        setFormFields(data);
        
      }
    
      const submit = (e) => {
        e.preventDefault();
        console.log(formFields)

        const removeFields = (index) => {

          let data = [...formFields];
          birds.shift()
          let newElement = {
            id: '',
            birdNumber: ''}

          birds.push(newElement)
          setFormFields(birds)
        }
        removeFields()

      }
    

      return (
        <div className="page">
          <h2>Birds on lake</h2>
          <form onSubmit={submit}>
            {formFields.map((form, index) => {
              return (
                <div className="input-label" key={index}>
                  <input
                    className="birds-number" 
                    type='number'
                    name='birdNumber'
                    placeholder='&nbsp;'
                    onChange={event => handleFormChange(event, index)}
                    value={form.birdNumber}
                  />
                  <label className='placeholder-label'>Birds</label>
                </div>
              )
            })}
            <button className='send' onClick={submit}>Submit</button>
          </form>
        </div>
      );
}

export default Input
