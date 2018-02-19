import { RadioGroup, Radio } from 'react-radio-group'; 

class FormInputApp extends React.Component {
    render() {
        const heading = "Enter Details";
        return (
            <div>
                <Header heading={heading}/>
                <InputForm />   
            </div>
        );
    }
}

const Header = (props) => {
    return(
        <div>
            <h1>{props.heading}</h1>
        </div>
    );
} 

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            age: '',
            checkGender: true,
            gender: undefined,
            selectedValue: '',
            submitStatus: false
        };
    }
   
    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value 
        });
    }

    handleCheckbox(e) {
        
        if (e.target.checked && e.target.value) {
            if (e.target.value === "female") {
                document.getElementById("checkMale").checked = false;
            }
            else {
                document.getElementById("checkFemale").checked = false;
            }
            const value = e.target.value;
            this.setState({
                gender: value
            });
        }
    }

    handleRadioInputChange(value) {
        this.setState({
            selectedValue: value
        });
    }

    handleSubmit(e) {
        this.setState({
            submitStatus: true
        });
        e.preventDefault();
    }
  
   
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>

                
                <label>Enter Full Name:</label>
                <input type="text" name="fullname" onChange={this.handleInputChange.bind(this)}/>

                <label>Enter Age:</label>
                <input type="number" name="age" onChange={this.handleInputChange.bind(this)}/>

                <input id="checkFemale" type="checkbox" name="checkFemale" value="female" onClick={this.handleCheckbox.bind(this)}/>
                <label htmlFor="checkFemale">Female</label>

                <input type="checkbox" id="checkMale" name="checkMale" value="male" onClick={this.handleCheckbox.bind(this)}/>
                <label htmlFor="checkMale">Male</label>

                
                <div>What you do?</div>

                <RadioGroup name="job" selectedValue={this.state.selectedValue} onChange={this.handleRadioInputChange.bind(this)}>
                    <Radio value="teacher" />Teacher
                    <Radio value="doctor" />Doctor
                    <Radio value="engineer" />Engineer
                    <Radio value="other" />Other
                    </RadioGroup>
    
                    <div><input type="submit" value="Submit" /></div>

                </form>

               {this.state.submitStatus && (
                    <div>
                        <div>Your name is: {this.state.fullname}</div>
                        <div>Your age is: {this.state.age}</div>
                        <div>Your gender is: {this.state.gender}</div>
                        <div>Your job is: {this.state.selectedValue}</div>
                    </div>
               )
               }
        </div>
        );
    }
}

ReactDOM.render(<FormInputApp />, document.getElementById('app'));


