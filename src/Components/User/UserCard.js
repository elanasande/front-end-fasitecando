import React from 'react';
import { Card, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 18,
  },
  cover: {
    width: 151,
  },
  center: {
    alignSelf: 'center',
  },
}));

const UserCard = ({ users, map, user }) => {
  const classes = useStyles();
  function mapuser() {
    if (map === false) {
      return (
        <Card key={user.user.id}>
          <CardContent className={classes.center}>
            <Typography gutterBottom variant="h5" component="h2">
              {user.user.first_name} {user.user.last_name}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              {user.user.email}
            </Typography>
          </CardContent>
          <CardMedia
            className={classes.cover}
            component="img"
            image={user.user.avatar}
            height="140"
            width="140"
          ></CardMedia>
        </Card>
      );
    } else
      return (
        <Grid container spacing={3}>
          {users.users.map((user) => (
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>
                <Card key={user.id}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {user.first_name} {user.last_name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {user.email}
                    </Typography>
                  </CardContent>
                  <CardMedia
                    className={classes.cover}
                    component="img"
                    image={user.avatar}
                    height="140"
                    width="140"
                  ></CardMedia>
                </Card>{' '}
              </Paper>
            </Grid>
          ))}
        </Grid>
      );
  }

  return (
    <React.Fragment>
      <center>
        <h1>Listar Usuario(s)</h1>
      </center>
      <Card className={classes.root}>{mapuser()}</Card>
    </React.Fragment>
  );
};

export default UserCard;
