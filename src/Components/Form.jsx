import { useState } from 'react';
import MapComponent from './MapComponent';
import SearchLocationInput from './SearchLocationInput';
import {Link} from "react-router-dom";

const Form = () => {

const [formData, setFormData] = useState({
    username: '',
    email: '',
    occupation: 'pkgfood',
    gender: '',
    languages: [''],
  })

  const [selectedLocation, setSelectedLocation] = useState({
    lat: 28.7041,
    lng: 77.1025,
  });
 
  const onChangeHandler = (event) => {

    console.log(event)
    if (event.target.name === 'languages') {

      let copy = { ...formData }

      if (event.target.checked) {
        copy.languages.push(event.target.value)
      } else {
        copy.languages = copy.languages.filter(el => el !== event.target.value)
      }

      setFormData(copy)

    } else {
      setFormData(() => ({
        ...formData,
        [event.target.name]: event.target.value
      }))
    }
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    console.log(formData)
  }

  const callfunction = () =>{
    return alert("Thank you for your response, we'll get in touch with you shortly");
    <Link to></Link>
  }


  return (<div>
    <div className="App">
      <div className="titlef">
      <Link to="/">
        <h1>Home</h1>
        </Link>
      </div>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="username" className="form-label">Name</label>
          <input className="form-control" name="username" onChange={onChangeHandler} value={formData.username} />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input className="form-control" name="email" onChange={onChangeHandler} />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Contact</label>
          <input className="form-control" name="email" onChange={onChangeHandler} />
        </div>
        <div className="form-group">
          <label htmlFor="occupation" className="form-label">Category</label>
          <select className="form-select" name="occupation" onChange={onChangeHandler} value={formData.occupation}>
          <option value="cookedmeal">Cooked Meal</option>  
          <option value="rawmaterial">Raw Materials</option>
            <option value="pkgfood">Packaged Food</option>
            
          </select>
          
        </div>
        {formData.occupation=="cookedmeal" ? <div className="form-group">
        <label htmlFor="gender" className="form-label">Available</label>
        <div>
          <div>
            <input type="checkbox" name="languages" value="html" onChange={onChangeHandler} checked={formData.languages.indexOf('html') !== -1} />
            <label htmlFor="html">Dal</label>
          </div>
          <div>
            <input type="checkbox" name="languages" value="css" onChange={onChangeHandler} checked={formData.languages.indexOf('css') !== -1} />
            <label htmlFor="css">Steam Rice</label>
          </div>
          <div>
            <input type="checkbox" name="languages" value="javascript" onChange={onChangeHandler} checked={formData.languages.indexOf('javascript') !== -1} />
            <label htmlFor="javascript">Paneer</label>
          </div>
          <div>
          <input type="checkbox" name="languages" value="x" onChange={onChangeHandler} checked={formData.languages.indexOf('x') !== -1} />
          <label htmlFor="x">Roti</label>
          </div>
          <label htmlFor="y">Others:</label>
          <input type="text" name="languages" onChange={onChangeHandler} />
            
        </div>
      </div> : <div></div>}

      {formData.occupation=="rawmaterial" ? <div className="form-group">
        <label htmlFor="gender" className="form-label">Available</label>
        <div>
          <div>
            <input type="checkbox" name="languages" value="html" onChange={onChangeHandler} checked={formData.languages.indexOf('html') !== -1} />
            <label htmlFor="html">Rice</label>
          </div>
          <div>
            <input type="checkbox" name="languages" value="css" onChange={onChangeHandler} checked={formData.languages.indexOf('css') !== -1} />
            <label htmlFor="css">Flour</label>
          </div>
          <div>
            <input type="checkbox" name="languages" value="javascript" onChange={onChangeHandler} checked={formData.languages.indexOf('javascript') !== -1} />
            <label htmlFor="javascript">Vegetables</label>
          </div>
          <div>
          <input type="checkbox" name="languages" value="x" onChange={onChangeHandler} checked={formData.languages.indexOf('x') !== -1} />
          <label htmlFor="x">Fruits</label>
          </div>
          <div>
          <input type="checkbox" name="languages" value="y" onChange={onChangeHandler} checked={formData.languages.indexOf('y') !== -1} />
          <label htmlFor="y">Pulses</label>
          </div>
          <label htmlFor="z">Others:</label>
          <input type="text" name="languages" onChange={onChangeHandler} />
            
        </div>
      </div> : <div></div>}
      
      {formData.occupation=="pkgfood" ? <div className="form-group">
        <label htmlFor="gender" className="form-label">Available</label>
        <div>
          <div>
            <input type="checkbox" name="languages" value="html" onChange={onChangeHandler} checked={formData.languages.indexOf('html') !== -1} />
            <label htmlFor="html">Biscuits</label>
          </div>
          <div>
            <input type="checkbox" name="languages" value="css" onChange={onChangeHandler} checked={formData.languages.indexOf('css') !== -1} />
            <label htmlFor="css">Namkeen</label>
          </div>
          <div>
            <input type="checkbox" name="languages" value="javascript" onChange={onChangeHandler} checked={formData.languages.indexOf('javascript') !== -1} />
            <label htmlFor="javascript">Cakes</label>
          </div>
          <div>
          <input type="checkbox" name="languages" value="x" onChange={onChangeHandler} checked={formData.languages.indexOf('x') !== -1} />
          <label htmlFor="x">Sweets</label>
          </div>
          <div>
          <input type="checkbox" name="languages" value="y" onChange={onChangeHandler} checked={formData.languages.indexOf('y') !== -1} />
          <label htmlFor="y">Juices</label>
          </div>
          <label htmlFor="z">Others:</label>
          <input type="text" name="languages" onChange={onChangeHandler} />
            
        </div>
      </div> : <div></div>}

      <div className='map-bottom'>
      <SearchLocationInput setSelectedLocation={setSelectedLocation} />
      <MapComponent selectedLocation={selectedLocation} />
    </div>

      


        <div className="form-group">
          <button className="btn" type="submit" onClick={callfunction} >Submit</button>
          {console.log(formData)}
        </div>
      </form>
    </div>
    </div>
  );
}

export default Form;
