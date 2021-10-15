import React from 'react';
import NoSSR from 'react-no-ssr';
import { Preloader, Placeholder } from 'react-preloading-screen';
import ScrollAnimation from 'react-animate-on-scroll';
import Loader from '../components/Shared/Loader';

export default class Register extends React.Component {
    render() {
        return (
            <NoSSR key="1">
                  <Preloader fadeDuration={1000}>

            <div class="register-main">

                <section class="signup">
                
                    <div class="container">
                        <div class="signup-content">
                            <form id="signup-form" class="signup-form">
                                <h2 class="form-title">Create account</h2>
                                <div class="form-group">
                                    <input type="text" class="form-input" name="name" id="name" placeholder="Your Name"/>
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-input" name="email" id="email" placeholder="Your Email"/>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-input" name="password" id="password" placeholder="Password"/>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-input" name="re_password" id="re_password" placeholder="Repeat your password"/>
                                </div>
                                <div class="form-group">
                                    <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                                    <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                                </div>
                                <div class="form-group">
                                    <input type="submit" name="submit" id="submit" class="form-submit" value="Sign up"/>
                                </div>
                            </form>
                            <p class="loginhere">
                                Have already an account ? <a href="#" class="loginhere-link">Login here</a>
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
