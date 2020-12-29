import React from 'react';
import { Grid } from '@material-ui/core'
import logo from './images/bookmyshow.jpg'

const Hline = () => {

    return (
        <div >
            <Grid item container>
                <Grid xs={1} />
                <Grid item xs={4}>
                    <hr
                        style={{
                            marginTop: '60px',
                            color: '#c5c5c5',
                        }}
                    />
                </Grid>
                <Grid item xs={2}>
                    <img style={{paddingLeft:'15px'}} src={logo} />
                </Grid>
                <Grid item xs={4}>
                    <hr
                        style={{
                            marginTop: '60px',
                            color: '#c5c5c5',
                        }}
                    />
                </Grid>
                <Grid xs={1}/>
            </Grid>
        </div>
    );
}

export default Hline;