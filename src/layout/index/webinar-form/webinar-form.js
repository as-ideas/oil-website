import React from 'react';

require('./webinar-form.scss');

const WEBINAR_REGISTRATION_URL = 'https://oil-backend.herokuapp.com/oil/api/mail/webinar';

class WebinarForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      submitting: false,
      submitted: false
    };
  }

  handleSubmit = (event) => {
    if (this.inputOK()) {
      this.setState({
        submitting: true
      });
      this.sendWebinarRegistration();
    }
    event.preventDefault();
  };

  sendWebinarRegistration() {
    fetch(WEBINAR_REGISTRATION_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userEmailAddress: this.state.email,
        userName: this.state.name
      })
    }).then(response => {
      if (response.status === 204) {
        this.submitComplete();
      } else {
        console.error(`Received server response with status code ${response.status}!`);
        this.setState({
          error: 'Sending email failed. Please try again later!',
          submitting: false
        });
      }
    }).catch(error => {
      console.error('Mailing webinar registration caused error!', error);
      this.setState({
        error: 'Sending email failed. Please try again later!',
        submitting: false
      });
    });
  }

  submitComplete = () => {
    this.setState({
      submitted: true,
      error: undefined
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      submitting: false,
      error: undefined
    });
  };

  inputOK() {
    return this.state.email !== '' && this.state.name !== '' && this.state.submitting === false;
  }

  render() {
    let content;

    if (this.state.submitted) {
      content = (
        <p className="webinar__success-message">Thank you for your submission! We will get in touch shortly with details on the next webinar.</p>
      )
    } else {
      content = this.inputForm();
    }

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
    let errorMessage = this.state.error ? (<div className="webinar__error-message">{this.state.error}</div>) : '';
    return (
      <div>
        {errorMessage}
        <label>
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
        </label>
        <label>
          E-Mail Address:
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit" className="webinar__submit-button " disabled={!this.inputOK()}/>

        <p className="smaller">By registering, you submit your information to the webinar organizers, who will use it to communicate with you regarding this event.</p>
      </div>
    )
  }
}

export default WebinarForm;
