import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ScrollAnimation } from 'react-animate-on-scroll';





const useStyles = makeStyles((theme) => ({
  form: {
    display : 'flex',
    flexDirection : 'column',  
    marginTop: 100,
    width: '100ch',
  },
  button: {
    margin: theme.spacing(3),
    width: '12ch',
  },

}));


export default function Form() {
  const classes = useStyles();
 

  return (
    <div className="d-flex justify-content-center align-items-center p-3 register-main music">
    <form className={classes.form}  autoComplete="off" >
         <div className="row"> 
                        <div className="col-lg-12"> 
                            <div className="section-title" style={{marginTop: '-20px'}}> 
                                    <h2>Upload Music</h2>
                                </div>
                        </div>
                    </div>

                              <div class="form-group">
                                    <input type="text" class="form-input" name="name" id="name" placeholder="Title"/>
                                </div>
         
                                <div class="form-group">
                                    <input type="text" class="form-input" name="name" id="name" placeholder="Description"/>
                                </div>


                                <input type="file"/>
                              

                                <div class="form-group">
                                    <input onClick={() => {e.preventDefault}}type="submit" name="submit" id="submit" class="form-submit" value="Submit"/>
                                </div>
 
    </form>
    </div>
  );
}