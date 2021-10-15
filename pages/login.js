import React from 'react';
import NoSSR from 'react-no-ssr';
import { Preloader, Placeholder } from 'react-preloading-screen';
import ScrollAnimation from 'react-animate-on-scroll';
import Loader from '../components/Shared/Loader';

export default class Login extends React.Component {
    render() {
        return (
            <NoSSR key="1">
                 <Preloader fadeDuration={1000}>
            <div class="register-main">

                <section class="signup">
                
                    <div class="container">
                        <div class="signup-content">
                            <form id="signup-form" class="signup-form">
                                <h2 class="form-title">Login to your account</h2>
                                <div class="form-group">
                                    <input type="email" class="form-input" name="email" id="email" placeholder="Your Email"/>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-input" name="password" id="password" placeholder="Password"/>
                                </div>
                                <div class="form-group">
                                    <input type="submit" name="submit" id="submit" class="form-submit" value="Sign in"/>
                                </div>
                            </form>
                            <p class="loginhere">
                                Don't have an account ? <a href="#" class="loginhere-link">Sign up here</a>
                            </p>
                        </div>
                    </div>
                </section>

</div>
<Placeholder>
                        <Loader />
                    </Placeholder>
                    
                </Preloader>
            </NoSSR>
        )
    }
}
