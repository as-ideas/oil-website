import React from 'react';

require('./webinar-form.scss');

class WebinarForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      submitting: false,
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitComplete = this.submitComplete.bind(this);
  }

  handleSubmit(event) {
    if(this.inputOK()){
      console.log('send data with: ', this.state.email, this.state.name);
      this.setState({
        submitting: true
      });

      setTimeout(this.submitComplete, 1000);
    }
    event.preventDefault();
  }

  submitComplete() {
    this.setState({
      submitted: true
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      submitting: false
    });
  }

  inputOK() {
    return this.state.email !== '' && this.state.email.match(/@.*?\./) && this.state.name !== '' && this.state.submitting === false;
  }

  render () {
    let content = this.state.submitted ? (
      <p className="webinar__success-message">Thank you for your submission! We will get in touch shortly with details on the next webinar.</p>
    ) : this.inputForm();

    return (
      <div className="webinar">
        <form onSubmit={this.handleSubmit}>
          <h3>OIL Bi-Weekly Webinar</h3>
          <p>
            Join our webinar to learn more about OIL and to clear any remaining questions.
          </p>
          {content}
        </form>
      </div>
    );
  }

  inputForm() {
    return (
      <div>
        <label>
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          E-Mail Address:
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" className="webinar__submit-button " disabled={!this.inputOK()} />

        <p className="smaller">By registering, you submit your information to the webinar organizers, who will use it to communicate with you regarding this event.</p>
      </div>
    )
  }
}

export default WebinarForm;
