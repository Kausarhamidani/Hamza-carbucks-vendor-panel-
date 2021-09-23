import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import bgImg from '../../assets/images/bg-01.jpg'


export default function Login() {
  const history = useHistory();
  const [state, setState] = useState({
    email: '',
    password: '',
  });
 const loading = 'false'
const [emailclass, setemailclass] = useState('input100')
const [passclass, setpassclass] = useState('input100')
  let handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  
useEffect(() => {
    // alert('55')
  setemailclass(   state.email == '' ?  'input100' :   ' input100 has-val' )
  setpassclass(   state.email == '' ?  'input100' :   ' input100 has-val' )
}, [1, state])
  
 console.log(state);

  return (
    <div class="limiter">
    <div class="container-login100">
        <div class="wrap-login100">
            <form class="login100-form validate-form">
                <span class="login100-form-title p-b-43">
                    Login to continue
                </span>
                
                
                <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                    <input class={emailclass} type="text" name="email" onChange={handleChange} />
                    <span class="focus-input100"></span>
                    <span class="label-input100">Email</span>
                </div>
                
                
                <div class="wrap-input100 validate-input" data-validate="Password is required">
                    <input class= {passclass} type="password" name="pass" onChange={handleChange} />
                    <span class="focus-input100"></span>
                    <span class="label-input100">Password</span>
                </div>

                <div class="flex-sb-m w-full p-t-3 p-b-32">
                    <div class="contact100-form-checkbox">
                        {/* <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                        <label class="label-checkbox100" for="ckb1">
                            Remember me
                        </label> */}
                    </div>

                    <div>
                        <a href="#" class="txt1">
                            Forgot Password?
                        </a>
                    </div>
                </div>
        

                <div class="container-login100-form-btn">
                    <Link to='/'>

                    <button class="login100-form-btn">
                        Login
                    </button>
                    </Link>
                </div>
                
                {/* <div class="text-center p-t-46 p-b-20">
                    <span class="txt2">
                        or sign up using
                    </span>
                </div>

                <div class="login100-form-social flex-c-m">
                    <a href="#" class="login100-form-social-item flex-c-m bg1 m-r-5">
                        <i class="fa fa-facebook-f" aria-hidden="true"></i>
                    </a>

                    <a href="#" class="login100-form-social-item flex-c-m bg2 m-r-5">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                </div> */}
            </form>

            <div class="login100-more" style={{backgroundImage: `url(${bgImg})`}}>
            </div>
        </div>
    </div>
</div>);
}
