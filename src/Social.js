import React from 'react';
import { Grid, IconButton } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    col: {
        color: 'white',
        paddingLeft: '10px',
        marginLeft: '5px'
    }
}));

const Social = () => {
    const classes = useStyles();

    return (
        <div >
            <Grid item container>
                <Grid xs={4} />
                <Grid item xs={4}>
                    <IconButton>
                        <FacebookIcon className={classes.col} fontSize="large" />
                    </IconButton>
                    <IconButton>
                        <TwitterIcon className={classes.col} fontSize="large" />
                    </IconButton>
                    <IconButton>
                        <InstagramIcon className={classes.col} fontSize="large" />
                    </IconButton>
                    <IconButton>
                        <YouTubeIcon className={classes.col} fontSize="large" />
                    </IconButton>
                    <IconButton>
                        <PinterestIcon className={classes.col} fontSize="large" />
                    </IconButton>
                    <IconButton>
                        <LinkedInIcon className={classes.col} fontSize="large" />
                    </IconButton>
                </Grid>
                <Grid xs={4} />
            </Grid>
            <Grid item container>
                <Grid xs={4} />
                <Grid item xs={4}>
                    <span style={{
                        fontSize: '11px',
                        fontWeight: '50',
                        color: '#666',
                        paddingLeft: '45px'
                    }}>Copyright 2020 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.</span>
                </Grid>
                <Grid xs={4} />
            </Grid>
            <Grid item container>
                <Grid xs={1} />
                <Grid item xs={10}>
                <span style={{
                        fontSize: '11px',
                        fontWeight: '50',
                        color: '#666',
                        paddingLeft: '45px'
                    }}>The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied.</span>
                </Grid>
                <Grid xs={1} />
            </Grid>

            <Grid item container>
                <Grid xs={4} />
                <Grid item xs={4}>
                <span style={{
                        fontSize: '11px',
                        fontWeight: '50',
                        color: '#666',
                        paddingLeft: '70px'
                    }}>Unauthorized use is prohibited and punishable by law.</span>
                </Grid>
                <Grid xs={4} />
            </Grid>
        </div>
    );
}

export default Social;