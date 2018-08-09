import React from 'react';

require('./webinar-form.scss');

class WebinarForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log('send data with: ', this.state.email, this.state.name);

    event.preventDefault();
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }


  render () {
    return (
      <div className="webinar">
        <form onSubmit={this.handleSubmit}>
          <h2>OIL Bi-Weekly Webinar</h2>
          <p>
            Join our webinar to learn more about OIL and ask us questions.
          </p>

          <label>
            Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </label>
          <label>
            E-Mail Address:
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
          </label>

          <p className="smaller">By registering, you submit your information to the webinar organizers, who will use it to communicate with you regarding this event.</p>
          <div className="webinar__submit-button-container">
            <input type="submit" value="Submit" />
          </div>

        </form>
      </div>
    );
  }
}

export default WebinarForm;
