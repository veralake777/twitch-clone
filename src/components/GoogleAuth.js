import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
    componentDidMount() {
        // initialize google js lib for auth2
        // https://developers.google.com/api-client-library/javascript/reference/referencedocs
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '904891345469-d4bnd4ce6nvgqklsh0kpqqeqeuvst1u7.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
    // method for auth changes
    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    // sign in auth
    onSignInClick = () => {
        this.auth.signIn();
    }

    // sign out auth
    onSignOutClick = () => {
        this.auth.signOut();
    }

    // helper render method for logging in
    renderAuthButton() {
        // possible update after google auth code is implemented
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                <i className="google icon" />
                Sign Out
                </button>
            ); 
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                <i className="google icon" />
                Sign In with Google
                </button>
            );
        }
    }

    render() {
        return(
            <div>{this.renderAuthButton()}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn}
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);